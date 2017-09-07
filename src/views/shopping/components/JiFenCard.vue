<template>
  <div class="ji-fen-card">
    <a href="#">
      <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nt51E0q8Zoo.jpg?max_age=2592000">
      <output>
        <label>100积分</label>
      </output>
      <div class="btn-group">
        <button class="btn">获取积分</button>
        <button class="btn">兑换记录</button>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'jifencard',
  data () {
    return {
    }
  },
  mounted () {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ji-fen-card{
  background: #ff4774;
  & > a {
      padding: 0.4rem;
      overflow: hidden;
      display: block;
      padding-bottom: 0.2rem;
      img {
          width: 0.6rem;
          display: block;
          border-radius: 100%;
          margin: 0 auto;
      }
      output {
          display: block;
          text-align: center;
          margin-top: 0.2rem;
          label{
            font-size: 0.12rem;
            color: #fff;
            display: block;
          }
      }
      .btn-group{
        text-align: center;
        margin-top: 0.2rem;
        .btn{
          display: inline-block;
          background: #fff;
          border-radius: 0.03rem;
          border: 0;
          padding: 0.08rem 0.25rem;
          color: #ff4774;
          font-size: 0.12rem;
          margin: 0 0.1rem;
        }
      }
  }

}
</style>
