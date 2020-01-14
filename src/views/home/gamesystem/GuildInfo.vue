<template>
  <div class="guildInfoBox">
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
      <!-- 战队等级数据表 -->
      <el-table :data="guildData" border size="mini" style="width: 100%">
        <el-table-column align="center" label="战队等级" prop="firstVal"></el-table-column>
        <el-table-column align="center" label="Lv1" prop="0" :formatter="guildNumFormat"></el-table-column>
        <el-table-column align="center" label="Lv2" prop="1" :formatter="guildNumFormat"></el-table-column>
        <el-table-column align="center" label="Lv3" prop="2" :formatter="guildNumFormat"></el-table-column>
        <el-table-column align="center" label="Lv4" prop="3" :formatter="guildNumFormat"></el-table-column>
        <el-table-column align="center" label="Lv5" prop="4" :formatter="guildNumFormat"></el-table-column>
        <el-table-column align="center" label="平均等级" prop="lastVal"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import GuildInfoPanel from '../../../publicComponents/GuildInfoPanel'
export default {
  data() {
    return {
      guildData: [], // 战队数量表格数据
      outGuildUser: 0, // 未加入战队人数
      inGuildUser: 0, // 已加入战队人数
      guildAvgUser: 0, // 战队平均人数
      guildLevelList: [] // 战队等级数量数据
    }
  },
  created() {
    this.getGuildInfoData()
  },
  methods: {
    getGuildInfoData() {
      this.$http.get('/gadminc/business/combatTeam.json').then(res => {
        this.outGuildUser = res.data.notJoinAmount
        this.inGuildUser = res.data.joinAmount
        this.guildAvgUser = res.data.avgTeamUserAmount
        this.guildLevelList = res.data.combatTeamLevelList
        // 处理数据成一个对象
        let tempObj = {}
        for (let i = 0; i < res.data.combatTeamLevelList.length; i++) {
          tempObj[i] = res.data.combatTeamLevelList[i].num
        }
        tempObj.firstVal = '战队数量'
        tempObj.lastVal = res.data.avgTeamLevel
        // 赋值到表格数据
        this.guildData.push(tempObj)
      })
    },
    // 表格单元格格式化
    guildNumFormat(row, column, cellValue, index) {
      if (cellValue === undefined) {
        return '0'
      } else {
        return cellValue
      }
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
.guildInfoBox .el-table{
  margin-top: 25px;
}
</style>
