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
          <echarts-template :xdata="missionXdata" :ydata="missionYdata" v-if="missionYdata[0].data.length > 0" xname="任务名称" yname="进行次数" title="任务系统"></echarts-template>
        </el-col>
        <!-- 英雄系统 -->
        <el-col :span="12">
          <echarts-template :xdata="heroXdata" :ydata="heroYdata" v-if="heroYdata[0].data.length > 0" xname="英雄系统功能" yname="进行次数" title="英雄系统"></echarts-template>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <!-- 召唤系统 -->
        <el-col :span="12">
          <echarts-template :xdata="callXdata" :ydata="callYdata" v-if="callYdata[0].data.length > 0" xname="召唤系统功能" yname="进行次数" title="召唤系统"></echarts-template>
        </el-col>
        <!-- 其他活动系统、好友协战、在线奖励系统 -->
        <el-col :span="12">
          <echarts-template :xdata="otherXdata" :ydata="otherYdata" v-if="otherYdata[0].data.length > 0" xname="其他系统功能" yname="进行次数" title="其他系统"></echarts-template>
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
      // 任务系统数据源
      missionXdata: ['每日任务', '见习任务', '主线任务', '周常任务'],
      missionYdata: [
        {
          type: 'bar',
          color: '#1A2D27',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ],
      // 英雄系统数据源
      heroXdata: [
        '英雄升级',
        '英雄升星',
        '碎片兑换',
        '技能升级',
        '武器升级',
        '核芯升级',
        '核芯分解'
      ],
      heroYdata: [
        {
          type: 'bar',
          color: '#5F629D',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ],
      // 召唤系统数据源
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
      callYdata: [
        {
          type: 'bar',
          color: '#116498',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ],
      // 其他系统数据源
      otherXdata: ['七日活动', '兑换活动', '好友协战', '在线奖励领取'],
      otherYdata: [
        {
          type: 'bar',
          color: '#7C6354',
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
    EchartsTemplate
  },
  methods: {
    // 请求数据
    getGameSystemData(selectedTime) {
      this.$http
        .get('/api/gadminc/business/system.json', {
          params: {
            startTime: selectedTime[0],
            endTime: selectedTime[1]
          }
        })
        .then(res => {
          console.log(res.data)
          this.missionYdata[0].data = res.data.missionList
          this.heroYdata[0].data = res.data.heroList
          this.callYdata[0].data = res.data.callList
          this.otherYdata[0].data = res.data.otherList
        })
    },
    // 子组件查询按钮点击
    childsearchbtnclicked(selectedTime) {
      this.getGameSystemData(selectedTime)
    }
  }
}
</script>

<style>
.gameSystemBox .el-row {
  margin-top: 15px;
}
</style>
