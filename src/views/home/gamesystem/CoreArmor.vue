<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>核芯装备</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="herosData" border style="width: 100%" size="mini" stripe highlight-current-row>
        <el-table-column label="#" align="center" type="index"></el-table-column>
        <el-table-column label="核芯 / 槽位 / 平均等级" align="center" prop="name"></el-table-column>
        <el-table-column label="壹" align="center" prop="avgLevel"></el-table-column>
        <el-table-column label="贰" align="center" prop="avgStar"></el-table-column>
        <el-table-column label="叁" align="center" prop="ordinarySkill"></el-table-column>
        <el-table-column label="肆" align="center" prop="activeSkill"></el-table-column>
        <el-table-column label="伍" align="center" prop="passiveSkill"></el-table-column>
        <el-table-column label="陆" align="center" prop="weaponLevel"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
