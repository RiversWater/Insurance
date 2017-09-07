<template>
  <div class="product-detail-card">
    <div class="picture"><img :src="product.cover" /></div>
    <div class="card-infor">
        <div class="detail-wrap">
            <div class="detail-project">
                <h1 class="project-title">{{product.title}}</h1>
                <a href="javascript:;" class="project-logo" target="_blank">
                    <img :src="company.logo" alt="泰康人寿">
                </a>
            </div>
            <div class="detail-num">
                <p class="detail-price">
                  <span class="price"><b class="icon-rmb">¥</b>{{product.price}}</span>
                </p>
                <p class="output-price">
                    已售 <span class="num">{{product.sale_num}}</span>
                </p>
            </div>
            <ul class="infor-list">

                    <li class="hz-detail-condition detail-insurant-age">承保年龄：<span>{{options.min_age}}周岁-{{options.max_age}}周岁</span></li> | <li class="hz-detail-condition detail-insurant-timeLimit">保障期限：<span>{{options.guarantee_period}}</span></li>

            </ul>
        </div>
        <div class="detail-slide-wrap">

            <div class="step">
                <ul >

                    <li v-for="item in product.features"><i class="weui-icon-success"></i>{{item}}&nbsp;</li>

                </ul>
            </div>


            <div class="coupons-info" >右上角分享保险。即可获赠1张满保险优惠券</div>

        </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'detailCard',
  props: [ 'product','company','options' ],
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.product-detail-card{
  .picture{
    width: 100%;
    img{
     width: 100%;
     display: block;
   }
  }
  .card-infor{
    width: 100%;
    .detail-wrap{
      background: #fff;
      padding: 0.2rem 0.1rem;
      box-sizing: border-box;
      .infor-list{
        font-size: 0.12rem;
        color: #999;
        li{
          display: inline-block;
        }
      }
      .output-price{

      }
      .detail-num{
        font-size: .16rem;
        color: #ff4774;
        font-weight: normal;
        overflow: hidden;
        float: none;

        display: -webkit-box;
        -webkit-box-align:center;
        width: 100%;
        overflow: hidden;
        -webkit-box-pack: justify;

        font-size: 0.12rem;
        padding: 0.1rem 0;
        .detail-price{
          font-size: 0.18rem;
        }
        .output-price{
          color: #666;
          .num{
            color: #ff4774;
          }
        }
        b{
          font-size: 0.12rem;
          font-weight: normal;
          margin-right: 0.05rem;
        }
      }
      .detail-project{
        display: -webkit-box;
        -webkit-box-align:center;
        width: 100%;
        .project-title{
          font-size: 0.16rem;
          -webkit-box-flex:1;
        }
        .project-logo{
          display: block;
          width: 0.8rem;
          img{
            display: block;
            width: 100%;
          }
        }
      }
    }
    .detail-slide-wrap{
      ul{
        padding:0 0.1rem;

      }
      .step{
        height: .38rem;
        width: 100%;
        background-color: #fafafa;
        position: relative;
        font-size: 0.12rem;
        line-height: 0.38rem;
        overflow: auto;
        ul{
          display: -webkit-box;
        }
        li{
          display: block;
          color: #666;
          margin-right: 0.1rem;

        }
        .weui-icon-success{
          font-size: 0.14rem;
          vertical-align: middle;
          margin-top: -0.03rem;
          color: #ff4774;
        }
      }
    }
    .coupons-info{
      background: #ffebf0;
      font-size: 0.1rem;
      padding: 0.1rem;
      color: #666;
    }
  }
}
</style>
