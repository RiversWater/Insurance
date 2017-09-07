<template>
  <div class="menu-list">
    <div class="weui-grids">
        <router-link to="/baodan/1" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon10.png" alt="">
            </div>
            <p class="weui-grid__label">我的保单</p>
        </router-link>
        <router-link to="/family" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon5.png" alt="">
            </div>
            <p class="weui-grid__label">投保人信息</p>
        </router-link>

        <router-link to="/baodan/2" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon2.png" alt="">
            </div>
            <p class="weui-grid__label">申请理赔</p>
        </router-link>
        <router-link to="/baodan/3" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon7.png" alt="">
            </div>
            <p class="weui-grid__label">申请退保</p>
        </router-link>
        <router-link to="/baodan/3" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon11.png" alt="">
            </div>
            <p class="weui-grid__label">申请续保</p>
        </router-link>

        <router-link to="/saleList" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon12.png" alt="">
            </div>
            <p class="weui-grid__label">销售记录</p>
        </router-link>

        <!-- <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon1.png" alt="">
            </div>
            <p class="weui-grid__label">购物车</p>
        </a> -->
        <!-- <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon3.png" alt="">
            </div>
            <p class="weui-grid__label">会员权利</p>
        </a> -->
        <router-link to="/setting" class="weui-grid">
          <div class="weui-grid__icon">
              <img src="../../../static/images/icon4.png" alt="">
          </div>
          <p class="weui-grid__label">设置</p>
        </router-link>
        <!-- <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="../../../static/images/icon8.png" alt="">
            </div>
            <p class="weui-grid__label">我的银行卡</p>
        </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  data () {
    return {}
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .menu-list{
    background: #fff;
    // margin-top: 0.2rem;
    padding-bottom: 0.4rem;
    .weui-grid{
      width: 25%;
    }
    .weui-grid__label{
      font-size: 12px;
      color: #666;
    }
    .weui-grid__icon{
      width: 0.25rem;
      img{
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .weui-grid:before,.weui-grids:after,.weui-grid:after,.weui-grids:before {
        display: none;
    }
  }
</style>
