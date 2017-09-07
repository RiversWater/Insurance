<template>
  <div class="page index-page">
    <!-- <HeaderBar title="幸运包"></HeaderBar> -->
    <BannerSlider></BannerSlider>
    <MenuList :menuList="menuList" v-affix='0' v-on:tabClick="tabClick"></MenuList>
    <QuestionList :productList="productList"></QuestionList>
    <div class="weui-loadmore" v-show="loadmoreFlag">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载</span>
    </div>

    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import HeaderBar from '@/components/Header'

import QuestionList from '@/components/QuestionList'
import BannerSlider from '@/components/BannerSlider'

import MenuList from './components/MenuList.vue'

import $ from 'zepto'


export default {
  name: 'Home',
  data () {
    return {
      menuList: [],
      productList: [],
      loadmoreFlag: false,
      loadFalg: true,
      loadPage: 0
    }
  },
  components: {
    HeaderBar,
    FooterNav,
    SearchBar,
    MenuList,
    QuestionList,
    BannerSlider
  },
  methods: {
    getProductList ( { page=0, car_id=0, page_size=10, callback } ) {
      let that = this;
      this.$store.dispatch('products/GetProductList',{
        page,
        page_size,
        car_id
      }).then( function( response ){
        if( response.list.length <= 0 ){
          that.loadFalg = false;
        }
        that.productList = that.productList.concat( response.list )
        if( callback ){
          callback();
        }
      } )
    },
    getIndexData (  ) {
      let that = this;
      this.$store.dispatch('products/GetTypeList').then(function (response) {
        that.menuList = response.cart_list;
      })
    },
    tabClick ( car_id ) {
      this.loadPage = 0;
      this.loadFalg = true;
      this.productList = [];
      this.getProductList( {car_id} )
    },

    scrollLoad () {
      let that = this;
      $( window ).on( "scroll", function () {
        if( that.loadFalg ){
          let scrollTop = $(this).scrollTop(),
              appHeight = $("#app").height(),
              bodyHeight = $("body").height();
          
          if( scrollTop >= appHeight-bodyHeight ){
            that.loadmoreFlag = true;
            that.getProductList({
              page: ++that.loadPage,
              callback: function(){
                that.loadmoreFlag = false;
              }
            });
          }
        }
      } )
    }
  },
  created () {
    let that = this;
    
    this.getProductList({});
    this.getIndexData();

  },

  activated () {

    this.scrollLoad();
  },

  deactivated () {
    $( window ).off( "scroll")
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
