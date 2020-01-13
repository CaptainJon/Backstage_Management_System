<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>经济系统</el-breadcrumb-item>
      <el-breadcrumb-item>金币系统</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 金币获取消耗差值表格 -->
      <echarts-box yname="差值" xname="时间" title="金币获取消耗差值" ref="coinsDeficitChartRef" :ygap="100">
        <div id="coinsDeficitChart" class="echarts500"></div>
      </echarts-box>
      <el-row :gutter='20'>
        <!-- 金币获取占比表格 -->
        <el-col :span=12>
          <echarts-box ref="coinsGetRateRef" title="金币获取占比">
            <div id="coinsGetRate" class="echarts500"></div>
          </echarts-box>
        </el-col>
        <!-- 金币消耗占比表格 -->
        <el-col :span=12>
          <echarts-box ref="coinsComsumeRateRef" title="金币消耗占比">
            <div id="coinsComsumeRate" class="echarts500"></div>
          </echarts-box>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <!-- 任务系统金币获取占比表格 -->
          <echarts-box ref="questCoinGetRateRef" title="任务系统金币获取占比">
            <div id="questCoinGetRate" class="echarts500"></div>
          </echarts-box>
        </el-col>
        <el-col :span="12">
          <el-row>
            <!-- 邮件系统金币获取占比 -->
            <echarts-box ref="mailCoinGetRateRef" title="邮件系统金币获取占比">
              <div id="mailCoinGetRate" class="echarts197"></div>
            </echarts-box>
          </el-row>
          <el-row>
            <!-- 活动系统金币获取占比 -->
            <echarts-box ref="eventCoinGetRateRef" title="活动系统金币获取占比">
              <div id="eventCoinGetRate" class="echarts197"></div>
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
      coinsDeficitChartOption: {},
      // 饼状图配置
      coinsGetRateChartOption: {},
      coinsComsumeRateChartOption: {},
      questCoinGetRateChartOption: {},
      mailCoinGetRateChartOption: {},
      evenCoinGetRateChartOption: {},
      // 饼状图Y轴series数据
      coinsGetRateChartSeries: [],
      coinsComsumeRateChartSeries: [],
      questCoinGetRateChartSeries: [],
      mailCoinGetRateChartSeries: [],
      eventCoinGetRateChartSeries: []
    }
  },
  methods: {
    // 表格渲染
    renderCharts() {
      echarts.init(document.getElementById('coinsDeficitChart')).setOption(this.coinsDeficitChartOption)
      echarts.init(document.getElementById('coinsGetRate')).setOption(this.coinsGetRateChartOption)
      echarts.init(document.getElementById('coinsComsumeRate')).setOption(this.coinsComsumeRateChartOption)
      echarts.init(document.getElementById('questCoinGetRate')).setOption(this.questCoinGetRateChartOption)
      echarts.init(document.getElementById('mailCoinGetRate')).setOption(this.mailCoinGetRateChartOption)
      echarts.init(document.getElementById('eventCoinGetRate')).setOption(this.evenCoinGetRateChartOption)
    },
    // 查询点击事件
    searchClicked(time) {
      this.getGameStoreData(time)
    },
    getGameStoreData(time) {
      this.$http.get('/api/gadminc/business/coinHandle.json', {
        params: {
          startTime: time[0],
          endTime: time[1]
        }
      }).then(res => {
        console.log(res)
        // 金币获取和消耗差值
        this.coinsDeficitChartOption.xAxis.data = res.data.dList
        this.coinsDeficitChartOption.series[0].data = res.data.numList
        // 金币获取占比
        this.coinsGetRateChartSeries = [{
          name: '金币获取来源',
          type: 'pie',
          data: [
            { value: res.data.mailReward, name: '邮件奖励' },
            { value: res.data.missionReward, name: '任务系统' },
            { value: res.data.activityReward, name: '活动系统' },
            { value: res.data.mainPlot, name: '主线剧情' },
            { value: res.data.secretTerritory, name: '虚空秘境' },
            { value: res.data.shopBuy, name: '商店购买' }
          ]
        }]
        this.coinsGetRateChartOption.series = this.coinsGetRateChartSeries
        // 金币消耗占比
        this.coinsComsumeRateChartSeries = [{
          name: '金币消耗去向',
          type: 'pie',
          data: [
            { value: res.data.heroSkill, name: '英雄技能升级' },
            { value: res.data.weapon, name: '武器升级' },
            { value: res.data.coreUpgrade, name: '核芯升级' },
            { value: res.data.coreRecast, name: '核芯重铸' },
            { value: res.data.shopSpent, name: '商店消费' }
          ]
        }]
        this.coinsComsumeRateChartOption.series = this.coinsComsumeRateChartSeries
        // 任务系统金币获取占比
        this.questCoinGetRateChartSeries = [{
          name: '任务金币来源',
          type: 'pie',
          data: [
            { value: res.data.dailyBox, name: '日常宝箱' },
            { value: res.data.dailyMission, name: '日常任务' },
            { value: res.data.achivementMission, name: '成就奖励' },
            { value: res.data.mainMission, name: '主线任务' }
          ]
        }]
        this.questCoinGetRateChartOption.series = this.questCoinGetRateChartSeries
        // 邮件系统金币获取占比
        this.mailCoinGetRateChartSeries = [{
          name: '邮件金币来源',
          type: 'pie',
          data: [
            { value: res.data.systemProvide, name: '系统发放' },
            { value: res.data.sportsLadder, name: '竞技场天梯' },
            { value: res.data.arenaTrain, name: '竞技场试炼' },
            { value: res.data.mailElse, name: '邮件其他' }
          ]
        }]
        this.mailCoinGetRateChartOption.series = this.mailCoinGetRateChartSeries
        // 活动系统金币获取占比
        this.eventCoinGetRateChartSeries = [{
          name: '活动金币占比',
          type: 'pie',
          data: [
            { value: res.data.sevenDayActivity, name: '七日活动' },
            { value: res.data.exchangeActivity, name: '兑换活动' }
          ]
        }]
        this.evenCoinGetRateChartOption.series = this.eventCoinGetRateChartSeries
        // 渲染表格
        this.renderCharts()
      })
    }
  },
  mounted() {
    this.coinsDeficitChartOption = this.$refs.coinsDeficitChartRef.echartsCommonOption
    this.coinsGetRateChartOption = this.$refs.coinsGetRateRef.echartsPieOption
    this.coinsComsumeRateChartOption = this.$refs.coinsComsumeRateRef.echartsPieOption
    this.questCoinGetRateChartOption = this.$refs.questCoinGetRateRef.echartsPieOption
    this.mailCoinGetRateChartOption = this.$refs.mailCoinGetRateRef.echartsPieOption
    this.evenCoinGetRateChartOption = this.$refs.eventCoinGetRateRef.echartsPieOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>

</style>
