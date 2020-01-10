<template>
  <div class="fieldLegend">
    <fieldset>
      <legend>{{title}}</legend>
      <div>
        <slot></slot>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '条件筛选'
    }
  }
}
</script>

<style>
.fieldLegend fieldset{
  border-radius: 5px;
  border: 1px solid #a1a1a1;
  padding: 15px;
}
.fieldLegend fieldset legend{
  padding: 0 10px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
}
</style>
