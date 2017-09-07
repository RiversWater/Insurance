<template>
  <div class="page sale-page">
    <HeaderBar title="销售记录" showBack="true"></HeaderBar>
    <div class="content">
      <div class="countTitle">销售总额：<output>3020份</output></div>
      <List></List>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

import List from './components/list'

export default {
  name: 'setting',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    HeaderBar,
    List
  },
  created () {
    let that = this;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sale-page{
  padding-top: 0.44rem;
  .countTitle {
      padding: 0.4rem 0;
      text-align: center;
      font-size: 0.26rem;
      color: #fff;
      background: #ff4774;
  }
}
</style>
