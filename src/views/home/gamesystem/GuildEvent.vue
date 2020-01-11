<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>战队活动</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 战队任务 -->
      <echarts-box ref="guildQuestChartRef" title="战队任务" xname="日期区间" yname="获取次数">
        <div class="echarts600" id="guildQuestChart"></div>
      </echarts-box>
      <!-- 积分礼包 -->
      <echarts-box ref="potinsBundleChartRef" title="积分礼包" xname="日期区间" yname="获取次数">
        <div class="echarts600" id="potinsBundleChart"></div>
      </echarts-box>
      <!-- 回馈礼包 -->
      <echarts-box ref="paybackBundleChartRef" title="回馈礼包" xname="日期区间" yname="获取次数">
        <div class="echarts600" id="paybackBundleChart"></div>
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
      // 战队任务表格配置
      guildQuestChartOption: {},
      // 战队任务表格配置
      pointsBundleChartOption: {},
      // 战队任务表格配置
      paybackBundleChartOption: {},
      // 战队任务数据
      guildQuestData: [],
      // 积分礼包数据
      pointsBundleData: [],
      // 回馈礼包数据
      paybackBundleData: [],
      // 颜色盘
      colorArr: ['#2F4554', '#D06D6A', '#006699', '#4CABCE', '#8CB8BE', '#DDA38F']
    }
  },
  components: {
    TimeSelect,
    EchartsBox
  },
  methods: {
    // 查询按钮点击
    searchClicked(selectedTime) {
      // 获取数据
      this.getGuildEventData(selectedTime)
    },
    // 页面数据获取
    getGuildEventData(selectedTime) {
      this.$http
        .get('/api/gadminc/business/combatTeamMission.json', {
          params: {
            startTime: selectedTime[0],
            endTime: selectedTime[1]
          }
        })
        .then(res => {
          // X轴数据赋值
          this.guildQuestChartOption.xAxis.data = res.data.daList
          this.pointsBundleChartOption.xAxis.data = res.data.daList
          this.paybackBundleChartOption.xAxis.data = res.data.daList
          // Y轴数据赋值
          // 战队任务
          for (let i = 0; i < res.data.missionTimes.length; i++) {
            this.guildQuestData.push({
              type: 'line',
              color: this.colorArr[i],
              name: '',
              barMaxWidth: 40,
              label: {
                show: true,
                position: 'top'
              },
              data: res.data.missionTimes[i].times
            })
          }
          // 积分礼包
          for (let i = 0; i < res.data.activeTimes.length; i++) {
            this.pointsBundleData.push({
              type: 'line',
              color: this.colorArr[i],
              name: '',
              barMaxWidth: 40,
              label: {
                show: true,
                position: 'top'
              },
              data: res.data.activeTimes[i].times
            })
          }
          // 回馈礼包
          for (let i = 0; i < res.data.repayTimes.length; i++) {
            this.paybackBundleData.push({
              type: 'line',
              color: this.colorArr[i],
              name: '',
              barMaxWidth: 40,
              label: {
                show: true,
                position: 'top'
              },
              data: res.data.repayTimes[i].times
            })
          }
          // 将赋值后的数据到配置模板
          this.guildQuestChartOption.series = this.guildQuestData
          this.pointsBundleChartOption.series = this.pointsBundleData
          this.paybackBundleChartOption.series = this.paybackBundleData
          // 获取并渲染数据
          this.renderCharts()
        })
    },
    // 渲染表格
    renderCharts() {
      echarts
        .init(document.getElementById('guildQuestChart'))
        .setOption(this.guildQuestChartOption)
      echarts
        .init(document.getElementById('potinsBundleChart'))
        .setOption(this.pointsBundleChartOption)
      echarts
        .init(document.getElementById('paybackBundleChart'))
        .setOption(this.paybackBundleChartOption)
    }
  },
  mounted() {
    // 储存子组件Echarts常规配置
    this.guildQuestChartOption = this.$refs.guildQuestChartRef.echartsCommonOption
    this.pointsBundleChartOption = this.$refs.potinsBundleChartRef.echartsCommonOption
    this.paybackBundleChartOption = this.$refs.paybackBundleChartRef.echartsCommonOption
  }
}
</script>

<style>
</style>
