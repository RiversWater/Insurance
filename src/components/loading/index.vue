<template>
  <transition name="fade">
  <div class="loading" v-show="loadingShow">
    <div class="car"></div>
  </div>
  </transition>
</template>

<script>
import $ from 'zepto'

export default {
  name: 'Loading',
  props: ['loadingShow'],
  data () {
    return {
      time: ''
    }
  },
  methods: {
    loading: function(index){
      $( this.$el ).find( ".car" ).css({
        "background-position-x" : -index*64
      })
    },

    playLoading: function(){
      var that = this;
      var index = 0;
      this.time = setInterval( ()=> {

        that.loading( index );
        index++;
        index = index>=20 ? 0 : index;

      }, 1000/30)
    }
  },
  created () {
    this.playLoading()
  },
  watch: {
    "loadingShow": function( val ){
        if( val ){
          this.playLoading()
        }else{
          clearInterval( this.time )
        }
    }

  },
  mounted () {

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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0s
}
.fade-enter, .fade-leave-to /* .fad.5-leave-active in <2.1.8 */ {
  transition: opacity .5s;
  opacity: 0
}

.loading{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:10000;
  background:rgba(0,0,0,0.2);
  display:-webkit-box;
  -webkit-box-align:center;
  -webkit-box-pack:center;
  .car{
    width:64px;
    height:64px;
    background-image:url('https://img.dmall.com/common/2add440a-12a9-40c1-b9a3-bad9dea816db');
    background-size: 1152px 64px;
  }
}
</style>
