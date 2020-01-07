<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>游戏英雄</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="herosData" border style="width: 100%" size="mini" stripe highlight-current-row>
        <el-table-column label="#" align="center" type="index" width="40"></el-table-column>
        <el-table-column label="英雄" align="center" prop="name" width="80"></el-table-column>
        <el-table-column label="平均等级" align="center" prop="avgLevel"></el-table-column>
        <el-table-column label="平均星级" align="center" prop="avgStar"></el-table-column>
        <el-table-column label="普通技能" align="center" prop="ordinarySkill"></el-table-column>
        <el-table-column label="主动技能" align="center" prop="activeSkill"></el-table-column>
        <el-table-column label="被动技能" align="center" prop="passiveSkill"></el-table-column>
        <el-table-column label="武器等级" align="center" prop="weaponLevel"></el-table-column>
        <el-table-column label="主线剧情" align="center" prop="mainStory"></el-table-column>
        <el-table-column label="虚空裂隙" align="center" prop="voidCrack"></el-table-column>
        <el-table-column label="竞技场天梯" align="center" prop="sportsLadder"></el-table-column>
        <el-table-column label="竞技场试炼" align="center" prop="arenaTrain"></el-table-column>
        <el-table-column label="军阶" align="center" prop="rank"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herosData: []
    }
  },
  created() {
    this.getHerosData()
  },
  methods: {
    // 获取英雄数据
    getHerosData() {
      this.$http.get('/api/gadminc/business/hero.json').then(res => {
        this.herosData = res.data.herosData
      })
    }
  }
}
</script>

<style>
.heroname{
  color: #FF008D!important;
  font-weight: bold;
}
</style>
