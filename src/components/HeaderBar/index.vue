<template>
  <header class="header-bar">
    <div class="left-icon-group icon-group">
    	<slot name='left-icon'></slot>
    </div>
    <h1 class="title">{{title}}</h1>
    <div class="right-icon-group icon-group">
    	<slot name='right-icon'></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
  	'title': {
  		default: ''
  	}
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-bar{
	height: 0.44rem;
	background: #fff;
	h1{
		position: absolute;
		top:0;
		left:0;
		right:0;
		text-align:center;
		line-height:0.44rem;
	}
	.left-icon-group{
		float:left;
		position:relative;
		z-index:100;
		height:0.44rem;
		line-height:0.44rem;
		padding:0 0.1rem;
	}
	.right-icon-group{
		float:right;
		position:relative;
		z-index:100;
		height:0.44rem;
		line-height:0.44rem;
		padding:0 0.1rem;
	}
	.icon-group{
		a,i{
		    vertical-align: middle;
		}
		.icon-arrow-down{
		    transform: rotate(-90deg);
		}
	}
}
</style>
