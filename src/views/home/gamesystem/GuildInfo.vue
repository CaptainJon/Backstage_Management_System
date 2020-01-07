<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>战队信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="80">
        <!-- 总战队数 -->
        <el-col :span="6">
          <guild-info-panel
            :barPercentage="totalGuildsRate"
            :panelData="totalGuilds"
            barColor="#337AB7"
            panelIconClass="el-icon-s-flag"
            title="总战队数"
          ></guild-info-panel>
        </el-col>
        <!-- 未加入战队人数 -->
        <el-col :span="6">
          <guild-info-panel
            :barPercentage="outGuildUserRate"
            :panelData="outGuildUser"
            barColor="#F0AD4E"
            panelIconClass="el-icon-user"
            title="未加入战队人数"
          ></guild-info-panel>
        </el-col>
        <!-- 已加入战队人数 -->
        <el-col :span="6">
          <guild-info-panel
            :barPercentage="inGuildUserRate"
            :panelData="inGuildUser"
            barColor="#5CB85C"
            title="已加入战队人数"
          ></guild-info-panel>
        </el-col>
        <!-- 战队平均人数 -->
        <el-col :span="6">
          <guild-info-panel
            :barPercentage="guildAvgUserRate"
            :panelData="guildAvgUser"
            barColor="#5BC0DE"
            panelIconClass="el-icon-s-custom"
            title="战队平均人数"
          ></guild-info-panel>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import GuildInfoPanel from '../../../publicComponents/GuildInfoPanel'
export default {
  data() {
    return {
      // 未加入战队人数
      outGuildUser: 0,
      // 已加入战队人数
      inGuildUser: 0,
      // 战队平均人数
      guildAvgUser: 0,
      // 战队等级数量数据
      guildLevelList: []
    }
  },
  created() {
    this.getGuildInfoData()
  },
  methods: {
    getGuildInfoData() {
      this.$http.get('/api/gadminc/business/combatTeam.json').then(res => {
        console.log(res.data.guildinfo)
        this.outGuildUser = res.data.guildinfo.notJoinAmount
        this.inGuildUser = res.data.guildinfo.joinAmount
        this.guildAvgUser = res.data.guildinfo.avgTeamUserAmount
        this.guildLevelList = res.data.guildinfo.combatTeamLevelList
      })
    }
  },
  components: {
    GuildInfoPanel
  },
  computed: {
    // 总战队数
    totalGuilds() {
      let totalGuildsNum = 0
      for (let i = 0; i < this.guildLevelList.length; i++) {
        totalGuildsNum += this.guildLevelList[i].num
      }
      return totalGuildsNum
    },
    // 总玩家人数
    totalUsers() {
      return this.inGuildUser + this.outGuildUser
    },
    // 总战队数占比
    totalGuildsRate() {
      return (this.totalUsers / this.totalUsers) * 100
    },
    // 未加入人数占比
    outGuildUserRate() {
      return (this.outGuildUser / this.totalUsers).toFixed(2) * 100
    },
    // 已加入人数占比
    inGuildUserRate() {
      return (this.inGuildUser / this.totalUsers).toFixed(2) * 100
    },
    // 战队平均人数占比
    guildAvgUserRate() {
      return (this.guildAvgUser / this.totalUsers).toFixed(2) * 100
    }
  }
}
</script>

<style>
</style>
