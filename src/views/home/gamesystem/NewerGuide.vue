<template>
  <div class="newerGuideBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>新手引导</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <echarts-box yname="体验人数" xname="引导位置" title="新手引导人数分布" ref="newerGuideChartRef">
        <div id="newerGuideChart" class="echarts600"></div>
      </echarts-box>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import EchartsBox from '../../../publicComponents/EchartsBox'
export default {
  data() {
    return {
      // 表格配置
      echartsOption: {}
    }
  },
  methods: {
    // 数据请求
    getguideData() {
      this.$http.get('api/gadminc/business/guideData.json').then(res => {
        this.echartsOption.xAxis.data = res.data.nameList
        this.echartsOption.series[0].data = res.data.numList
        this.echartsOption.series[0].color = '#336699'
        // 表格初始渲染
        this.renderCharts()
      })
    },
    // 渲染表格
    renderCharts() {
      echarts.init(document.getElementById('newerGuideChart')).setOption(this.echartsOption)
    }
  },
  mounted() {
    // 储存Echarts常规配置
    this.echartsOption = this.$refs.newerGuideChartRef.echartsCommonOption
    // 请求并渲染数据
    this.getguideData()
  },
  components: {
    EchartsBox
  }
}
</script>

<style>
</style>
