<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营数据</el-breadcrumb-item>
      <el-breadcrumb-item>新增用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row type="flex" justify="space-between">
        <data-panel maxWidth="300px" title="今日新增" hoverText="今日注册的账号数量" :data="todayAdd"></data-panel>
        <data-panel maxWidth="300px" title="三日新增" iconColor="#ED5565" hoverText="前3天注册的账号数之和" :data="threeDayAdd"></data-panel>
        <data-panel maxWidth="300px" title="七日新增" iconColor="#464F88" hoverText="前7天注册的账号数之和" :data="sevenDayAdd"></data-panel>
        <data-panel maxWidth="300px" title="月度新增" iconColor="#F8D347" hoverText="前30天注册的账号数之和" :data="thrityDayAdd"></data-panel>
        <data-panel maxWidth="300px" title="总体新增" iconColor="#69CDB9" hoverText="截止到今天的注册账号数之和" position="left-end" :data="totalAdd"></data-panel>
      </el-row>
      <!-- 每日新增人数 -->
      <echarts-box title="每日新增人数" ref="dailyNewerRef" xname="日期" yname="新增人数">
        <div id="dailyNewer" class="echarts600"></div>
      </echarts-box>
      <!-- 每日登陆人数 -->
      <echarts-box title="每日登陆人数" ref="dailyLoginRef" xname="日期" yname="登陆人数">
        <div id="dailyLogin" class="echarts600"></div>
      </echarts-box>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import DataPanel from '../../../publicComponents/DataPanel'
import EchartsBox from '../../../publicComponents/EchartsBox'
export default {
  data() {
    return {
      dailyNewerChartOption: {},
      dailyLoginChartOption: {},
      todayAdd: 0,
      threeDayAdd: 0,
      sevenDayAdd: 0,
      thrityDayAdd: 0,
      totalAdd: 0
    }
  },
  created() {

  },
  methods: {
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('dailyNewer')).setOption(this.dailyNewerChartOption)
      echarts.init(document.getElementById('dailyLogin')).setOption(this.dailyLoginChartOption)
    },
    // 数据请求
    getNewPlayerData() {
      this.$http.get('/gadminc/business/userIncreased.json').then(res => {
        // X轴赋值
        this.dailyNewerChartOption.xAxis.data = res.data.daList
        this.dailyLoginChartOption.xAxis.data = res.data.daList
        // Y轴赋值
        this.dailyNewerChartOption.series[0].data = res.data.numList
        this.dailyLoginChartOption.series[0].data = res.data.loginList
        // 面板数据赋值
        this.todayAdd = res.data.todayReg
        this.threeDayAdd = res.data.threeDayReg
        this.sevenDayAdd = res.data.sevenDayReg
        this.thrityDayAdd = res.data.thrityDayReg
        this.totalAdd = res.data.totalReg
        // 渲染表格
        this.renderCharts()
      })
    }
  },
  mounted() {
    // 储存Echarts常规配置
    this.dailyNewerChartOption = this.$refs.dailyNewerRef.echartsCommonOption
    this.dailyLoginChartOption = this.$refs.dailyLoginRef.echartsCommonOption
    // 请求并渲染数据
    this.getNewPlayerData()
  },
  components: {
    DataPanel,
    EchartsBox
  }
}
</script>

<style>

</style>
