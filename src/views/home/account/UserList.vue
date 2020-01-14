<template>
  <div class="userListBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>账户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-button size="small" type="primary" @click="addUserDialogVisible = true">添加用户</el-button>
      <!-- 用户列表 -->
      <el-table :data="userData" border size="mini" style="width: 100%">
        <el-table-column label="编号" prop="id" width="180"></el-table-column>
        <el-table-column label="登录名" prop="name" width="180"></el-table-column>
        <el-table-column label="昵称" prop="nickname"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="slotProp">
            <el-button size="mini" type="success" @click="showEditUserDialog(slotProp.row)">修改</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加用户面板 -->
    <el-dialog :visible.sync="addUserDialogVisible" title="添加用户" width="30%">
      <span>这是一段信息</span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="addUserDialogVisible = false">取 消</el-button>
        <el-button @click="confirmAddUser = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户面板 -->
    <el-dialog :visible.sync="editUserDialogVisible" title="修改用户" width="30%">
      <span>这是一段信息</span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="editUserDialogVisible = false">取 消</el-button>
        <el-button @click="confirmEditUser" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [], // 用户列表数据
      addUserDialogVisible: false, // 添加用户面板
      editUserDialogVisible: false // 修改用户面板
    }
  },
  created() {
    // 获取用户数据
    this.getUserListData()
  },
  methods: {
    // 用户数据获取
    getUserListData() {
      this.$http.post('/gadminc/account/listAccounts.json').then(res => {
        console.log(res)
      })
    },
    // 添加用户
    confirmAddUser() {
      this.addUserDialogVisible = false
    },
    // 展示修改用户面板
    showEditUserDialog(row) {
      this.editUserDialogVisible = true
      console.log(row)
    },
    // 修改用户
    confirmEditUser() {
      this.editUserDialogVisible = false
    }
  }
}
</script>

<style>
.userListBox .el-table {
  margin-top: 15px;
}
</style>
