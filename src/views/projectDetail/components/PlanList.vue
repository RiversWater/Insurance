<template>
  <div class="plan-list">
    <nav class="tab-nav">
      <a v-for="(item,index) in planList" href="javascript:;"  @click="tabProductDetail(item.product_id,index)" :class="{active:index==0}">{{item.plan_title}}</a>
      <!-- <router-link v-for="(item,index) in planList" :to="'/projectDetail/'+item.product_id"  active-class="active">{{item.plan_title}}</router-link> -->
    </nav>
    <div class="weui-cells">
        <a class="weui-cell weui-cell_access" v-for="item in choiceList" href="javascript:;" @click="showLayui(item.description,item.label)" >
            <div class="weui-cell__bd">
                <p>{{item.label}}</p>
            </div>
            <div class="weui-cell__ft">{{item.value}}</div>
        </a>
        <!-- <a class="weui-cell weui-cell_access" href="javascript:;" @click="showLayui('ssss','住院及特定门诊费用补偿')">
            <div class="weui-cell__bd">
                <p>住院及特定门诊费用补偿</p>
            </div>
            <div class="weui-cell__ft">3万元</div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" @click="showLayui('ssss','癌症保险金')">
            <div class="weui-cell__bd">
                <p>癌症保险金</p>
            </div>
            <div class="weui-cell__ft">1万元</div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;" @click="showLayui('ssss','住院及特定门诊费用补偿')">
            <div class="weui-cell__bd">
                <p>住院及特定门诊费用补偿</p>
            </div>
            <div class="weui-cell__ft">3万元</div>
        </a> -->

        <p class="weui-cell detail-read-more">更多详情，请阅读<a target="_blank" href="" class="base-color" title="安心防癌保险投保须知">《投保须知》</a>和<a target="_blank" href="" title="安心防癌保险保险条款" class="base-color">《保险条款》</a></p>

    </div>

    <Layui :show="show" :title="title" :content="content" @hide="hideLayui"></Layui>
  </div>
</template>

<script>
import Layui from '@/components/Layui'

export default {
  name: 'detailCard',
  props: [ 'choiceList', 'planList' ],
  data () {
    return {
      show: false,
      content: '',
      title: ''
    }
  },
  components: {
    Layui
  },
  methods: {
    showLayui: function(content,title){
      this.show = true;
      this.content = content;
      this.title = title;
    },
    hideLayui: function(){
      this.show = false;
    },

    tabProductDetail (productId,index) {
      this.$emit( "tabProductDetail",productId )
      $( ".tab-nav a" ).eq(index).addClass("active").siblings().removeClass("active");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.plan-list{
  background: #fff;
  margin-top: 0.1rem;
  .tab-nav{
    height: 0.4rem;
    line-height: 0.4rem;
    display: -webkit-box;
    a{
      display:block;
      height: 0.4rem;
      font-size: 0.14rem;
      padding: 0 0.2rem;
      position: relative;
      text-align: center;
      -webkit-box-flex:1;
      &.active{
        &:after{
          content: "";
          height: 1px;
          width: 100%;
          background: #ff4774;
          display: block;
          position: absolute;
          bottom: 0px;
          left: 0;
        }
        color: #ff4774;
      }
    }
  }
  & > h2{
    font-size: 0.14rem;
    line-height: 0.4rem;
    padding: 0 0.1rem;
  }
  .weui-cells{
    margin-top: 0;
    font-size: 0.12rem;

    .weui-cell{
      padding-left: 0.1rem;
      color: #666;
      &:before{
        left: 0;
        display: none;
      }
    }
    .detail-read-more{
      color: #999;
      font-size: 0.12rem;
      a{
        color: #1d50a2;
      }
    }
  }
}
</style>
