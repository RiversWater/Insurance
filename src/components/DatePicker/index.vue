<template>
  <div>
    <a href="javascript:;" class="" id="showDatePicker" @click="datePicker()">{{value}}</a>
    <input type="hidden" :name="name" :value="value" />
  </div>
</template>

<script>
import $ from 'zepto'
import weui from 'weui'

export default {
  name: 'Picker',
  props: ['name','step','values'],
  data () {
    return {
      value: this.values
    }
  },
  methods: {
    datePicker () {
      console.log("aaa")
      let that = this;
      let values = that.values;
      weui.datePicker({
         start: values, // 从今天开始
         end: new Date(),
         defaultValue: values.split("-"),
         onChange: function(result){
             that.value = result[0].value+"-"+result[1].value+"-"+result[2].value
         },
         onConfirm: function(result){
             that.value = result[0].value+"-"+result[1].value+"-"+result[2].value
         }
     });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">


</style>
