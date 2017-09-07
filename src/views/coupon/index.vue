<template>
  <div class="page coupon-page">
    <HeaderBar title="优惠券" showBack="true"></HeaderBar>
    <div class="coupon-list">
      <div class="coupon-item">
        <div class="left-num">
          <span><b>¥</b>100</span>
        </div>
        <div class="right-msg">
          <h2>幸运保优惠卷</h2>
          <aside>
            <p>有效日期至2018年5月27日</p>
            <p>说明：有效期内使用于幸运保平台所有产品</p>
          </aside>
        </div>
      </div>

      <div class="coupon-item">
        <div class="left-num">
          <span><b>¥</b>100</span>
        </div>
        <div class="right-msg">
          <h2>幸运保优惠卷</h2>
          <aside>
            <p>有效日期至2018年5月27日</p>
            <p>说明：有效期内使用于幸运保平台所有产品</p>
          </aside>
        </div>
      </div>

      <div class="coupon-item old-item">
        <div class="left-num">
          <span><b>¥</b>100</span>
        </div>
        <div class="right-msg">
          <h2>幸运保优惠卷</h2>
          <aside>
            <p>有效日期至2018年5月27日</p>
            <p>说明：有效期内使用于幸运保平台所有产品</p>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

export default {
  name: 'coupon',
  data () {
    return {}
  },
  components: {
    HeaderBar
  },
  created () {
    let that = this;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.coupon-page{
  padding-top: 0.44rem;
  .coupon-list{
    padding: 0.1rem;
    .coupon-item{
      background: #fff;
      border-radius: 0.05rem;
      margin-bottom: 0.2rem;
      display: -webkit-box;
      -webkit-box-align:center;
      -webkit-box-pack:center;
      overflow: hidden;
      height: 1rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      .left-num{
        width: 1rem;
        color: #ff4774;
        text-align: center;
        height: 100%;
        line-height: 1rem;
        position: relative;
        &:after{
          content: "";
          width: 1px;
          display: block;
          height: 130%;
          -webkit-transform:scale(0.5);
          position: absolute;
          right: 0;
          top: 0;
          margin-top: -15%;
          background: #eee;
        }
        span{
          font-size: 0.3rem;
          b{
            font-size: 0.14rem;
          }
        }
      }
      .right-msg{
        padding: 0 0.1rem;
        -webkit-box-flex:1;
        h2{
          font-size: 0.16rem;
          color: #666;
          line-height: 0.4rem;
        }
        p{
          font-size: 0.12rem;
          color: #ccc;
        }
      }
      &.old-item{
        background: #e0e0e0;
        .left-num{
          color: #666;
        }
      }
    }
  }
}
</style>
