<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>竞技场</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <time-select @searchbtnclicked="searchClicked"></time-select>
    </el-card>
  </div>
</template>

<script>
import TimeSelect from '../../../publicComponents/TimeSelect'
export default {
  components: {
    TimeSelect
  },
  methods: {
    // 查询按钮点击
    searchClicked(time) {
      this.getArenaData()
    },
    // 获取页面数据
    getArenaData() {
      this.$http.get('/api/gadminc/business/arena.json').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
