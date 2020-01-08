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
      <echarts-box xname="日期区间" yname="获取次数" ref="guildQuestChartRef">
        <div id="guildQuestChart" class="echarts600"></div>
      </echarts-box>
      <!-- 积分礼包 -->
      <echarts-box xname="日期区间" yname="获取次数">
        <div id="potinsBundleChart" class="echarts600"></div>
      </echarts-box>
      <!-- 回馈礼包 -->
      <echarts-box xname="日期区间" yname="获取次数">
        <div id="paybackBundleChart" class="echarts600"></div>
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
      guildQuestData: [
        {
          type: 'bar',
          color: '#CB534F',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#4C5F6C',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#6BA6AE',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ],
      // 积分礼包数据
      pointsBundleData: [
        {
          type: 'bar',
          color: '#CB534F',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#4C5F6C',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#6BA6AE',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ],
      // 回馈礼包数据
      paybackBundleData: [
        {
          type: 'bar',
          color: '#CB534F',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#4C5F6C',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#6BA6AE',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ]
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
      this.$http.get('/api/gadminc/business/combatTeamMission.json', {
        params: {
          startTime: selectedTime[0],
          endTime: selectedTime[1]
        }
      }).then(res => {
        console.log(res)
        // X轴数据赋值
        this.guildQuestChartOption.xAxis.data = res.data.daList
        this.pointsBundleChartOption.xAxis.data = res.data.daList
        this.paybackBundleChartOption.xAxis.data = res.data.daList
        // Y轴数据赋值
        // 战队任务
        this.guildQuestData[0].data = res.data.missionTimes[0].times
        this.guildQuestData[1].data = res.data.missionTimes[1].times
        this.guildQuestData[2].data = res.data.missionTimes[2].times
        // 积分礼包
        this.pointsBundleData[0].data = res.data.activeTimes[0].times
        this.pointsBundleData[1].data = res.data.activeTimes[1].times
        this.pointsBundleData[2].data = res.data.activeTimes[2].times
        // 回馈礼包
        this.paybackBundleData[0].data = res.data.repayTimes[0].times
        this.paybackBundleData[1].data = res.data.repayTimes[1].times
        this.paybackBundleData[2].data = res.data.repayTimes[2].times
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
      echarts.init(document.getElementById('guildQuestChart')).setOption(this.guildQuestChartOption)
      echarts.init(document.getElementById('potinsBundleChart')).setOption(this.pointsBundleChartOption)
      echarts.init(document.getElementById('paybackBundleChart')).setOption(this.paybackBundleChartOption)
    }
  },
  mounted() {
    // 储存子组件Echarts常规配置
    this.guildQuestChartOption = this.$refs.guildQuestChartRef.echartsCommonOption
    this.pointsBundleChartOption = this.$refs.guildQuestChartRef.echartsCommonOption
    this.paybackBundleChartOption = this.$refs.guildQuestChartRef.echartsCommonOption
    // 初始渲染表格
    this.renderCharts()
  }
}
</script>

<style>
</style>
