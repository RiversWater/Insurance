<template>
  <div class="page project-page">
    <HeaderBar :title="product.title" showBack="true"  v-Title :data-title="product.title"></HeaderBar>
    <DetialCard :product="product" :company="company" :options="options"></DetialCard>
    <PlanList :choiceList="choiceList" :planList="planList" @tabProductDetail="tabProductDetail"></PlanList>
    <FooterBar></FooterBar>
    <Purchase :genes="genes" :product="product" :company="company"></Purchase>
    <div class="bottom-fix-nav">
      <a href="javascript:;" class="kefu">
        <img src="../../static/images/kefu.png"/>
        联系客服
      </a>
      <output><i style="font-size:12px;margin-right:5px;">¥</i>{{product.price}}</output>
      <a href="javascript:;" class="btn" @click="showPurchase">立即投保</a>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

import DetialCard from './components/DetialCard'
import PlanList from './components/PlanList'
import FooterBar from './components/Footer'
import Purchase from './components/Purchase'



export default {
  name: 'projectPage',
  data () {
    return {
      menuJson:[],
      inforList: [],
      product: {},
      choiceList: [],
      genes: [],
      company: {},
      planList: [],
      options: {}
    }
  },
  components: {
    HeaderBar,
    DetialCard,
    PlanList,
    FooterBar,
    Purchase
  },
  watch: {
    "$route" () {
      this.getProductDetail( this.$route.params.productId )
    }
  },
  methods: {
    tabProductDetail ( productId ) {
      this.getProductDetail( productId )
    },
    showPurchase () {
      $(".purchase-box").show().css({
        opacity: 0
      }).animate({
        "opacity": 1
      },"ease",200);
      $(".purchase-content").css({
        "transform": "translateY(100%)"
      }).animate({
        "translateY": "0"
      },"ease-out",200);
    },

    getProductDetail ( product_id ) {
      let that = this;
      this.$store.dispatch('products/GetProductDetail',{
        product_id
      }).then(function( response ){
      //  console.log( response )
        //response.product.picture = response.data.description
        that.product = response.product;
        that.choiceList = response.items;
        that.genes = response.genes;
        that.company = response.company;
        that.planList = response.plan_list;
        that.options = response.options;
      })
    }
  },
  created () {
    let that = this;
    this.getProductDetail( this.$route.params.productId )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bottom-fix-nav{
  position: fixed;
  bottom: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  display: -webkit-box;
  background: #fff;
  width: 100%;
  border-top: 1px solid #ccc;
  output{
    display: block;
    -webkit-box-flex:1;
    color: #fff;
    padding-left: 0.1rem;
    text-align: left;
    background: #333;
  }
  a{
    display: block;
    padding: 0 0.4rem;
    background: #ff4774;
    color: #fff;
    font-size: 0.14rem;
    &.kefu{
      background: #333;
      padding: 0 0.1rem;
      line-height: 1;
      font-size: 0.12rem;
      border-right: 1px solid #666;
      img{
        display: block;
        height: 20px;
        margin: 0.05rem auto;
      }
    }
  }
}
</style>
