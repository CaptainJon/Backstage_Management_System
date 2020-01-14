<template>
  <div class="behaveLogBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据查询</el-breadcrumb-item>
      <el-breadcrumb-item>行为日志</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <time-select @searchbtnclicked="searchClicked">
        <div class="behaveUserId">
          <el-input placeholder="请输入内容" size="small" v-model="loginId">
            <template slot="prepend">用户ID</template>
          </el-input>
        </div>
      </time-select>
      <!-- 表格区域 -->
      <el-table :data="formData" border style="width: 100%" size="mini" v-loading="loading">
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column label="actionId" prop="actionId" width="120"></el-table-column>
        <el-table-column label="spId" prop="spId" width="50"></el-table-column>
        <el-table-column label="level" prop="level" width="60"></el-table-column>
        <el-table-column label="diamond" prop="diamond" width="80"></el-table-column>
        <el-table-column label="gold" prop="gold" width="100"></el-table-column>
        <el-table-column label="soulStone" prop="soulStone" width="100"></el-table-column>
        <el-table-column label="actionTime" prop="actionTime" width="140"></el-table-column>
        <el-table-column label="actType" prop="actType" width="70"></el-table-column>
        <el-table-column label="value1" prop="value1" width="100"></el-table-column>
        <el-table-column label="value2" prop="value2" width="100"></el-table-column>
        <el-table-column label="serverId" prop="serverId" width="75"></el-table-column>
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
      formData: [],
      loading: false
    }
  },
  components: {
    TimeSelect
  },
  methods: {
    // 查询点击
    searchClicked(time) {
      this.getLogData(time)
    },
    // 获取日志数据
    getLogData(time) {
      this.loading = true
      this.$http.get('/gadminc/data/userActionOperate.json', {
        params: {
          startTime: time[0],
          endTime: time[1],
          loginId: this.loginId
        }
      }).then(res => {
        this.loading = false
        this.formData = res.data
      })
    }
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
