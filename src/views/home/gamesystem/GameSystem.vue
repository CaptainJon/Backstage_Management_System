<template>
  <div class="gameSystemBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>系统功能</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="childsearchbtnclicked"></time-select>
      <el-row :gutter="10">
        <!-- 任务系统 -->
        <el-col :span="12">
          <echarts-box xname="任务名称" yname="进行次数" title="任务系统" ref="missionChartRef">
            <div id="missionChart" class="echarts600"></div>
          </echarts-box>
        </el-col>
        <!-- 英雄系统 -->
        <el-col :span="12">
          <echarts-box xname="英雄系统功能" yname="进行次数" title="英雄系统" ref="herosChartRef">
            <div id="herosChart" class="echarts600"></div>
          </echarts-box>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <!-- 召唤系统 -->
        <el-col :span="12">
          <echarts-box xname="召唤系统功能" yname="进行次数" title="召唤系统" ref="summonChartRef">
            <div id="summonChart" class="echarts600"></div>
          </echarts-box>
        </el-col>
        <!-- 其他活动系统、好友协战、在线奖励系统 -->
        <el-col :span="12">
          <echarts-box xname="其他系统功能" yname="进行次数" title="其他系统" ref="otherChartsRef">
            <div id="otherCharts" class="echarts600"></div>
          </echarts-box>
        </el-col>
      </el-row>
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
      // 任务系统Echarts常规配置
      missionEchartsOption: {},
      // 英雄系统Echarts常规配置
      herosEchartsOption: {},
      // 召唤系统Echarts常规配置
      summonEchartsOption: {},
      // 其他系统Echarts常规配置
      otherEchartsOption: {},
      // 任务系统X轴数据源
      missionXdata: ['每日任务', '见习任务', '主线任务', '周常任务'],
      // 英雄系统X轴数据源
      heroXdata: [
        '英雄升级',
        '英雄升星',
        '碎片兑换',
        '技能升级',
        '武器升级',
        '核芯升级',
        '核芯分解'
      ],
      // 召唤系统X轴数据源
      callXdata: [
        '英雄1',
        '英雄10',
        '核芯1',
        '核芯10',
        '限定英雄1',
        '限定英雄10',
        '限定道具1',
        '限定道具10'
      ],
      // 其他系统X轴数据源
      otherXdata: ['七日活动', '兑换活动', '好友协战', '在线奖励领取']
    }
  },
  components: {
    TimeSelect,
    EchartsBox
  },
  methods: {
    // 请求数据
    getGameSystemData(selectedTime) {
      this.$http.get('/gadminc/business/system.json', {
        params: {
          startTime: selectedTime[0],
          endTime: selectedTime[1]
        }
      }).then(res => {
        // X轴数据赋值
        this.missionEchartsOption.xAxis.data = this.missionXdata
        this.herosEchartsOption.xAxis.data = this.heroXdata
        this.summonEchartsOption.xAxis.data = this.callXdata
        this.otherEchartsOption.xAxis.data = this.otherXdata
        // Y轴数据赋值
        this.missionEchartsOption.series[0].data = res.data.missionList
        this.missionEchartsOption.series[0].color = '#336699'
        this.herosEchartsOption.series[0].data = res.data.heroList
        this.herosEchartsOption.series[0].color = '#464F88'
        this.summonEchartsOption.series[0].data = res.data.callList
        this.summonEchartsOption.series[0].color = '#293C55'
        this.otherEchartsOption.series[0].data = res.data.otherList
        this.otherEchartsOption.series[0].color = '#A9334C'
        // 数据渲染
        this.renderCharts()
      })
    },
    // 子组件查询按钮点击
    childsearchbtnclicked(selectedTime) {
      // 获取并渲染数据
      this.getGameSystemData(selectedTime)
    },
    // 渲染表格
    renderCharts() {
      echarts.init(document.getElementById('missionChart')).setOption(this.missionEchartsOption)
      echarts.init(document.getElementById('herosChart')).setOption(this.herosEchartsOption)
      echarts.init(document.getElementById('summonChart')).setOption(this.summonEchartsOption)
      echarts.init(document.getElementById('otherCharts')).setOption(this.otherEchartsOption)
    }
  },
  mounted() {
    // 储存子组件Echarts常规配置
    this.missionEchartsOption = this.$refs.missionChartRef.echartsCommonOption
    this.herosEchartsOption = this.$refs.herosChartRef.echartsCommonOption
    this.summonEchartsOption = this.$refs.summonChartRef.echartsCommonOption
    this.otherEchartsOption = this.$refs.otherChartsRef.echartsCommonOption
  }
}
</script>

<style>
.gameSystemBox .el-row {
  margin-top: 15px;
}
</style>
