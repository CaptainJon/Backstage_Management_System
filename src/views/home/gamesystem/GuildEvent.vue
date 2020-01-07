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
      <echarts-template
        :xdata="xAxisData"
        :ydata="guildQuestData"
        v-if="guildQuestData[0].data.length > 0"
        xname="日期区间"
        yname="获取次数"
      ></echarts-template>
      <!-- 积分礼包 -->
      <echarts-template
        :xdata="xAxisData"
        :ydata="pointsBundleData"
        v-if="pointsBundleData[0].data.length > 0"
        xname="日期区间"
        yname="获取次数"
      ></echarts-template>
      <!-- 回馈礼包 -->
      <echarts-template
        :xdata="xAxisData"
        :ydata="paybackBundleData"
        v-if="paybackBundleData[0].data.length > 0"
        xname="日期区间"
        yname="获取次数"
      ></echarts-template>
    </el-card>
  </div>
</template>

<script>
import TimeSelect from '../../../publicComponents/TimeSelect'
import EchartsTemplate from '../../../publicComponents/EchartsTemplate'
export default {
  data() {
    return {
      // 战队任务数据
      guildQuestData: [
        {
          type: 'line',
          data: []
        },
        {
          type: 'line',
          data: []
        },
        {
          type: 'line',
          data: []
        }
      ],
      // 积分礼包数据
      pointsBundleData: [
        {
          type: 'line',
          data: []
        },
        {
          type: 'line',
          data: []
        },
        {
          type: 'line',
          data: []
        }
      ],
      // 回馈礼包数据
      paybackBundleData: [
        {
          type: 'line',
          data: []
        },
        {
          type: 'line',
          data: []
        },
        {
          type: 'line',
          data: []
        }
      ],
      // 日期数据
      xAxisData: []
    }
  },
  components: {
    TimeSelect,
    EchartsTemplate
  },
  methods: {
    // 搜索按钮点击
    searchClicked(time) {
      this.getGuildEventData(time)
    },
    // 页面数据获取
    getGuildEventData(time) {
      this.$http
        .get('/api/gadminc/business/combatTeamMission.json', {
          params: {
            startTime: time[0],
            endTime: time[1]
          }
        })
        .then(res => {
          console.log(res.data)
          this.guildQuestData[0].data = res.data.missionTimes[0].times
          this.guildQuestData[1].data = res.data.missionTimes[1].times
          this.guildQuestData[2].data = res.data.missionTimes[2].times
          this.pointsBundleData[0].data = res.data.activeTimes[0].times
          this.pointsBundleData[1].data = res.data.activeTimes[1].times
          this.pointsBundleData[2].data = res.data.activeTimes[2].times
          this.paybackBundleData[0].data = res.data.repayTimes[0].times
          this.paybackBundleData[1].data = res.data.repayTimes[1].times
          this.paybackBundleData[2].data = res.data.repayTimes[2].times
          this.xAxisData = res.data.daList
        })
    }
  }
}
</script>

<style>
</style>
