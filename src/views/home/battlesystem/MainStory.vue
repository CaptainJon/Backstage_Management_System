<template>
  <div class="mainStoryBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>主线剧情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 难度按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: diffActiveButton === '普通'}" @click="diffActiveButton = '普通'">普通</el-button>
        <el-button size="small" :class="{arenaActive: diffActiveButton === '困难'}" @click="diffActiveButton = '困难'">困难</el-button>
        <el-button size="small" :class="{arenaActive: diffActiveButton === '天启'}" @click="diffActiveButton = '天启'">天启</el-button>
      </el-button-group>
      <!-- 数据分类按钮组 -->
      <el-button-group class="dataBtnGroup">
        <el-button size="small" :class="{arenaActive: activeButton === 'total'}" @click="activeButton = 'total'">总挑战次数 </el-button>
        <el-button size="small" :class="{arenaActive: activeButton === 'avg'}" @click="activeButton = 'avg'">人均挑战次数</el-button>
        <el-button size="small" :class="{arenaActive: activeButton === 'ppl'}" @click="activeButton = 'ppl'">总挑战人数</el-button>
      </el-button-group>
      <!-- 数据表格 -->
      <echarts-box yname="挑战次数" xname="剧情关卡" :title="title" ref="mainStoryChartRef">
        <div id="mainStoryChart" class="echarts600"></div>
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
      diffActiveButton: '普通',
      activeButton: 'total',
      title: '总挑战次数—普通',
      // 表格配置
      echartsOption: {},
      difficulty: '0'
    }
  },
  methods: {
    // 渲染表格
    renderCharts() {
      echarts.init(document.getElementById('mainStoryChart')).setOption(this.echartsOption)
    },
    // 查询点击
    searchClicked(selectedTime) {
      this.getMainStoryData(selectedTime)
    },
    // 获取数据
    getMainStoryData(selectedTime) {
      this.$http.get('/api/gadminc/business/mainStory.json').then(res => {
        console.log(res)
        // X轴数据赋值,由于关卡数据一致，因此取任意数据的nameList皆可
        this.echartsOption.xAxis.data = res.data.avgCount.nameList
        // Y轴数据赋值
        if (this.activeButton === 'total') { // 总挑战次数
          this.title = '总挑战次数—' + this.diffActiveButton
          this.echartsOption.series[0].data = res.data.storyTotal.numList
        } else if (this.activeButton === 'avg') { // 人均挑战次数
          this.title = '人均挑战次数—' + this.diffActiveButton
          this.echartsOption.series[0].data = res.data.avgCount.numList
        } else { // 总挑战人数
          this.title = '总挑战人数—' + this.diffActiveButton
          this.echartsOption.series[0].data = res.data.playerCount.numList
        }
        // 渲染数据
        this.renderCharts()
      })
    }
  },
  mounted() {
    // 存储Echarts常规配置数据
    this.echartsOption = this.$refs.mainStoryChartRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>
.mainStoryBox .dataBtnGroup{
  margin-left: 36px;
}
</style>
