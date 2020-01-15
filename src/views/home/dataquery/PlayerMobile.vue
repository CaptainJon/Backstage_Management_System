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
        <el-button @click="showList" size="mini">查询</el-button>
      </field-legend>
      <!-- 表格区域 -->
      <el-table :data="formData" border size="mini" style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
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
      accountId: '',
      formData: []
    }
  },
  components: {
    FieldLegend
  },
  methods: {
    // 查询按钮
    showList() {
      if (this.accountId === '') {
        this.$alert('用户ID不能为空', '警告', { type: 'warning' })
      } else {
        this.getPlayerMobileData()
      }
    },
    // 数据获取
    getPlayerMobileData() {
      this.$http.get('/gadminc/data/accountPhoneType.json', {
        params: {
          accountId: this.accountId
        }
      }).then(res => {
        this.formData = []
        this.formData.push({
          accountId: res.data.accountId,
          uId: res.data.uId,
          ua: res.data.ua,
          phone: res.data.phone
        })
      })
    }
  }
}
</script>

<style>
.palyerMobileBox .el-input {
  width: 300px;
}
.palyerMobileBox .el-button {
  margin-left: 20px;
  background-color: #337ab7;
  color: #fff;
}
.palyerMobileBox .el-button:hover {
  background-color: #3e67ac;
}
.palyerMobileBox .el-table {
  margin-top: 15px;
}
</style>
