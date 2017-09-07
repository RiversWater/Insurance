<template>
  <swiper :options="swiperOption" ref="mySwiper2">
    <!-- slides -->
    <swiper-slide v-for="item in banners" :key="item">
      <img :src="item" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Banner',
  data () {
    return {
      banners: [
        '//pubsto.datebao.com/ladderUploads/banner/fuqinjieapp.jpg',
        '//pubsto.datebao.com/ladderUploads/banner/eshun20170526152715.jpg',
        '//pubsto.datebao.com/ladderUploads/banner/guoshouebao.jpg',
        '//pubsto.datebao.com/ladderUploads/banner/shaoerbaiwanWAP.png',
        '//pubsto.datebao.com/ladderUploads/banner/fuqinjieapp.jpg'
      ],
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        setWrapperSize :true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        mousewheelControl : true,
        observeParents:true,
        slidesPerView: 1.1
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.swiper-container{
  padding-top: 0.1rem;

  padding-right: 0.1rem;
  .swiper-slide{
    padding-left: 0.1rem;
    img{
      display: block;
      width: 100%;
      border-radius: 3px;

    }
  }
  .swiper-pagination-bullets{
    bottom: -20px;
  }
}
.swiper-pagination-bullet-active{
  background: #ff4774 !important;
}
</style>
