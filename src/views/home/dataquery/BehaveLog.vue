<template>
  <div class="behaveLogBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据查询</el-breadcrumb-item>
      <el-breadcrumb-item>行为日志</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <time-select>
        <div class="behaveUserId">
          <el-input placeholder="请输入内容" size="small" v-model="loginId">
            <template slot="prepend">用户ID</template>
          </el-input>
        </div>
      </time-select>
      <!-- 表格区域 -->
      <el-table :data="formData" border style="width: 100%" size="mini">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="actionId" prop="actionId"></el-table-column>
        <el-table-column label="spId" prop="spId"></el-table-column>
        <el-table-column label="level" prop="level"></el-table-column>
        <el-table-column label="diamond" prop="diamond"></el-table-column>
        <el-table-column label="gold" prop="gold"></el-table-column>
        <el-table-column label="soulStone" prop="soulStone"></el-table-column>
        <el-table-column label="actionTime" prop="actionTime"></el-table-column>
        <el-table-column label="actType" prop="actType"></el-table-column>
        <el-table-column label="value1" prop="value1"></el-table-column>
        <el-table-column label="value2" prop="value2"></el-table-column>
        <el-table-column label="serverId" prop="serverId"></el-table-column>
        <el-table-column label="paramStr" prop="paramStr"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import TimeSelect from '../../../publicComponents/TimeSelect'
export default {
  data() {
    return {
      loginId: null,
      formData: []
    }
  },
  components: {
    TimeSelect
  }
}
</script>

<style>
.behaveLogBox .el-table{
  margin-top: 15px;
}
.behaveLogBox .behaveUserId{
  width: 300px;
  margin-left: 20px;
  display: inline-block;
}
</style>
