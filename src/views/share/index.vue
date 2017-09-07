<template>
  <div class="page share-page">
    <HeaderBar title="发现"></HeaderBar>
    <BannerSlider slidesPerView="1.5" spaceBetween="20"></BannerSlider>
    <VideoList></VideoList>

    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from '@/components/Footer'
import BannerSlider from './components/Banner'
import HeaderBar from '@/components/Header'

import VideoList from './components/videoList'

export default {
  name: 'hello',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    FooterNav,
    BannerSlider,
    VideoList,
    HeaderBar
  },
  created () {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
