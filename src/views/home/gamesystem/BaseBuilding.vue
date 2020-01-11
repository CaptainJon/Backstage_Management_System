<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>新手引导</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="baseBuildingData" border style="width: 100%" size="mini" stripe v-loading="loading">
        <el-table-column label="#" align="center" type="index"></el-table-column>
        <el-table-column label="等级" align="center" prop="level" :formatter="avgFormat"></el-table-column>
        <el-table-column label="中枢系统" align="center" prop="avgCentral"></el-table-column>
        <el-table-column label="研发部" align="center" prop="avgResearch"></el-table-column>
        <el-table-column label="工程部" align="center" prop="avgEngine"></el-table-column>
        <el-table-column label="后勤部" align="center" prop="avgSupport"></el-table-column>
        <el-table-column label="核电站" align="center" prop="avgElectric"></el-table-column>
        <el-table-column label="宿舍" align="center" prop="avgDormitory"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseBuildingData: [],
      loading: true
    }
  },
  methods: {
    // 数据获取
    getBaseBuildingData() {
      this.$http.get('/api/gadminc/business/basement.json').then(res => {
        this.baseBuildingData = res.data
        // 关闭Loading
        this.loading = false
      })
    },
    // 平均等级格式化
    avgFormat(row, column, cellValue, index) {
      if (cellValue === '-') {
        return '平均等级'
      } else {
        return cellValue
      }
    }
  },
  created() {
    this.getBaseBuildingData()
  }
}
</script>

<style>
</style>
