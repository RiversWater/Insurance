<template>
  <div class="Layui-box" style="display:none;">

    <div class="Layui-content">
      <div class="Layui-project">
          <h1 class="Layui-title">{{title}}</h1>
          <a href="javascript:;" class="Layui-close" target="_blank">
              <img src="../../static/images/close.png" alt="泰康人寿">
          </a>
      </div>
      <div v-html="content" class="content"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Layui',
  data () {
    return {}
  },
  props: {
    "show": {
      "default": false
    },
    "content": {
      "default": ""
    },
    "title": {
      "default": ""
    }
  },
  mounted () {
    var that = this;
    this.$el.addEventListener("touchmove",function(e){
      e.preventDefault();
      return false;
    },false)
    $( this.$el ).find(".Layui-content").tap(function(e){
      e.stopPropagation();
    })
    $( this.$el ).tap(function(){
      that.$emit("hide")
    })
    $( this.$el ).find(".Layui-close").tap(function(){
      that.$emit("hide")
    })
  },
  watch: {
    show: function( val, oldVal ){
      if( !val ){
        $(".Layui-box").css({
          opacity: 1
        }).animate({
          "opacity": 0
        },"ease",200,function(){
          $(this).hide();
        });
        $(".Layui-content").css({
          "transform": "translateY(0)"
        }).animate({
          "translateY": "100%"
        },"ease-out",200);
      }else{
        $(".Layui-box").show().css({
          opacity: 0
        }).animate({
          "opacity": 1
        },"ease",200);
        $(".Layui-content").css({
          "transform": "translateY(100%)"
        }).animate({
          "translateY": "0"
        },"ease-out",200);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Layui-box{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0,0,0,0.5);
  .Layui-project{
    display: -webkit-box;
    -webkit-box-align:center;
    width: 100%;
    padding: 0.1rem;
    border-bottom: 1px solid #eee;
    .Layui-title{
      font-size: 0.16rem;
      -webkit-box-flex:1;
      text-align: center;

    }
    .Layui-close{
      display: block;
      position: absolute;
      right: 0.1rem;
      top: 0;
      height: 0.46rem;
      img{
        display: block;
        height: 50%;
        margin-top: 25%;
        opacity: 0.5;
      }
    }
  }
  .Layui-content{
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4.1rem;
    .content{
      font-size: 0.12rem;
      padding: 0.1rem;
    }
  }
}
</style>
