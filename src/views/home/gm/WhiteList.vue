<template>
  <div class="whiteListBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据查询</el-breadcrumb-item>
      <el-breadcrumb-item>白名单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-button
        @click="dialogVisible = true"
        class="addWhiteList"
        size="small"
        type="primary"
      >添加白名单</el-button>
      <el-table :data="formData" border size="mini" style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="昵称" prop="nickName"></el-table-column>
        <el-table-column label="手机号码" prop="phone"></el-table-column>
        <el-table-column label="操作">
          <template v-slot="slotProp">
            <el-button @click="deleteWhiteList(slotProp.row)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="pageIndex"
        :page-size="pageSize"
        :page-sizes="[pageSize]"
        :total="total"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </el-card>
    <!-- 添加白名单Dialog -->
    <el-dialog :visible.sync="dialogVisible" title="添加白名单" width="30%">
      <el-input placeholder="请输入要添加的id" v-model="accountId"></el-input>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false" size="small">取 消</el-button>
        <el-button @click="addWhiteList" size="small" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: [],
      pageIndex: 1,
      total: 0,
      pageSize: 0,
      dialogVisible: false,
      accountId: null
    }
  },
  created() {
    this.getWhiteListData()
  },
  methods: {
    // 数据获取
    getWhiteListData() {
      this.$http
        .get('/gadminc/white/whiteList.json', {
          params: {
            pageIndex: this.pageIndex
          }
        })
        .then(res => {
          this.pageIndex = res.data.pageIndex
          this.total = res.data.total
          this.pageSize = res.data.pageSize
          this.formData = res.data.playerList
        })
    },
    // 页码变化
    handleCurrentChange(newPage) {
      this.pageIndex = newPage
      this.getWhiteListData()
    },
    // 添加白名单
    addWhiteList() {
      this.$http
        .get('/gadminc/white/addWhite.json', {
          params: {
            accountId: this.accountId
          }
        })
        .then(() => {
          this.dialogVisible = false
          this.$message.success('添加成功')
          this.getWhiteListData()
        })
        .catch(() => {
          this.$message.error('添加失败')
        })
    },
    // 删除白名单
    deleteWhiteList(row) {
      this.$confirm('此操作将永久删除该角色, 是否继续?', '警告')
        .then(() => {
          this.$http
            .get('/gadminc/white/deleteWhite.json', {
              params: {
                accountId: row.id
              }
            })
            .then(() => {
              this.$message.success('删除成功')
              this.getWhiteListData()
            }).catch(() => {
              this.$message.error('删除失败')
            })
        })
        .catch(err => {
          return err
        })
    }
  }
}
</script>

<style>
.whiteListBox .addWhiteList {
  margin-bottom: 10px;
}
</style>
