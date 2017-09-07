<template>
  <div class="infor-card-list">
    <p class='weui-media-box__desc desc'>已添加2位联系人，还能添加4位联系人</p>
    <section class="card-item default">
      <aside class="text">
        <div>
          <h2>刘宇</h2>
          <span>
            <b>男</b><b>24岁</b><b>[默认]</b>
          </span>
        </div>
        <span>未认证</span>
      </aside>
      <output class="num">
        <span>1402**********009X</span>
        <span>136****9380</span>
      </output>
    </section>

    <section class="card-item">
      <aside class="text">
        <div>
          <h2>刘宇</h2>
          <span>
            <b>男</b><b>24岁</b>
          </span>
        </div>
        <span>未认证</span>
      </aside>
      <output class="num">
        <span>1402**********009X</span>
        <span>136****9380</span>
      </output>
    </section>

    <section class="card-item">
      <aside class="text">
        <div>
          <h2>刘宇</h2>
          <span>
            <b>男</b><b>24岁</b>
          </span>
        </div>
        <span>未认证</span>
      </aside>
      <output class="num">
        <span>1402**********009X</span>
        <span>136****9380</span>
      </output>
    </section>


  </div>
</template>

<script>
export default {
  name: 'InforCard',
  //props: ["menuJson"],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .infor-card-list{
    .desc{
      line-height:0.3rem;
      text-align:center;
    }
    .card-item{
      background:#fff;
      padding:0.1rem;
      position:relative;
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
      &.default{
        background:#ff4774;
        color:#fff;
      }
      .text{
        display:-webkit-box;
        margin-bottom:0.1rem;
        span{
          font-size:0.12rem;
        }
        div{
          -webkit-box-flex:1;
          h2{
            font-size:0.16rem;
            display:inline;
          }
          span{
            font-size:0.12rem;
            display:inline;
            b{
              font-weight: normal;
              padding:0 0.05rem;
            }
          }
        }
      }
      .num{
        display:-webkit-box;
        margin-bottom:0.1rem;
        -webkit-box-pack: justify;
        span{
          font-size:0.12rem;
          display:block;
        }
      }
    }
  }
</style>
