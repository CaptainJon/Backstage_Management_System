<template>
  <div class="spaceriftBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>战斗系统</el-breadcrumb-item>
      <el-breadcrumb-item>时空裂隙</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 时间选择 -->
      <time-select @searchbtnclicked="searchClicked"></time-select>
      <!-- 难度按钮组 -->
      <el-button-group>
        <el-button size="small" :class="{arenaActive: difficulty === '1'}" @click="difficulty = '1'">裂隙·I</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '2'}" @click="difficulty = '2'">裂隙·II</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '3'}" @click="difficulty = '3'">裂隙·III</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '4'}" @click="difficulty = '4'">裂隙·IV</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '5'}" @click="difficulty = '5'">裂隙·V</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '6'}" @click="difficulty = '6'">裂隙·VI</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '7'}" @click="difficulty = '7'">裂隙·VII</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '8'}" @click="difficulty = '8'">裂隙·VIII</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '9'}" @click="difficulty = '9'">裂隙·IX</el-button>
        <el-button size="small" :class="{arenaActive: difficulty === '10'}" @click="difficulty = '10'">裂隙·X</el-button>
      </el-button-group>
      <!-- 数据分类按钮组 -->
      <el-button-group class="dataBtnGroup">
        <el-button size="small" :class="{arenaActive: activeButton === 'total'}" @click="activeButton = 'total'">总挑战次数 </el-button>
        <el-button size="small" :class="{arenaActive: activeButton === 'ppl'}" @click="activeButton = 'ppl'">总挑战人数</el-button>
      </el-button-group>
      <!-- 数据表格 -->
      <echarts-box yname="挑战次数" xname="秘境层数" :title="title" ref="spaceriftChartRef">
        <div id="spaceriftChart" class="echarts600"></div>
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
      difficulty: '1',
      activeButton: 'total',
      title: '裂隙·I-总挑战次数',
      echartsOption: {},
      ydata: [
        {
          type: 'bar',
          color: '#4CABCE',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        },
        {
          type: 'bar',
          color: '#45584A',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }
      ]
    }
  },
  methods: {
    // 查询点击
    searchClicked(time) {
      this.getSpaceriftData(time)
    },
    // 获取数据
    getSpaceriftData(time) {
      this.$http.get('/api/gadminc/business/spaceTime.json', {
        params: {
          startTime: time[0],
          endTime: time[1],
          degree: this.difficulty
        }
      }).then(res => {
        console.log(res)
        // X轴数据赋值
        this.echartsOption.xAxis.data = res.data.playerCount.nameList
        // Y轴数据赋值
        if (this.activeButton === 'total') {
          this.title = this.chartTitle + '-总挑战次数'
          // 重置数据项
          this.echartsOption.series = []
          // 重新赋值模板
          this.echartsOption.series = this.ydata
          // 重新赋值
          this.echartsOption.series[0].name = '总挑战次数'
          // this.echartsOption.series[0].data = res.data.storyTotal.numList
          // this.echartsOption.series[1].name = '成功次数'
          // this.echartsOption.series[1].data = res.data.storyTotal.finishList
        } else {
          this.title = this.chartTitle + '-总挑战人数'
          // 重置数据项
          this.echartsOption.series = []
          // 重新赋值模板
          this.echartsOption.series[0] = this.ydata[0]
          // 重新赋值
          this.echartsOption.series[0].data = res.data.playerCount.numList
        }
        // 渲染表格
        this.renderCharts()
      })
    },
    renderCharts() {
      echarts.init(document.getElementById('spaceriftChart')).clear()
      echarts.init(document.getElementById('spaceriftChart')).setOption(this.echartsOption)
    }
  },
  mounted() {
    // 储存Echarts配置数据
    this.echartsOption = this.$refs.spaceriftChartRef.echartsCommonOption
  },
  components: {
    TimeSelect,
    EchartsBox
  },
  computed: {
    // 裂隙层数
    chartTitle(diff) {
      diff = this.difficulty
      switch (diff) {
        case '1' :
          diff = '裂隙·I'
          break
        case '2' :
          diff = '裂隙·II'
          break
        case '3' :
          diff = '裂隙·III'
          break
        case '4' :
          diff = '裂隙·IV'
          break
        case '5' :
          diff = '裂隙·V'
          break
        case '6' :
          diff = '裂隙·VI'
          break
        case '7' :
          diff = '裂隙·VII'
          break
        case '8' :
          diff = '裂隙·VIII'
          break
        case '9' :
          diff = '裂隙·IX'
          break
        default :
          diff = '裂隙·X'
      }
      return diff
    }
  }
}

</script>

<style>
.spaceriftBox .dataBtnGroup{
  margin-left: 30px;
}
</style>
