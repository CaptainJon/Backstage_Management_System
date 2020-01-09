<template>
  <div class="dataPanelBox" :style="{maxWidth: maxWidth, width: width}">
    <div class="panelTop">
      <div class="panelTitle">{{title}}</div>
      <el-tooltip :content="hoverText" :placement="position">
        <div class="el-icon-question panelIcon" @hover="$emit('questionHover')" :style="{color: iconColor}"></div>
      </el-tooltip>
    </div>
    <div class="panelBottom">{{data}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '数据标题'
    },
    data: {
      type: Number,
      default: 0
    },
    hoverText: {
      type: String,
      default: '提示文字'
    },
    position: {
      type: String,
      default: 'bottom-end'
    },
    iconColor: {
      type: String,
      default: '#1F85C7'
    },
    maxWidth: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  methods: {
    iconHover() {
      this.$emit()
    }
  }
}
</script>

<style>
.dataPanelBox{
  border: 1px solid #E7EAEC;
  border-radius: 5px;
  height: 100px;
}
.dataPanelBox .panelTop{
  height: 40px;
  border-bottom: 1px solid #E7EAEC;
  line-height: 40px;
  padding: 0 15px;
}
.dataPanelBox .panelTitle{
  float: left;
  font-size: 14px;
}
.dataPanelBox .panelIcon{
  float: right;
  font-size: 18px;
  margin-top: 11px;
  cursor: pointer;
  color: #1F85C7;
}
.dataPanelBox .panelBottom{
  font-size: 32px;
  line-height: 60px;
  padding: 0 15px;
}
</style>
