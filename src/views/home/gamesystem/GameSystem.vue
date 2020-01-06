<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>系统功能</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <time-select></time-select>
    </el-card>
  </div>
</template>

<script>
import TimeSelect from '../../../publicComponents/TimeSelect'
export default {
  components: {
    TimeSelect
  }
}
</script>

<style>
</style>
