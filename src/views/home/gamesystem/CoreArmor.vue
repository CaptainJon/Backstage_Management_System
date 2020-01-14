<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>游戏系统</el-breadcrumb-item>
      <el-breadcrumb-item>核芯装备</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-table :data="herosData" border style="width: 100%" size="mini" stripe highlight-current-row v-loading="loading">
        <el-table-column label="#" align="center" type="index"></el-table-column>
        <el-table-column label="核芯 / 槽位 / 平均等级" align="center" prop="name"></el-table-column>
        <el-table-column label="壹" align="center" prop="slot1"></el-table-column>
        <el-table-column label="贰" align="center" prop="slot2"></el-table-column>
        <el-table-column label="叁" align="center" prop="slot3"></el-table-column>
        <el-table-column label="肆" align="center" prop="slot4"></el-table-column>
        <el-table-column label="伍" align="center" prop="slot5"></el-table-column>
        <el-table-column label="陆" align="center" prop="slot6"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      herosData: [], // 表格数据
      loading: true
    }
  },
  created() {
    this.getHerosData()
  },
  methods: {
    // 获取核芯装备数据
    getHerosData() {
      this.$http.get('/gadminc/business/equip.json').then(res => {
        const coreName = [] // 非重复核芯名
        const repeatedCoreName = [] // 重复核芯名
        const coreData = [] // 核芯数据
        for (let i = 0; i < res.data.length; i++) {
          repeatedCoreName.push(res.data[i].name.split('.')[0])
          coreData.push(res.data[i].avgLevel)
        }
        // 重复核芯名去重
        for (let i = 0; i < repeatedCoreName.length; i++) {
          if (coreName.indexOf(repeatedCoreName[i]) === -1) {
            coreName.push(repeatedCoreName[i])
          }
        }
        // 生成数据对象数组
        for (let i = 0; i < coreName.length; i++) {
          this.herosData.push({
            name: coreName[i],
            slot1: coreData[(6 * i) + 0],
            slot2: coreData[(6 * i) + 1],
            slot3: coreData[(6 * i) + 2],
            slot4: coreData[(6 * i) + 3],
            slot5: coreData[(6 * i) + 4],
            slot6: coreData[(6 * i) + 5]
          })
        }
        // 关闭loading
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>
