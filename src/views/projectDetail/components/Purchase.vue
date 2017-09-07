<template>
  <div class="purchase-box" style="display:none;">
    <div class="purchase-content">
      <div class="detail-project">
          <h1 class="project-title">{{product.title}}</h1>
          <a href="javascript:;" class="project-logo" target="_blank">
              <img :src="company.logo" alt="泰康人寿">
          </a>
      </div>

      <div class="weui-cells">
          <a class='weui-cell' href='javascript:;'  v-for='item in genes'>
              <div class="weui-cell__hd">
                  <p>{{item.label}}：</p>
              </div>
              <div class="weui-cell__bd">
                <div v-if="item.type == 'list'">
                  <div v-if="JSON.parse(item.options).list">
                    <label class="label" v-for="item2 in JSON.parse(item.options).list"><input type="radio" :name="item.gene_key" checked /><span>{{item2.label}}</span></label>
                  </div>
                  <div v-else>
                    <Picker  :name="item.gene_key" :step="JSON.parse(item.options)"></Picker>
                  </div>
                  <!-- <label class="label"><input type="radio" name="name" /><span>黄金版</span></label>
                  <label class="label"><input type="radio" name="name" /><span>至尊版</span></label> -->
                </div>
                <div v-else-if="item.type == 'fixed'">
                  {{item.value}}
                  <input type="hidden" :name="item.gene_key" :value="item.value" />
                </div>
                <div v-else-if="item.type == 'date'">
                  <DatePicker :name="item.gene_key" :values="item.value"></DatePicker>
                </div>

              </div>
          </a>


          <!-- <a class="weui-cell" href="javascript:;">
              <div class="weui-cell__hd">
                  <p>保险计划：</p>
              </div>
              <div class="weui-cell__bd">
                <label class="label"><input type="radio" name="name" checked /><span>白金版</span></label>
                <label class="label"><input type="radio" name="name" /><span>黄金版</span></label>
                <label class="label"><input type="radio" name="name" /><span>至尊版</span></label>
              </div>
          </a>
          <a class="weui-cell" href="javascript:;">
              <div class="weui-cell__hd">
                  <p>承保年龄：</p>
              </div>
              <div class="weui-cell__bd">
                <label class="label"><input type="radio" name="age" /><span>1-17周岁</span></label>
                <label class="label"><input type="radio" name="age" checked /><span>18-80周岁</span></label>
              </div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
              <div class="weui-cell__hd">
                  <p>承保职业：</p>
              </div>
              <div class="weui-cell__bd">不限职业</div>
          </a>
          <a class="weui-cell" href="javascript:;">
              <div class="weui-cell__hd">
                  <p>保障期限：</p>
              </div>
              <div class="weui-cell__bd">
                <label class="label"><input type="radio" name="day" /><span>10天</span></label>
                <label class="label"><input type="radio" name="day" /><span>15天</span></label>
                <label class="label"><input type="radio" name="day" /><span>20天</span></label>
                <label class="label"><input type="radio" name="day" /><span>10天</span></label>
                <label class="label"><input type="radio" name="day" /><span>15天</span></label>
                <label class="label"><input type="radio" name="day" /><span>20天</span></label>
                <label class="label"><input type="radio" name="day" checked /><span>10天</span></label>
                <label class="label"><input type="radio" name="day" /><span>15天</span></label>
                <label class="label"><input type="radio" name="day" /><span>20天</span></label>
              </div>
          </a>
          <a class="weui-cell" href="javascript:;">
              <div class="weui-cell__hd">
                  <p>购买份数：</p>
              </div>
              <div class="weui-cell__bd">
                1份
              </div>
          </a> -->

      </div>
      <div class="bottom-nav">
        <output>价格：¥{{product.price}}</output>
        <a href="javascript:;" class="btn" @click="submitFn">立即投保</a>
      </div>
    </div>

    <div id="layerContent" >
      <img src="../../../static/images/layerBanner.jpg" />
      <p class="ti">您所在的行业是什么?</p>
      <aside>
        <a href="javascript:;" @click="haha">是啥</a>  
      </aside>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import Picker from '@/components/Picker'
import DatePicker from '@/components/DatePicker'

import $ from "zepto"


export default {
  name: 'Purchase',
  props: ['genes','product','company'],
  data () {
    return {
      layerContent: ''
    }
  },
  components: {
    Checkbox,
    Picker,
    DatePicker
  },
  mounted () {
    this.addEvent();
    this.layerContent = $("#layerContent");
  },
  methods: {
    addEvent () {
      this.$el.addEventListener("touchmove",function(e){
        e.preventDefault();
        return false;
      },false)
      $( this.$el ).find(".purchase-content").tap(function(e){
        e.stopPropagation();

      })
      $( this.$el ).tap(function(){
        $(".purchase-box").css({
          opacity: 1
        }).animate({
          "opacity": 0
        },"ease",200,function(){
          $(this).hide();
        });
        $(".purchase-content").css({
          "transform": "translateY(0)"
        }).animate({
          "translateY": "100%"
        },"ease-out",200);
      })
    },

    submitFn () {
      
      if( this.product.need_health == 1 ){

        this.$store.dispatch('products/GetHealthState',{
          product_id: this.product.product_id
        }).then(function( response ){
          console.log( response )
        });
        
        let layerContent = this.layerContent;
        this.$mLayer.open({
          content: layerContent,
          shadow: true,
          type: 1
        })
      }else{
        this.$router.push("/policyInfor")
      }
    },

    haha () {
      alert("a")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#layerContent{
  display: none;
}
.purchase-box{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0,0,0,0.5);
  .label{
    display: inline-block;
    overflow: hidden;
    margin: 0 2px;
    input{
      display: none;
      &:checked + span{
        background: #ff4774;
        color: #fff;
        border-color: #ff4774;
      }
    }
    span{
      padding: 0.05rem 0.1rem;
      border-radius: 0.03rem;
      border: 1px solid #eee;
      display: block;
    }
  }
  .purchase-content{
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;

    max-height: 500px;
    overflow: auto;
    .bottom-nav{
      height: 0.5rem;
      line-height: 0.5rem;
      display: -webkit-box;
      background: #fff;
      width: 100%;
      position: sticky;
      bottom: 0;
      output{
        display: block;
        -webkit-box-flex:1;
        color: #ff4774;
        padding-left: 0.1rem;
        text-align: left;
        background: #fff;
      }
      a{
        display: block;
        padding: 0 0.4rem;
        background: #ff4774;
        color: #fff;
        font-size: 0.14rem;
      }
    }
  }
  .detail-project{
    display: -webkit-box;
    -webkit-box-align:center;
    width: 100%;
    padding: 0.1rem;
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
  .weui-cells{
    margin-top: 0;
    font-size: 0.12rem;
    .weui-cell{
      padding-left: 0.1rem;
      color: #666;
      padding: 0.15rem 0.1rem;
    }
    .weui-cell__hd{
      width: 0.6rem;
      p{ color: #000;}
    }
    .detail-read-more{
      color: #999;
      font-size: 0.12rem;
      a{
        color: #1d50a2;
      }
    }
  }
}
</style>
