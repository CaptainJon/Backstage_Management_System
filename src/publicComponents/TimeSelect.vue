<template>
  <div class="timeSelectBox">
    <fieldset>
      <legend>条件筛选</legend>
      <el-date-picker
        align="center"
        end-placeholder="结束日期"
        range-separator="至"
        start-placeholder="开始日期"
        type="datetimerange"
        v-model="selectedTime"
        size="small"
        value-format="yyyy-MM-dd"
        :default-time="['00:00:00','23:59:59']"
      ></el-date-picker>
        <slot></slot>
      <el-button class="searchBtn" size="mini" @click="searchBtnClick">查询</el-button>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTime: []
    }
  },
  methods: {
    // 查询按钮点击
    searchBtnClick() {
      this.$emit('searchbtnclicked', this.selectedTime)
    }
  }
}
</script>

<style>
.timeSelectBox fieldset {
  border-radius: 5px;
  border: 1px solid #a1a1a1;
  padding: 15px;
}
.timeSelectBox legend {
  padding: 0 10px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
}
.timeSelectBox .searchBtn{
  margin-left: 15px;
  background-color: #337AB7;
  color: #fff;
}
.timeSelectBox .searchBtn:hover{
  background-color: #3E67AC;
}
</style>
