<template>
  <div class="page baodan-page">
    <HeaderBar title="我的保单" showBack="true"></HeaderBar>
    <MenuList :menuJson="menuJson" @tabLoadEvent="tabLoad"></MenuList>
    <div class="page-card-list">
      <router-link to="/projectDetail" class="card-item">
        <h2>
          <span>200万全年航意外险</span>
          <aside>
            <button class="btn">立即付款</button>
          </aside>
        </h2>
        <address>
          <p>订单将于下单后2小时过期</p>
        </address>
      </router-link>

      <a href="#" class="card-item">
        <h2>
          <span>200万全年航意外险</span>
          <aside>
            <output class="ok">保障中</output>
            <!-- <button class="btn ok">正在保障</button> -->
          </aside>
        </h2>
        <address>
          <p><output>被保人：刘宇</output></p>
          <p><output>保障金额：<span>100.00 ¥</span></output>  <output>投保金额：<span>100.00 ¥</span></output></p>
          <p>保险审核期至2017-03-24</p>
        </address>
      </a>

      <a href="#" class="card-item">
        <h2>
          <span>200万全年航意外险</span>
          <aside>
            <button class="btn no">立即续保</button>
          </aside>
        </h2>
        <address>
          <p><output>被保人：刘宇</output></p>
          <p><output>保障金额：<span>100.00 ¥</span></output>  <output>投保金额：<span>100.00 ¥</span></output></p>
          <p>保险审核期至2017-03-24</p>
        </address>
      </a>


    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

import MenuList from './components/menuList'


export default {
  name: 'baodan',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    HeaderBar,
    MenuList
  },
  methods: {
    tabLoad: function( type ){
      console.log("切换"+type)
    }
  },
  created () {
    let that = this;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.baodan-page{
  padding-top: 0.44rem;

  .page-card-list{
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.1rem;
    .card-item {
      width: 100%;
      background: #fff;
      margin-top: 0.1rem;
      position: relative;
      box-sizing: border-box;
      display: block;
      address {
        padding: 0.1rem;
        font-size: 0.12rem;
        p {
          color: #9a9a9a;
          margin-bottom: 0.05rem;
          output {
            margin-right: 0.2rem;
            span {
              color: #ff4774;
            }
          }
        }
      }
      h2 {
        display: -webkit-box;
        padding: 0.1rem;
        border-bottom: 1px solid #eee;
        font-size: 0.16rem;
        span {
          display: block;
          -webkit-box-flex: 1;
        }
        aside {
          width: 0.8rem;
          text-align: center;
          button {
            background: #ff4774;
            border: 0;
            padding: 0.04rem 0.14rem;
            display: block;
            margin: 0 auto;
            color: #fff;
            border-radius: 0.25rem;
            box-shadow: 1px 1px 15px #ff6087;
            &.no{
              background: #ff8e47;
              box-shadow: 1px 1px 15px #ff8e47;
            }
            &.ok{
              background: #00c93b;
              box-shadow: 1px 1px 15px #00c93b;
            }
          }
          output {
            font-size: 0.12rem;
            color: #ff4774;
            &.ok{
              color: #00c93b;
            }
            &.no{
              color: #ff8e47;
            }
          }
        }
      }
      .noneRadius:after {
        display: none;
      }
      .noneRadius:before {
        display: none;
      }
      &:after {
        display: block;
        content: "";
        width: 0.15rem;
        height: 0.15rem;
        background: #f5f5f5;
        position: absolute;
        top: 0.37rem;
        right: -0.1rem;
        border-radius: 100%;
      }
      &:before {
        display: block;
        content: "";
        width: 0.15rem;
        height: 0.15rem;
        background: #f5f5f5;
        position: absolute;
        top: 0.37rem;
        left: -0.1rem;
        border-radius: 100%;
      }
    }
  }

}
</style>
