<template>
  <nav class="menu-list">
    <div class="content">
      <a v-for="item in menuList"  href="javascript:;" @click="goto({ name: 'baodan', params: { type: item.id }})" :class="{'active':item.active}">{{item.name}}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuList',
  //props: ["menuJson"],
  data () {
    return {
      menuList: [
        { name: '全部', id: 0, active: true },
        { name: '待付款', id: 1, active: false },
        { name: '保障中', id: 2, active: false },
        { name: '以失效', id: 2, active: false }
      ]
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'tabLoad'
  },
  methods: {
    goto: function( data ){
      this.$router.push(data)
    },
    tabLoad: function(){
      var id = this.$route.params.type;
      this.$emit("tabLoadEvent",id);
      for( var i=0; i<this.menuList.length; i++ ){
        if( this.menuList[i].id == id ){
          this.menuList[ i ].active = true;
        }else{
          this.menuList[ i ].active = false;
        }
      }

    }
  },
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
      padding: 0.1rem 0;
      -webkit-box-flex:1;
      width: 0;
      color: #888;
      font-size: 0.12rem;
      text-align: center;
      &.active{
        color: #ff4774;
        position: relative;
        &:after{
          content: "";
          display: block;
          width: 0.5rem;
          border-bottom: 2px solid #ff4774;
          bottom: 0;
          left: 50%;
          position: absolute;
          margin-left: -0.25rem;
        }
      }
    }
  }
}
</style>
