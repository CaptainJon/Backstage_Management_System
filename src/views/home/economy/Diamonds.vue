<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>经济系统</el-breadcrumb-item>
      <el-breadcrumb-item>晶体钻石</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 钻石获取消耗差值表格 -->
      <echarts-box yname="差值" xname="时间" title="钻石获取和消耗差值 ( 获取数 - 消耗数 )" ref="diamondsDeficitChartRef">
        <div id="diamondsDeficitChart" class="echarts500"></div>
      </echarts-box>
      <el-row :gutter='20'>
        <!-- 钻石获取占比表格 -->
        <el-col :span=12>
          <echarts-box ref="diamondsGetRateRef" title="钻石获取占比">
            <div id="diamondsGetRate" class="echarts500"></div>
          </echarts-box>
        </el-col>
        <!-- 钻石消耗占比表格 -->
        <el-col :span=12>
          <echarts-box ref="diamondsComsumeRateRef" title="钻石消耗占比">
            <div id="diamondsComsumeRate" class="echarts500"></div>
          </echarts-box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <!-- 任务系统钻石获取占比表格 -->
          <echarts-box ref="questDiamondsGetRateRef" title="任务系统钻石获取占比">
            <div id="questDiamondsGetRate" class="echarts500"></div>
          </echarts-box>
        </el-col>
        <el-col :span="12">
          <el-row>
            <!-- 邮件系统钻石获取占比 -->
            <echarts-box ref="mailDiamondsGetRateRef" title="邮件系统钻石获取占比">
              <div id="mailDiamondsGetRate" class="echarts197"></div>
            </echarts-box>
          </el-row>
          <el-row>
            <!-- 活动系统钻石获取占比 -->
            <echarts-box ref="eventDiamondsGetRateRef" title="活动系统钻石获取占比">
              <div id="eventDiamondsGetRate" class="echarts197"></div>
            </echarts-box>
          </el-row>
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
      // 柱状图
      diamondsDeficitChartOption: {},
      // 饼状图配置
      diamondsGetRateChartOption: {},
      diamondsComsumeRateChartOption: {},
      questDiamondsGetRateChartOption: {},
      mailDiamondsGetRateChartOption: {},
      evenDiamondsGetRateChartOption: {},
      // 饼状图Y轴series数据
      diamondsGetRateChartSeries: [],
      diamondsComsumeRateChartSeries: [],
      questDiamondsGetRateChartSeries: [],
      mailDiamondsGetRateChartSeries: [],
      eventDiamondsGetRateChartSeries: []
    }
  },
  methods: {
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('diamondsDeficitChart')).setOption(this.diamondsDeficitChartOption)
      echarts.init(document.getElementById('diamondsGetRate')).setOption(this.diamondsGetRateChartOption)
      echarts.init(document.getElementById('diamondsComsumeRate')).setOption(this.diamondsComsumeRateChartOption)
      echarts.init(document.getElementById('questDiamondsGetRate')).setOption(this.questDiamondsGetRateChartOption)
      echarts.init(document.getElementById('mailDiamondsGetRate')).setOption(this.mailDiamondsGetRateChartOption)
      echarts.init(document.getElementById('eventDiamondsGetRate')).setOption(this.evenDiamondsGetRateChartOption)
    },
    // 查询点击事件
    searchClicked(time) {
      this.getDiamondsData(time)
    },
    getDiamondsData(time) {
      this.$http.get('/gadminc/business/diamondHandle.json', {
        params: {
          startTime: time[0],
          endTime: time[1]
        }
      }).then(res => {
        // 钻石获取和消耗差值
        this.diamondsDeficitChartOption.xAxis.data = res.data.dList
        this.diamondsDeficitChartOption.series[0].data = res.data.numList
        // 钻石获取占比
        this.diamondsGetRateChartSeries = [{
          name: '钻石获取来源',
          type: 'pie',
          data: [
            { value: res.data.mailReward, name: '邮件奖励' },
            { value: res.data.missionReward, name: '任务系统' },
            { value: res.data.activityReward, name: '活动系统' },
            { value: res.data.mainPlot, name: '主线剧情' }
          ]
        }]
        this.diamondsGetRateChartOption.series = this.diamondsGetRateChartSeries
        // 钻石消耗占比
        this.diamondsComsumeRateChartSeries = [{
          name: '钻石消耗去向',
          type: 'pie',
          data: [
            { value: res.data.recruitHero, name: '英雄招募' },
            { value: res.data.recruitProp, name: '核芯招募' },
            { value: res.data.strengthExchange, name: '体力兑换' },
            { value: res.data.buyTrain, name: '试炼购买' },
            { value: res.data.shopBuyCost, name: '商店购买花费' }
          ]
        }]
        this.diamondsComsumeRateChartOption.series = this.diamondsComsumeRateChartSeries
        // 任务系统钻石获取占比
        this.questDiamondsGetRateChartSeries = [{
          name: '任务钻石来源',
          type: 'pie',
          data: [
            { value: res.data.dailyBox, name: '日常宝箱' },
            { value: res.data.dailyMission, name: '日常任务' },
            { value: res.data.achivementMission, name: '成就奖励' },
            { value: res.data.mainMission, name: '主线任务' }
          ]
        }]
        this.questDiamondsGetRateChartOption.series = this.questDiamondsGetRateChartSeries
        // 邮件系统钻石获取占比
        this.mailDiamondsGetRateChartSeries = [{
          name: '邮件钻石来源',
          type: 'pie',
          data: [
            { value: res.data.systemProvide, name: '系统发放' },
            { value: res.data.sportsLadder, name: '竞技场天梯' },
            { value: res.data.arenaTrain, name: '竞技场试炼' },
            { value: res.data.mailElse, name: '邮件其他' }
          ]
        }]
        this.mailDiamondsGetRateChartOption.series = this.mailDiamondsGetRateChartSeries
        // 活动系统钻石获取占比
        this.eventDiamondsGetRateChartSeries = [{
          name: '活动钻石占比',
          type: 'pie',
          data: [
            { value: res.data.sevenDayActivity, name: '七日活动' },
            { value: res.data.exchangeActivity, name: '兑换活动' }
          ]
        }]
        this.evenDiamondsGetRateChartOption.series = this.eventDiamondsGetRateChartSeries
        // 渲染表格
        this.renderCharts()
      })
    }
  },
  mounted() {
    this.diamondsDeficitChartOption = this.$refs.diamondsDeficitChartRef.echartsCommonOption
    this.diamondsGetRateChartOption = this.$refs.diamondsGetRateRef.echartsPieOption
    this.diamondsComsumeRateChartOption = this.$refs.diamondsComsumeRateRef.echartsPieOption
    this.questDiamondsGetRateChartOption = this.$refs.questDiamondsGetRateRef.echartsPieOption
    this.mailDiamondsGetRateChartOption = this.$refs.mailDiamondsGetRateRef.echartsPieOption
    this.evenDiamondsGetRateChartOption = this.$refs.eventDiamondsGetRateRef.echartsPieOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>

</style>
