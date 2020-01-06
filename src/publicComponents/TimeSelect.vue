<template>
  <div class="timeSelectBox">
    <fieldset>
      <legend>条件筛选</legend>
      <el-date-picker
        :picker-options="pickerOptions"
        align="right"
        end-placeholder="结束日期"
        range-separator="至"
        start-placeholder="开始日期"
        type="datetimerange"
        v-model="value2"
      ></el-date-picker>
    </fieldset>
  </div>
</template>

<script>
export default {}
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
</style>
