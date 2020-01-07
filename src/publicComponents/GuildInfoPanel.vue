<template>
  <div class="guildInfoPanelBox" :style="{height: panelHeight, backgroundColor: bgColor, border: border, borderColor: bdColor}">
    <div class="guildInfoLeft">
      <div class="panelIcon" :class="panelIconClass"></div>
      <div class="guildPanelTitle">{{title}}</div>
    </div>
    <div class="guildInfoRight">{{panelData}}</div>
    <el-progress :percentage="barPercentage" :color="barColor"></el-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      border: '1px solid',
      bdColor: this.bgColor
    }
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    panelData: {
      type: Number,
      default: 0
    },
    panelHeight: {
      type: String,
      default: '100px'
    },
    panelIconClass: {
      type: String,
      default: 'el-icon-user-solid'
    },
    bgColor: {
      type: String,
      default: '#009999'
    },
    barColor: {
      type: String,
      default: '#337AB7'
    },
    barPercentage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
.guildInfoPanelBox{
  border: 1px solid #000;
  border-radius: 5px;
  position: relative;
  padding: 15px 15px 0 15px;
  box-sizing: border-box;
}
.guildInfoPanelBox .guildInfoLeft{
  float: left;
}
.guildInfoPanelBox .guildInfoRight{
  float: right;
  margin: 7px 3px 0 0;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}
.guildInfoPanelBox .panelIcon{
  font-size: 22px;
  color: #fff;
}
.guildInfoPanelBox .guildPanelTitle{
  font-size: 18px;
  color: #fff;
  margin-top: 5px;
}
.guildInfoPanelBox .el-progress{
  margin-top: 55px;
}
.guildInfoPanelBox .el-progress .el-progress__text{
  font-size: 12px!important;
  color: #fff;
  transform: scale(.8)
}
</style>
