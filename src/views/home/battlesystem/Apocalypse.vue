<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>天启大战</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: activeButton === '0'}" @click="activeButton = '0'">总挑战次数</el-button>
        <el-button size="small" :class="{arenaActive: activeButton === '1'}" @click="activeButton = '1'">总挑战人数</el-button>
      </el-button-group>
      <echarts-box ref="apocalypseChartRef" xname="据点战层" yname="挑战数据" :title="title">
        <div id="apocalypseChart" class="echarts600"></div>
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
      activeButton: '0',
      echartsOption: {},
      title: '总挑战次数'
    }
  },
  methods: {
    // 查询点击
    searchClicked(time) {
      this.getApocalypseData(time)
    },
    // 数据获取
    getApocalypseData(time) {
      this.$http.get('/api/gadminc/business/apocalypse.json', {
        params: {
          startTime: time[0],
          endTime: time[1]
        }
      }).then(res => {
        // X轴数据赋值
        this.echartsOption.xAxis.data = res.data.playerCount.nameList
        // Y轴赋值
        if (this.activeButton === '0') {
          this.title = '总挑战次数'
          this.echartsOption.series[0].data = res.data.storyTotal.numList
        } else {
          this.title = '总挑战人数'
          this.echartsOption.series[0].data = res.data.playerCount.numList
        }
        // 渲染数据
        this.renderCharts()
      })
    },
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('apocalypseChart')).setOption(this.echartsOption)
    }
  },
  mounted() {
    // 储存Echarts配置数据
    this.echartsOption = this.$refs.apocalypseChartRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>

</style>
