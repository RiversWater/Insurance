<template>
  <header class="header-bar">
		<span class="icon-bars pull-left">
      <a href="javascript:;" onclick="history.back()" class="back-btn" v-if="showBack"></a>
    </span>
		<h1 class="title">{{title}}</h1>
		<span class="icon-bars pull-right">

    </span>
	</header>
</template>

<script>
export default {
  name: 'Header',
  props:{
    "title": {
      "default": "标题"
    },
    "showBack": {
      "default": false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-bar{
  height: 0.44rem;
  padding-right: 10px;
  padding-left: 10px;
  border-bottom: 0;
  display: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  &::before {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      z-index: 2;
  }
  .icon-bars {
      display: block;
      height: 100%;
      line-height: 3.667rem;
      color: #b5b5b5;
      &.pull-right {
          float: right;
      }
      &.pull-left {
          float: left;
      }
  }
  h1.title {
      right: 40px;
      left: 40px;
      display: inline-block;
      overflow: hidden;
      width: auto;
      margin: 0;
      text-overflow: ellipsis;
      font-size: 0.16rem;
      font-weight: 500;
      line-height: 0.44rem;
      position: absolute;
      display: block;
      text-align: center;
      white-space: nowrap;
      color: #333;
      font-weight: normal;
  }
  .back-btn{
    display: inline-block;
    height: 10px;
    width: 10px;
    border-width: 2px 2px 0 0;
    border-color: #000;
    border-style: solid;
    -webkit-transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
    transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -4px;
  }
}
</style>
