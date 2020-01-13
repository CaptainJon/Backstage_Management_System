<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>经济系统</el-breadcrumb-item>
      <el-breadcrumb-item>常规商店</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 数据按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: ActiveButton === '常规の商店'}" @click="ActiveButton = '常规の商店'">常规の商店</el-button>
        <el-button size="small" :class="{arenaActive: ActiveButton === '竞技场天梯'}" @click="ActiveButton = '竞技场天梯'">竞技场天梯</el-button>
        <el-button size="small" :class="{arenaActive: ActiveButton === '竞技场试炼'}" @click="ActiveButton = '竞技场试炼'">竞技场试炼</el-button>
      </el-button-group>
      <!-- 数据表格 -->
      <echarts-box yname="销量" xname="材料名" :title="title" ref="gamestoreChartRef" :ygap="100">
        <div id="gamestoreChart" class="echarts600"></div>
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
      ActiveButton: '常规の商店',
      title: '常规の商店',
      echartsOption: {}
    }
  },
  methods: {
    // 查询按钮点击
    searchClicked(time) {
      this.getGameStoreData(time)
    },
    // 数据获取
    getGameStoreData(time) {
      this.$http.get('/api/gadminc/business/shopBuyItem.json', {
        params: {
          startTime: time[0],
          endTime: time[1]
        }
      }).then(res => {
        console.log(res)
        // 标题设定
        this.title = this.ActiveButton
        // 数据赋值
        if (this.ActiveButton === '常规の商店') {
          this.echartsOption.xAxis.data = res.data.ordinary.nameList
          this.echartsOption.series[0].data = res.data.ordinary.numList
        } else if (this.ActiveButton === '竞技场天梯') {
          this.echartsOption.xAxis.data = res.data.sportsLadder.nameList
          this.echartsOption.series[0].data = res.data.sportsLadder.numList
        } else {
          this.echartsOption.xAxis.data = res.data.arenaTrain.nameList
          this.echartsOption.series[0].data = res.data.arenaTrain.numList
        }
        // 渲染表格
        this.renderCharts()
      })
    },
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('gamestoreChart')).setOption(this.echartsOption)
    }
  },
  mounted() {
    this.echartsOption = this.$refs.gamestoreChartRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>

</style>
