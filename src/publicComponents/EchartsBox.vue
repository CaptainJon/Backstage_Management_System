<template>
  <div class="echartBox">
    <div class="chartBoxTitle">{{title}}</div>
    <!-- Echarts表格预留插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '数据展示图表'
    },
    yname: {
      type: String,
      default: 'Y轴数据'
    },
    xname: {
      type: String,
      default: 'X轴数据'
    },
    ygap: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      // Echarts常规柱状/折线图配置项模板
      echartsCommonOption: {
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ['line', 'bar'] },
            dataView: {},
            restore: {},
            saveAsImage: {}
          },
          right: 25
        },
        tooltip: {
          show: true
        },
        xAxis: {
          show: true,
          name: this.xname,
          nameLocation: 'center',
          nameGap: 40,
          type: 'category',
          nameTextStyle: {
            fontWeight: 'bold'
          },
          data: []
        },
        yAxis: {
          show: true,
          name: this.yname,
          nameLocation: 'center',
          nameGap: this.ygap
        },
        series: [{
          type: 'bar',
          color: '#7C6354',
          name: '',
          barMaxWidth: 40,
          label: {
            show: true,
            position: 'top'
          },
          data: []
        }]
      },
      // Echarts常规饼状图配置项模板
      echartsPieOption: {
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            saveAsImage: {}
          },
          right: 25
        },
        tooltip: {},
        series: []
      }
    }
  }
}
</script>

<style>
.echartBox {
  border: 1px solid #cedeed;
  padding: 15px;
  margin: 15px 0;
}
.echartBox .chartBoxTitle {
  padding-bottom: 15px;
  font-size: 12px;
  border-bottom: 1px solid #e5e5e5;
}
</style>
