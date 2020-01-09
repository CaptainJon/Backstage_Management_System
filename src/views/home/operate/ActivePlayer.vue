<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营数据</el-breadcrumb-item>
      <el-breadcrumb-item>活跃用户</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <data-panel title="日活跃人数" width="300px" hoverText="1111"></data-panel>
        <data-panel title="周活跃人数" width="300px" hoverText="1111"></data-panel>
        <data-panel title="月活跃人数" width="300px" hoverText="1111"></data-panel>
      </el-row>
      <!-- 每日活跃人数 -->
      <echarts-box ref="dailyActiveRef">
        <div id="dailyActive" class="echarts600"></div>
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
      dailyActiveChartOption: {}
    }
  },
  methods: {
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('dailyActive')).setOption(this.dailyActiveChartOption)
    },
    // 数据请求
    getActivePlayerData() {
      this.$http.get('/api/gadminc/business/activeUser.json').then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.dailyActiveChartOption = this.$refs.dailyActiveRef.echartsCommonOption
  },
  components: {
    DataPanel,
    EchartsBox
  }
}
</script>

<style>

</style>
