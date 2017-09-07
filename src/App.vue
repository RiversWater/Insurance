<template>
  <div id="app">
    <keep-alive include="Home">
    <router-view></router-view>
    </keep-alive>
    <Loading :loadingShow="loadingShow"></Loading>
  </div>
</template>

<script>
import "@/static/css/reset.css"
import "@/static/css/weui.min.css"
import "@/static/css/example/example.css"

import Loading from '@/components/loading'

export default {
  name: 'app',
  data () {
    return {
      loadingShow: false
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="less">
.weui-animate-slide-up {
    -webkit-animation: slideInUp ease .3s forwards;
    animation: slideInUp ease .3s forwards;
}
.weui-animate-slide-down {
    -webkit-animation: slideInDown ease .3s forwards;
    animation: slideInDown ease .3s forwards;
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    transform: translate3d(0, 0%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 100%, 0);
  }
}

#app{
  background: #f9f9f9;
  padding-bottom: 0.6rem;
  /*padding-top: 0.44rem;*/
  .form-group{
    .weui-cells {
        font-size: 0.14rem;
        .weui-cell{
          padding: 10px 15px;
          position: relative;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          .weui-select {
              height: auto;
              line-height: 1;
              padding-left: 0;
          }
          .weui-label {
              width: 0.8rem;
          }
          .weui-cell__bd {
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              line-height: 0.3rem;
          }
          .weui-vcode-btn {
              height: 0.3rem;
              line-height: 0.3rem;
              font-size: 0.14rem;
              color: #ff4774;
          }
        }
    }
  }
}
</style>
