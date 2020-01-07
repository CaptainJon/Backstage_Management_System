<template>
  <div class="newerGuideBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>新手引导</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <echarts-template :xdata="xdata" :ydata="ydata" yname="体验人数" xname="引导位置" title="新手引导人数分布" :ygap="60" v-if="xdata.length > 0"></echarts-template>
    </el-card>
  </div>
</template>

<script>
import EchartsTemplate from '../../../publicComponents/EchartsTemplate'
export default {
  data() {
    return {
      xdata: [],
      ydata: [
        {
          type: 'bar',
          color: '#336699',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ]
    }
  },
  methods: {
    // 新手数据请求
    getguideData() {
      this.$http.get('/api/gadminc/business/guideData.json').then(res => {
        this.xdata = res.data.nameList
        this.ydata[0].data = res.data.numList
      })
    }
  },
  created() {
    this.getguideData()
  },
  components: {
    EchartsTemplate
  }
}
</script>

<style>
</style>
