<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营数据</el-breadcrumb-item>
      <el-breadcrumb-item>在线统计</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row type="flex" justify="space-between">
        <data-panel width="300px" title="实时在线人数" hoverText="当前在线人数(每隔10分钟更新)" :data="onlineNow"></data-panel>
        <data-panel width="300px" title="最高在线人数" iconColor="#ED5565" hoverText="今日统计的实时在线人数中的最高人数" :data="onlineMax"></data-panel>
        <data-panel width="300px" title="平均在线人数" iconColor="#464F88" hoverText="玩家平均在线人数" :data="onlineAvg"></data-panel>
        <data-panel width="300px" title="平均在线时长" iconColor="#F8D347" hoverText="玩家平均在线时长" :data="onlineTimeAvg"></data-panel>
      </el-row>
      <echarts-box title="实时在线人数" xname="时间点" yname="在线人数" ref="onlineCalacRef">
        <div id="onlineCalac" class="echarts600"></div>
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
      echartsOption: {},
      onlineNow: 0,
      onlineMax: 0,
      onlineAvg: 0,
      onlineTimeAvg: 0
    }
  },
  methods: {
    // 数据请求
    getOnlineCalcData() {
      this.$http.get('/api/gadminc/business/onlineData.json').then(res => {
        // X轴赋值
        this.echartsOption.xAxis.data = res.data.dateList
        // Y轴赋值
        this.echartsOption.series[0].data = res.data.numList
        // 面板赋值
        this.onlineNow = res.data.onlineNum
        this.onlineMax = res.data.onlineMaxNum
        this.onlineAvg = res.data.onlineAvgNum
        this.onlineTimeAvg = res.data.avgTime
        // 渲染表格
        this.renderCharts()
      })
    },
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('onlineCalac')).setOption(this.echartsOption)
    }
  },
  mounted() {
    // 储存Echarts常规配置
    this.echartsOption = this.$refs.onlineCalacRef.echartsCommonOption
    // 请求并渲染数据
    this.getOnlineCalcData()
  },
  components: {
    DataPanel,
    EchartsBox
  }
}
</script>

<style>

</style>
