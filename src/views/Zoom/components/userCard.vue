<template>
  <div class="UserCard">
    <div >
      <a href="#">
        <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nt51E0q8Zoo.jpg?max_age=2592000">
        <output>
          <label>幸运保</label>
          <span class="userPhoto">136*****380</span>
        </output>
      </a>
			<canvas id="wave" width="750" height="240" style="width: 100%;height: 120px;"></canvas>
    </div>
  </div>
</template>

<script>
import {SiriWave} from '@/static/js/sirWave.js'


export default {
  name: 'UserCard',
  data () {
    return {}
  },
  mounted () {
    var SW = new SiriWave({
				container: "#wave"
		});
		SW.setSpeed(0.01);
		SW.start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .UserCard{
    padding-top: 40%;
    position: relative;
    background: #ff4774;
    background-size: cover;
    background-position: center center;
    & > div > a {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 0.4rem;
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
            .userPhoto {
                display: block;
                font-size: 0.14rem;
                color: #fff;
            }
            label{
              font-size: 0.12rem;
              color: #fff;
            }
        }
    }
    canvas{
      display: block;
    }
  }
</style>
