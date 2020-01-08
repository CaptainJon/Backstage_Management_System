<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>天启大战</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: activeButton === '0'}" @click="activeButton = '0'">总挑战次数</el-button>
        <el-button size="small" :class="{arenaActive: activeButton === '1'}" @click="activeButton = '1'">总挑战人数</el-button>
      </el-button-group>
      <echarts-box ref="apocalypseChartRef" xname="据点战层" yname="挑战数据">
        <div id="apocalypseChart" class="echarts600"></div>
      </echarts-box>
    </el-card>
  </div>
</template>

<script>
import TimeSelect from '../../../publicComponents/TimeSelect'
import EchartsBox from '../../../publicComponents/EchartsBox'
export default {
  data() {
    return {
      activeButton: '0',
      echartsOption: {}
    }
  },
  methods: {
    // 查询点击
    searchClicked() {
      console.log(1)
    }
    // 数据获取
  },
  mounted() {
    // 储存Echarts配置数据
    this.echartsOption = this.$refs.apocalypseChartRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  }
}
</script>

<style>

</style>
