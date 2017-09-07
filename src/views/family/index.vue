<template>
  <div class="page family-page">
    <HeaderBar title="投保人信息" showBack="true"></HeaderBar>
    <InforCard></InforCard>
    <router-link to="/addfamily" class="weui-btn weui-btn_primary addBtn">添加投保人</router-link>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

import InforCard from './components/inforCard'

export default {
  name: 'setting',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    HeaderBar,
    InforCard
  },
  created () {
    let that = this;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.family-page{
  padding-top:0.44rem;
  .addBtn{
    width: 100%;
    background: #ff4774;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    font-size: 0.12rem;
    padding: 0.08rem;
  }
}
</style>
