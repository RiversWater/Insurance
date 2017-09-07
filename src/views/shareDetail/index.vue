<template>
  <div class="page share-detail-page">
    <HeaderBar title="保险课堂" showBack="true"></HeaderBar>

    <div class="page article js_show">
        <div class="page__hd">
            <h1 class="page__title">{{title}}</h1>
            <p class="page__desc">文章</p>
        </div>
        <div class="page__bd">
            <article class="weui-article">
                <h1>大标题</h1>
                <section>
                    <h2 class="title">章标题</h2>
                    <section>
                        <h3>1.1 节标题</h3>
                        <iframe
                          ng-if="videoWidth > 0"
                          class="video_iframe"
                          allowfullscreen=""
                          frameborder="0"
                          :height="videoHeight"
                          :width="videoWidth"
                          data-vidtype="2"
                          :src="'https://v.qq.com/iframe/player.html?vid=u05179e7rrq&amp;width='+videoWidth+'&amp;height='+videoHeight+'&amp;auto=0'"
                          scrolling="no"
                        ></iframe>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </section>
                    <section>
                        <h3>1.2 节标题</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>
                </section>
            </article>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
export default {
  name: 'shareDetail',
  data () {
    return {
      title:"",
      videoHeight: 0,
      videoWidth: 0
    }
  },
  components: {
    HeaderBar
  },
  methods: {
  },
  mounted () {
    this.title = this.$route.params.title;
    this.videoWidth = $( this.$el ).width()-40;
    this.videoHeight = this.videoWidth/345*195;

    let that = this;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.share-detail-page{
  
}
</style>
