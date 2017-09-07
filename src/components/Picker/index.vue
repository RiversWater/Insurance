<template>
  <div>
    <a href="javascript:;" class="" id="showDatePicker" @click="picker()">{{values}}</a>
    <input type="hidden" :name="name" :value="values" />
  </div>
</template>

<script>
import $ from 'zepto'
import weui from 'weui' 

export default {
  name: 'Picker',
  props: ['name','step'],
  data () {
    return {
      values: '请选择'
    }
  },
  methods: {
    picker () {
      console.log( this.step )
      var step = this.step.step;
      var options = [];
      let that = this;

      for( let i=step.min; i<step.max; i+=step.step ){
        options.push( {
          label: i+step.unit,
          value: i+step.unit
        } )
      }
      weui.picker(options, {
          onChange: function (result) {
              console.log(result);
              that.values = result[0].value
          },
          onConfirm: function (result) {
              console.log(result);
              that.values = result[0].value
          }
      });
    }
  }
}
/**
  动画分为:
  css3里面 (关键帧动画  过度动画) 过度动画
  帧动画,就是针对图片直接的一个切换   针对复杂大型动画(  需要对图片优化 )  图片的压缩在一个就是最好用jpg
  骨骼动画  根据一个物体分解开针对某个部位做动画
**/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">


</style>
