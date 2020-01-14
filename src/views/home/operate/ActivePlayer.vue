<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营数据</el-breadcrumb-item>
      <el-breadcrumb-item>活跃用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row type="flex" justify="space-between">
        <data-panel title="日活跃人数" width="300px" hoverText="1111" :data="activeToday"></data-panel>
        <data-panel title="周活跃人数" width="300px" hoverText="1111" iconColor="#ED5565" :data="active7"></data-panel>
        <data-panel title="月活跃人数" width="300px" hoverText="1111" iconColor="#464F88" :data="active30"></data-panel>
      </el-row>
      <!-- 每日活跃人数 -->
      <echarts-box ref="dailyActiveRef" xname="日期" yname="登录人数" title="每日活跃人数">
        <div id="dailyActive" class="echarts350"></div>
      </echarts-box>
      <!-- 周忠诚用户 -->
      <echarts-box ref="weekLoyalRef" xname="日期" yname="玩家人数" title="周忠诚用户">
        <div id="weekLoyal" class="echarts350"></div>
      </echarts-box>
      <!-- 沉淀指数 -->
      <echarts-box ref="subsideIndexRef" xname="日期" yname="指数" title="沉淀指数">
        <div id="subsideIndex" class="echarts350"></div>
      </echarts-box>
      <!-- 等级分布 -->
      <echarts-box ref="LevelListRef" xname="等级" yname="人数" title="等级分布">
        <div id="LevelList" class="echarts350"></div>
      </echarts-box>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import EchartsBox from '../../../publicComponents/EchartsBox'
import DataPanel from '../../../publicComponents/DataPanel'
export default {
  data() {
    return {
      dailyActiveChartOption: {},
      weekLoyalChartOption: {},
      subsideIndexChartOption: {},
      levelListChartOption: {},
      activeToday: 0,
      active7: 0,
      active30: 0
    }
  },
  methods: {
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('dailyActive')).setOption(this.dailyActiveChartOption)
      echarts.init(document.getElementById('weekLoyal')).setOption(this.weekLoyalChartOption)
      echarts.init(document.getElementById('subsideIndex')).setOption(this.subsideIndexChartOption)
      echarts.init(document.getElementById('LevelList')).setOption(this.levelListChartOption)
    },
    // 数据请求
    getActivePlayerData() {
      this.$http.get('/gadminc/business/activeUser.json').then(res => {
        // 面板数据赋值
        this.activeToday = res.data.actOne
        this.active7 = res.data.actSeven
        this.active30 = res.data.actThirty
        // X轴数据
        this.dailyActiveChartOption.xAxis.data = res.data.daList
        this.weekLoyalChartOption.xAxis.data = res.data.daList
        this.subsideIndexChartOption.xAxis.data = res.data.daList
        this.levelListChartOption.xAxis.data = res.data.levelList
        // Y轴数据
        this.dailyActiveChartOption.series[0].data = res.data.actList
        this.weekLoyalChartOption.series[0].data = res.data.loyalUserList
        this.subsideIndexChartOption.series[0].data = res.data.accumulateList
        this.levelListChartOption.series[0].data = res.data.numList
        // 渲染表格
        this.renderCharts()
      })
    }
  },
  mounted() {
    // 储存Echarts配置数据
    this.dailyActiveChartOption = this.$refs.dailyActiveRef.echartsCommonOption
    this.weekLoyalChartOption = this.$refs.weekLoyalRef.echartsCommonOption
    this.subsideIndexChartOption = this.$refs.subsideIndexRef.echartsCommonOption
    this.levelListChartOption = this.$refs.LevelListRef.echartsCommonOption
    // 请求并渲染数据
    this.getActivePlayerData()
  },
  components: {
    DataPanel,
    EchartsBox
  }
}
</script>

<style>

</style>
