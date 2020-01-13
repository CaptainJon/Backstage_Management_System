<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>运营数据</el-breadcrumb-item>
      <el-breadcrumb-item>次日留存</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <echarts-box ref="nextSavingRef" xname="日期" yname="玩家人数">
        <div id="nextSaving" class="echarts600"></div>
      </echarts-box>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import TimeSelect from '../../../publicComponents/TimeSelect'
import EchartsBox from '../../../publicComponents/EchartsBox'
export default {
  data() {
    return {
      echartsOption: {}
    }
  },
  methods: {
    // 查询点击
    searchClicked(time) {
      this.getNextSavingData(time)
    },
    // 数据请求
    getNextSavingData(time) {
      this.$http.get('/api/gadminc/business/yesterdayLoseKeep.json', {
        params: {
          startTime: time[0],
          endTime: time[1]
        }
      }).then(res => {
        // X轴赋值
        this.echartsOption.xAxis.data = res.data.dateList
        // Y轴赋值
        this.echartsOption.series = []
        this.echartsOption.series[0] = {
          type: 'bar',
          color: '#45584A',
          name: '昨日新增',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: res.data.addList
        }
        this.echartsOption.series[1] = {
          type: 'bar',
          color: '#1F85C7',
          name: '昨日留存',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: res.data.keepList
        }
        // 渲染表格
        this.renderCharts()
      })
    },
    renderCharts() {
      echarts.init(document.getElementById('nextSaving')).setOption(this.echartsOption)
    }
  },
  mounted() {
    // 储存Echarts常规配置数据
    this.echartsOption = this.$refs.nextSavingRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>

</style>
