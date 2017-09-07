import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Share from '@/views/share'
import Zoom from '@/views/zoom'

// const Home = resolve => require(['@/views/home'], resolve)
// const Share = resolve => require(['@/views/share'], resolve)
// const Zoom = resolve => require(['@/views/zoom'], resolve)
const Setting = resolve => require(['@/views/setting'], resolve)
const Baodan = resolve => require(['@/views/baodan'], resolve)
const Family = resolve => require(['@/views/family'], resolve)
const addFamily = resolve => require(['@/views/addfamily'], resolve)
const ProjectDetail = resolve => require(['@/views/projectDetail'], resolve)
const Coupon = resolve => require(['@/views/coupon'], resolve)
const Shopping = resolve => require(['@/views/shopping'], resolve)
const ShareDetail = resolve => require(['@/views/shareDetail'], resolve)
const AddPolicyInfor = resolve => require(['@/views/addPolicyInfor'], resolve)
const policyInfor = resolve => require(['@/views/policyInfor'], resolve)
const payPolicy = resolve => require(['@/views/payPolicy'], resolve)
const saleList = resolve => require(['@/views/saleList'], resolve)
const Login = resolve => require(['@/views/login'], resolve)




Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: "登录"
      }
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/zoom',
      name: 'zoom',
      component: Zoom,
      meta: {
        title: "个人中心",
        isLogin: true
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/baodan/:type',
      name: 'baodan',
      component: Baodan,

    },
    {
      path: '/family',
      name: 'family',
      component: Family,

    },
    {
      path: '/addfamily',
      name: 'addFamily',
      component: addFamily,

    }
    ,
    {
      path: '/projectDetail/:productId',
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon

    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/shareDetail/:title',
      name: 'shareDetail',
      component: ShareDetail
    },
    {
      path: '/addPolicyInfor',
      name: 'addPolicyInfor',
      component: AddPolicyInfor
    },
    {
      path: '/policyInfor',
      name: 'policyInfor',
      component: policyInfor
    },
    {
      path: '/payPolicy',
      name: 'payPolicy',
      component: payPolicy
    },
    {
      path: '/saleList',
      name: 'saleList',
      component: saleList
    },



  ]
})

newRouter.afterEach(function (transition) {
    if (transition.meta.title) {
        document.title = transition.meta.title;
    }
});




export default newRouter;
