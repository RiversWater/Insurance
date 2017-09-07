<template>
  <footer class="footer-bar">
    <nav>
    	<router-link to="/home" active-class="active" class="home"><i class="icon"></i>首页</router-link>
    	<router-link to="/classType" active-class="active" class="classType"><i class="icon"></i>分类</router-link>
    	<router-link to="/shopCar" active-class="active" class="shopCar"><i class="icon"></i>购物车</router-link>
    	<router-link to="/zoom" active-class="active" class="zoom"><i class="icon"></i>我的</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer-bar{
	position:fixed;
	bottom:0;
	width:100%;
	background:#fff;
	nav{
		padding:0.05rem 0;
		display:-webkit-box;
		-webkit-box-pack:center;
		-webkit-box-align:center;
		a{
			display:block;
			-webkit-box-flex:1;
			width:0px;
			text-align:center;
			color:#999;
			font-size:0.12rem;
			i{
				width:0.3rem;
				height:0.3rem;
				display:block;
				background-image:url("../../static/images/icon/btm-bar-sprt.png");
				background-size:2.5rem 1rem;
				margin:0 auto;
				margin-bottom:0.02rem;
			}

			&.active{
				color: #ff712b;
			}
			&.home{
			    i{ background-position: 0 0; }
			    &.active{
			       i{ background-position: 0 -50px; }
			    }
			}
			&.classType{
				i{background-position: -50px 0;}
			    &.active{
			        i{ background-position: -50px -50px;}
			    }
			}
			&.shopCar{
			    i{background-position: -150px 0;}
			    &.active{
			        i{ background-position: -150px -50px; }
			    }
			}
			&.zoom{
			    i{ background-position: -200px 0; }
			    &.active{
			        i{ background-position: -200px -50px; }
			    }
			}
		}
	}
}
</style>
