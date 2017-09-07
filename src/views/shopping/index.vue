<template>
  <div class="page shopping-page">
    <HeaderBar title="积分商城" showBack="true"></HeaderBar>
    <div>
      <JiFenCard></JiFenCard>

      <div class="shopping-list">
        <h2>热门兑换</h2>
        <div class="shopping-content">
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/7/70/703/703b/703b78f0636343b78bb3d879c1cf8b23.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/7/70/703/703b/703b78f0636343b78bb3d879c1cf8b23.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/7/70/703/703b/703b78f0636343b78bb3d879c1cf8b23.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
        </div>
      </div>


      <div class="shopping-list">
        <h2>积分礼品</h2>
        <div class="shopping-content">
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/7/7d/7d5/7d58/7d58ed3370034b789298174bbba75b20.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/8/8b/8b0/8b02/8b02cbfedbd044beaafa51370ba6d03e.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/c/c6/c6b/c6bb/c6bba8b17cde4eeebd4d40683eded642.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/2/23/234/234e/234e9d9f2daa450a99a55363c8e23036.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/8/8d/8de/8dee/8dee67a1c4c14b6db115d32b9794114e.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
          <dl class="shopping-item">
            <dt><img src="http://images.hzins.com/upload/admin/7/70/703/703b/703b78f0636343b78bb3d879c1cf8b23.jpg" /></dt>
            <dd>
              <span class="name">1000元京东电子礼品卡</span>
              <span class="price">1000积分</span>
            </dd>
          </dl>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

import JiFenCard from './components/JiFenCard'


export default {
  name: 'hello',
  data () {
    return {
      menuJson:[]
    }
  },
  components: {
    HeaderBar,
    JiFenCard
  },
  mounted () {
    let that = this;
    // this.$axios.get('/getMenuList',{})
    // .then(function (response) {
    //   var data = response.data;
    //   console.log(data)
    //   if( data.code == 1 ){
    //     that.menuJson = data.data;
    //   }else{
    //     that.menuJson = [];
    //   }
    // })
    // .catch(function (response) {
    //   console.log(response);
    // });
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopping-page{
  padding-top: 0.44rem;
  .shopping-list{
    background: #fff;
    margin-top: 0.1rem;
    h2{
      line-height: 0.4rem;
      padding: 0 0.1rem;
      color: #ff4774;
      font-size: 0.12rem;
      position: relative;
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
    }
    .shopping-content{
      width: 100%;
      padding: 0.1rem 0;
      overflow: hidden;
      .shopping-item{
        width: 33.3333%;
        float: left;
        dt{
          width: 100%;
          padding: 0 0.1rem;
          box-sizing: border-box;
          img{
            display: block;
            width: 100%;
          }
        }
        dd{
          font-size: 0.12rem;
          padding: 0 0.1rem;
          .name{
             text-overflow:ellipsis; white-space:nowrap; overflow:hidden;
             width: 100%;
             display: block;
             color: #666;
          }
          .price{
            color: #ff4774;
          }
        }
      }
    }
  }
}
</style>
