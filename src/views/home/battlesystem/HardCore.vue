<template>
  <div class="hardcoreBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>虚空秘境</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 难度按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: difficulty === '1001'}" @click="difficulty = '1001'">原初秘境</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '1002'}" @click="difficulty = '1002'">零镜秘境</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '1003'}" @click="difficulty = '1003'">矩阵秘境</el-button>
      </el-button-group>
      <!-- 数据分类按钮组 -->
      <el-button-group class="dataBtnGroup">
        <el-button size="small" :class="{arenaActive: activeButton === 'total'}" @click="activeButton = 'total'">总挑战次数 </el-button>
        <el-button size="small" :class="{arenaActive: activeButton === 'ppl'}" @click="activeButton = 'ppl'">总挑战人数</el-button>
      </el-button-group>
      <!-- 数据表格 -->
      <echarts-box yname="挑战次数" xname="秘境层数" :title="title" ref="hardcoreChartRef">
        <div id="hardcoreChart" class="echarts600"></div>
      </echarts-box>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'
import TimeSelect from '../../../publicComponents/TimeSelect'
import EchartsBox from '../../../publicComponents/EchartsBox'
export default {
  data() {
    return {
      difficulty: '1001',
      activeButton: 'total',
      echartsOption: {},
      title: '原初秘境-总挑战次数'
    }
  },
  methods: {
    // 获取数据
    getHardCoreData(time) {
      this.$http.get('/api/gadminc/business/resStage.json', {
        params: {
          startTime: time[0],
          endTime: time[1],
          degree: this.difficulty
        }
      }).then(res => {
        // X轴数据赋值
        this.echartsOption.xAxis.data = res.data.playerCount.nameList
        // Y轴数据赋值
        if (this.activeButton === 'total') {
          this.title = this.difficultyTitle + '-总挑战次数'
          this.echartsOption.series[0].data = res.data.storyTotal.numList
        } else {
          this.title = this.difficultyTitle + '-总挑战人数'
          this.echartsOption.series[0].data = res.data.playerCount.numList
        }
        // 渲染表格
        this.renderCharts()
      })
    },
    // 渲染表格
    renderCharts() {
      echarts.init(document.getElementById('hardcoreChart')).setOption(this.echartsOption)
    },
    // 查询点击
    searchClicked(time) {
      this.getHardCoreData(time)
    }
  },
  mounted() {
    // 存储Echarts配置数据
    this.echartsOption = this.$refs.hardcoreChartRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  },
  computed: {
    // 秘境难度动态显示标题
    difficultyTitle() {
      switch (this.difficulty) {
        case '1001':
          return '原初秘境'
        case '1002':
          return '零镜秘境'
        default:
          return '矩阵秘境'
      }
    }
  }
}
</script>

<style>
.hardcoreBox .dataBtnGroup{
  margin-left: 68px;
}
</style>
