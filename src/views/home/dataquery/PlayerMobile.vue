<template>
  <div class="palyerMobileBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据查询</el-breadcrumb-item>
      <el-breadcrumb-item>用户机型</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <field-legend>
        <el-input placeholder="请输入内容" size="small" v-model="accountId">
          <template slot="prepend">用户ID</template>
        </el-input>
        <el-button size="mini">查询</el-button>
      </field-legend>
      <!-- 表格区域 -->
      <el-table :data="formData" border style="width: 100%" size="mini">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="用户ID" prop="accountId"></el-table-column>
        <el-table-column label="UID" prop="uId"></el-table-column>
        <el-table-column label="移动设备型号" prop="ua"></el-table-column>
        <el-table-column label="手机号码" prop="phone"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import FieldLegend from '../../../publicComponents/FieldLegend'
export default {
  data() {
    return {
      accountId: null,
      formData: []
    }
  },
  components: {
    FieldLegend
  }
}
</script>

<style>
.palyerMobileBox .el-input{
  width: 300px;
}
.palyerMobileBox .el-button{
  margin-left: 20px;
  background-color: #337AB7;
  color: #fff;
}
.palyerMobileBox .el-button:hover{
  background-color: #3E67AC;
}
.palyerMobileBox .el-table{
  margin-top: 15px;
}
</style>
