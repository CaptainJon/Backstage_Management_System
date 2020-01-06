<template>
  <div class="gameSystemBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>系统功能</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <time-select ref="gameSystemTimeRef"></time-select>
      <el-row :gutter="10">
        <el-col :span="12">
          <echarts-template @searchBtnClicked="childSearchBtnClick"></echarts-template>
        </el-col>
        <el-col :span="12">
          <echarts-template></echarts-template>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import TimeSelect from '../../../publicComponents/TimeSelect'
import EchartsTemplate from '../../../publicComponents/EchartsTemplate'
export default {
  data() {
    return {
      // 选择时间值
      selectedTime: [],
      // 任务系统数据源
      missionXdata: ['每日任务', '见习任务', '主线任务', '周常任务'],
      missionYdata: [],
      // 英雄系统数据源
      heroXdata: ['英雄升级', '英雄升星', '碎片兑换', '技能升级', '武器升级', '核芯升级', '核芯分解'],
      heroYdata: [],
      // 召唤系统数据源
      callXdata: ['英雄1', '英雄10', '核芯1', '核芯10', '限定英雄1', '限定英雄10', '限定道具1', '限定道具10'],
      callYdata: [],
      // 其他系统数据源
      otherXdata: ['七日活动', '兑换活动', '好友协战', '在线奖励领取'],
      otherYdata: []

    }
  },
  components: {
    TimeSelect,
    EchartsTemplate
  },
  methods: {
    // 请求数据
    getGameSystemData() {
      this.$http
        .get('/api/gadminc/business/system.json', {
          params: {
            startTime: this.selectedTime[0],
            endTime: this.selectedTime[1]
          }
        })
        .then(res => {
          this.missionYdata = res.data.missionList
          this.heroYdata = res.data.heroList
          this.callYdata = res.data.callList
          this.otherYdata = res.data.otherList
        })
    },
    // 子组件查询按钮点击
    childSearchBtnClick() {
      alert(1)
    }
  }
}
</script>

<style>
.gameSystemBox .el-row {
  margin-top: 15px;
}
</style>
