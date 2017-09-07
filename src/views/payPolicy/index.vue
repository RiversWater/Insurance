<template>
  <div class="page pay-page form-group">
    <HeaderBar title="确认下单" showBack="true"></HeaderBar>
    <div class="weui-cells weui-cells_form" >
      <div class="weui-panel weui-panel_access infor-card">
          <div class="weui-panel__bd weui-panel__ft ">
              <div class="weui-media-box weui-media-box_text weui-cell weui-cell_access">
                  <div  class="weui-cell__bd">
                    <h4 class="weui-media-box__title">安心防癌保险<output><b>¥</b>200.00</output></h4>

                    <p class="weui-media-box__desc">被保险人：刘宇</p>
                    <p class="weui-media-box__desc">份数：1份</p>
                  </div>
                  <span class="weui-cell__ft"></span>
              </div>
          </div>
          <div class="weui-cell weui-cell_access">
              <div class="weui-cell__hd"><label class="weui-label">保单形式</label></div>
              <div class="weui-cell__bd text">电子保单</div>
          </div>
          <div class="weui-cell weui-cell_access">
              <div class="weui-cell__bd text">共1份保单 共计：<output>¥200.00</output></div>
          </div>
      </div>

      <!-- <div class="weui-form-preview">
          <div class="weui-form-preview__hd">
              <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label" style="font-size:0.16rem;color:#000">安心防癌保险</label>
                  <em class="weui-form-preview__value" style="font-size:0.14rem;color:#ff4774">¥2400.00</em>
              </div>
          </div>
          <div class="weui-form-preview__bd">
              <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">被保险人</label>
                  <span class="weui-form-preview__value">刘宇</span>
              </div>
              <div class="weui-form-preview__item">
                  <label class="weui-form-preview__label">份数</label>
                  <span class="weui-form-preview__value">1份</span>
              </div>
          </div>

          <div class="weui-cell weui-cell_access">
              <div class="weui-cell__hd"><label class="weui-label">保单形式</label></div>
              <div class="weui-cell__bd">电子保单</div>
          </div>
      </div> -->

    </div>
    <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;" @click="showLayui('ssss','癌症保险金')" >
            <div class="weui-cell__bd">
                <p>使用优惠卷</p>
            </div>
            <div class="weui-cell__ft">0张可用</div>
        </a>

    </div>

    <div class="bottom-nav">
      <output><b>¥</b>200.00</output>
      <router-link to="policyInfor" class="btn">提交订单</router-link>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

export default {
  name: 'payPolicy',
  data () {
    return {
      menuJson:[]
    }
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
.pay-page{
  padding-top: 0.44rem;
  .infor-card{
    .weui-media-box__title output{
      float: right;
      color: #ff4774;
      b{
        font-size: 0.12rem;
        margin-right: 0.05rem;
        font-weight: normal;
      }
    }
    .weui-cell__ft{
      margin-top: 0.4rem;
    }
    .weui-cell__bd.text{
      text-align: right;
      color: #666;
      output{
        color: #ff4774;
      }
    }
  }

  .bottom-nav{
    height: 0.5rem;
    line-height: 0.5rem;
    display: -webkit-box;
    background: #333;
    width: 100%;
    position: fixed;
    bottom: 0;
    output{
      display: block;
      -webkit-box-flex:1;
      color: #fff;
      padding-left: 0.1rem;
      text-align: left;
      background: #333;
      font-size: 0.24rem;
      b{
        font-size: 0.12rem;
        margin-right: 0.05rem;
        font-weight: normal;
      }
    }
    a{
      display: block;
      padding: 0 0.4rem;
      background: #ff4774;
      color: #fff;
      font-size: 0.14rem;
    }
  }
.addBtn{
  width: 100%;
  background: #ff4774;
  border-radius: 0;
  position: fixed;
  bottom: 0;
  font-size: 0.12rem;
  padding: 0.08rem;
  box-shadow: 1px 1px 15px #ff6087;
}
}
</style>
