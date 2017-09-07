<template>
  <div class="page zoom-page">
    <!-- <HeaderBar title="个人中心"></HeaderBar> -->
    <UserCard></UserCard>
    <div class="card">
			<nav>
				<!-- <a href="frozenLuckyBean.html">

					<output>1,200.00</output>
          <span>余额</span>
				</a> -->
        <!-- <router-link to="/coupon">
          <span>优惠券</span>
					<output>10</output>
				</router-link>
        <router-link to="/shopping">
          <span>积分</span>
          <output>200</output>
        </router-link> -->
			</nav>
		</div>
    <MenuList></MenuList>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from '@/components/Footer'
import HeaderBar from '@/components/Header'

import UserCard from './components/UserCard'
import MenuList from './components/menuList'


export default {
  name: 'hello',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    FooterNav,
    UserCard,
    MenuList,
    HeaderBar
  },
  mounted () {
    let that = this;
    // this.$axios.get('/getMenuList',{})
    // .then(function (response) {
    //   var data = response.data;
    //   console.log(data)
    //   if( data.code == 1 ){
    //     that.menuJson = data.data;
    //   }else{
    //     that.menuJson = [];
    //   }
    // })
    // .catch(function (response) {
    //   console.log(response);
    // });
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.zoom-page{
  /**padding-top: 0.44rem;**/
  .card {
      width: 100%;
      background: #fff;
      margin-top: -50px;
      position: relative;
      z-index: 10;
      padding: 0.2rem 0;
      nav {
          display: -webkit-box;
          a {
              display: block;
              width: 0;
              -webkit-box-flex: 1;
              padding: 0 0.3rem;
              position: relative;
              text-align: center;
              span {
                  font-size: 0.12rem;
                  color: #666;
              }
              output {
                  display: block;
                  font-size: 0.18rem;
                  color: #afb7bf;
              }
          }
      }
  }
}
</style>
