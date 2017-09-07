// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import axios from 'axios';
import Qs from 'Qs';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store'
import directives from './directives/index'
import $http from "./utils/fetch"

import mLayer from "./plugins/mLayer"

import './filter/currency.js'



router.beforeEach((to, from, next) => {
  if( to.meta.isLogin ){
    if( !store.getters["user/GetUserInfor"] ){
      next("login")
    }else{
      next();
    }

  }else{
    next();
  }

})

for( let key in directives ){
  Vue.directive( key, directives[key] )
}

$http.interceptors.request.use(function(config){
  console.log( "加载中" )
  loading( true )
  return config;
},function(err){
  //Do something with request error
  return new Promise.reject(error);
});
$http.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  console.log( "加载完成" )
  loading( false )

  return res;
},function(err){
  //Do something with response error
  return new Promise.reject(error);
})

function loading( buer ) {
  myApp.$children[0].loadingShow = buer;
}

// let instance = axios.create({
//   baseURL: 'http://m.dev.luckybao365.com/api/',
//   headers:{
//       'Content-Type':'application/x-www-form-urlencoded'
//   },
//   transformRequest: [function (data) {
//       data = Qs.stringify(data);
//       return data;
//   }]
// });
//
// Vue.prototype.$axios = instance;
Vue.use(VueAwesomeSwiper);
Vue.use( mLayer );

Vue.config.productionTip = false

/* eslint-disable no-new */
let myApp = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

function loading( buer ) {
  myApp.$children[0].loadingShow = buer;
}
