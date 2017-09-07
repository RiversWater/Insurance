<template>
  <div class="weui-panel weui-panel_access projectsList">
      <div class="weui-panel__bd">
        <router-link :to="'/projectDetail/'+item.product_id" class="weui-media-box weui-media-box_appmsg" v-for="item in productList">
            <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" :src="item.cover" alt="">
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">{{item.title}}·{{item.plan_title}}</h4>
                <p class="weui-media-box__desc">
                  <output>{{item.features ? item.features : '暂无介绍' }}</output>
                </p>
                <div class="tool-bar">
                  <button>{{ parseInt(item.price) }}元起购买</button>
                  <span>{{item.sale_num}}人购买</span>
                </div>
            </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchBar',
  props: ['productList'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .projectsList{
    .weui-media-box__title {
        font-size: 0.14rem;
    }
    .weui-media-box{
      padding: 0.1rem;

    }
    .weui-media-box_appmsg {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
    }
    .tool-bar{
        padding: 0.1rem 0;
        button{
          background: #ff4774;
          border: 0;
          height: 0.3rem;
          width: 1rem;
          border-radius: 0.3rem;
          color: #fff;
          box-shadow: 1px 1px 15px #ff6087;
        }
        span{
          font-size: 0.12rem;
          float: right;
          line-height: 30px;
          color: #989898;
        }
    }
    .weui-media-box_appmsg {
      .weui-media-box__hd {
        width: 1.3rem;
        height: auto;
      }
      .weui-media-box__title .right-title {
        float: right;
        color: #f00;
      }
      .weui-media-box__desc {
        margin-top: 0.05rem;
        output {
            display: block;
            line-height: 1.5;
            font-size: 0.12rem;
        }
      }
    }
  }
</style>
