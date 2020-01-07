<template>
  <div class="chartBox">
    <div class="chartBoxTitle">{{title}}</div>
    <slot>
      <div
        :id="echartsInstance"
        :ref="'ref' + echartsInstance"
        :style="{height: height}"
        class="templateChartArea"
      ></div>
    </slot>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    title: {
      type: String,
      default: '数据展示表格'
    },
    height: {
      type: String,
      default: '600px'
    },
    toolbox: {
      type: Boolean,
      default: true
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    xtest: {
      type: Boolean,
      default: true
    },
    xname: {
      type: String,
      default: 'X轴数据'
    },
    xgap: {
      type: Number,
      default: 40
    },
    xdata: {
      type: Array,
      default() {
        return []
      }
    },
    ytext: {
      type: Boolean,
      default: true
    },
    yname: {
      type: String,
      default: 'Y轴数据'
    },
    ygap: {
      type: Number,
      default: 50
    },
    ydata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    this.renderCharts()
  },
  methods: {
    // 表格初始化+渲染
    renderCharts() {
      const templateChart = echarts.init(document.getElementById(this.echartsInstance))
      templateChart.setOption({
        title: {
          text: this.title
        },
        toolbox: {
          show: this.toolbox,
          feature: {
            magicType: { type: ['line', 'bar'] },
            dataView: {},
            restore: {},
            saveAsImage: {}
          },
          right: 25
        },
        tooltip: {
          show: this.tooltip
        },
        xAxis: {
          show: this.xtest,
          name: this.xname,
          nameLocation: 'center',
          nameGap: this.xgap,
          type: 'category',
          nameTextStyle: {
            fontWeight: 'bold'
          },
          data: this.xdata
        },
        yAxis: {
          show: this.ytext,
          name: this.yname,
          nameLocation: 'center',
          nameGap: this.ygap
        },
        series: this.ydata
      })
    }
  },
  computed: {
    // 保证每次表格实例化绑定的ID不一致
    echartsInstance() {
      return 'echarts' + Math.random() * 1000000
    }
  }
}
</script>

<style>
.chartBox {
  border: 1px solid #cedeed;
  padding: 15px;
}
.chartBox .chartBoxTitle {
  padding-bottom: 15px;
  font-size: 12px;
  border-bottom: 1px solid #e5e5e5;
}
.templateChartArea {
  margin-top: 15px;
}
</style>
