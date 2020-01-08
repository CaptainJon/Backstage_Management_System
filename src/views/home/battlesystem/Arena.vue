<template>
  <div class="arenaBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>竞技场</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: activeButton === '0'}" @click="activeButton = '0'">总挑战次数</el-button>
        <el-button size="small" :class="{arenaActive: activeButton === '1'}" @click="activeButton = '1'">人均挑战次数</el-button>
        <el-button size="small" :class="{arenaActive: activeButton === '2'}" @click="activeButton = '2'">总挑战人数</el-button>
      </el-button-group>
      <!-- 数据表格 -->
      <echarts-box ref="arenaEchartsRef" :title="title" yname="挑战数据" xname="时间日期">
        <div id="arenaChart" class="echarts600"></div>
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
      // 表格配置
      echartsOption: {},
      activeButton: '0',
      // 表格第二条数据模板
      secondChartData: {
        type: 'bar',
        color: '#45584A',
        name: '',
        barMaxWidth: 40,
        label: {
          show: true,
          position: 'top'
        },
        data: []
      },
      // 表格标题
      title: ''
    }
  },
  components: {
    TimeSelect,
    EchartsBox
  },
  methods: {
    // 查询按钮点击
    searchClicked(time) {
      this.getArenaData()
    },
    // 获取页面数据
    getArenaData() {
      this.$http.get('/api/gadminc/business/arena.json').then(res => {
        // X轴数据赋值
        this.echartsOption.xAxis.data = res.data.dateList
        // 添加并重置第二条series数据到配置模板
        this.echartsOption.series[1] = this.secondChartData
        // 设置每条数据的显示名称
        this.echartsOption.series[0].name = '试炼挑战'
        this.echartsOption.series[1].name = '天梯挑战'
        // 按钮触发判断
        if (this.activeButton === '0') { // 总挑战次数
          this.title = '天梯/试炼总挑战次数'
          this.echartsOption.series[0].data = res.data.atcountList
          this.echartsOption.series[1].data = res.data.slcountList
        } else if (this.activeButton === '1') { // 人均挑战次数
          this.title = '天梯/试炼人均挑战次数'
          this.echartsOption.series[0].data = res.data.atavgList
          this.echartsOption.series[1].data = res.data.slavgList
        } else { // 总挑战人数
          this.title = '天梯/试炼总挑战人数'
          this.echartsOption.series[0].data = res.data.atmemberList
          this.echartsOption.series[1].data = res.data.slmemberList
        }
        // 渲染表格
        this.renderChart()
      })
    },
    // 表格渲染
    renderChart() {
      echarts.init(document.getElementById('arenaChart')).setOption(this.echartsOption)
    }
  },
  mounted() {
    // 子组件渲染完后，存储子组件的Echarts配置
    this.echartsOption = this.$refs.arenaEchartsRef.echartsCommonOption
    // 初步渲染表格
    this.renderChart()
  }
}
</script>

<style>
#arenaChart {
  height: 600px;
}
.arenaActive{
  background-color: #337AB7!important;
  color: #fff!important;
}
.arenaBox .el-button-group .el-button:hover{
  background-color: #e6e6e6;
  color: #333333;
}
</style>
