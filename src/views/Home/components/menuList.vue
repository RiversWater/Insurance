<template>
  <nav class="menu-list">
    <div class="content">
      <a
        href="javascript:;"
        v-for="(item,index) in menuList"
        :class="{'active':index==activeIndex}"
        @click="tabClick(index,item.cat_id)"
      >
        {{item.cat_name}}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuList',
  props: ["menuList"],
  data () {
    return {
      activeIndex : 0
    }
  },
  methods: {
    tabClick ( index,cat_id ) {
      this.activeIndex  = index;
      this.$emit( "tabClick",cat_id )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menu-list{
  width: 100%;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ececec;
  .content{
    display: -webkit-box;
    a{
      display: block;
      padding: 0.1rem;
      -webkit-box-flex:1;
      width: 0;
      color: #888;
      font-size: 0.12rem;
      text-align: center;
      &.active{
        color: #e95e80;
        border-bottom: 1px solid #e76081;
      }
    }
  }
}
</style>
