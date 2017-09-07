<template>
  <div class="page login-page">
    <HeaderBar title="登录" showBack="true"  v-Title data-title="登录"></HeaderBar>
    <div>
      <div class="input-row">
    		<i class="g-icon icon-user"></i>
    		<div class="inner">
    			<input type="number" id="loginId" name="mobile" v-model="userPhone" placeholder="手机号">
    		</div>
    	</div>
      <div class="input-row" style="margin-top:10px;">
    		<i class="g-icon icon-captcha"></i>
    		<div class="inner">
    			<input type="text" id="captcha" name="captcha" v-model="userCode" class="input-captcha" placeholder="验证码" autocomplete="off">
    			<a href="javascript:;" class="valid-code-btn" v-show="!codeSendFlg" @click="sendCode">发送验证码</a>
          <a href="javascript:;" class="valid-code-btn" v-show="codeSendFlg" >{{timeNum}}秒后重新获取</a>
    		</div>
    	</div>
      <a  href="javascript:;" class="loginBtn" @click="LoginDo">登录</a>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
export default {
  name: 'LoginPage',
  data () {
    return {
      userPhone: '',
      userCode: '',
      codeSendFlg: false,
      time: '',
      timeNum: 30
    }
  },
  components: {
    HeaderBar
  },
  methods: {

    setUserInfor ( userInfor ){
      this.$store.dispatch('user/setUserInfor',userInfor)
    },
    LoginDo () {
      console.log( {
        userPhone: this.userPhone,
        userCode: this.userCode
      } )
      if( this.userPhone == '' ){
        alert( "请输入手机号码" )
      }else{
        this.setUserInfor( {
          userPhone: this.userPhone,
          userCode: this.userCode
        } )
      }
    },

    sendCode () {
      let that = this;
      this.timeNum = 30;
      this.codeSendFlg = true;

      this.time = setInterval(function(){
        that.timeNum -= 1;
        if( that.timeNum <= 0 ){
          that.codeSendFlg = false;
          clearInterval( that.time )
        }
      },1000)
    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login-page{
  
  .loginBtn{
    background: #ff4774;
    border: 0;
    height: 0.44rem;
    margin: 0.1rem;
    border-radius: 0.3rem;
    color: #fff;
    box-shadow: 1px 1px 15px #ff6087;
    display: block;
    text-align: center;
    font-size: 0.12rem;
    line-height: 0.44rem;
    margin-top: 0.4rem;
    margin-right: 0.1rem;
  }
  .input-row{
    width: 100%;
    border-top: 1px solid #eee;
    box-shadow: 0 1px 3px #eee;
    position: relative;
    background-color: #fff;
    margin-top: 0.25rem;
    .g-icon{
      width: 16px;
      height: 19px;
      top: 16px;
      position: absolute;
      display: block;
      left: 15px;
      background-size: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      &.icon-user{
            background-image: url(../../static/images/icons/icon-user.png);
      }
      &.icon-captcha{
            background-image: url(../../static/images/icons/icon-captcha.png);
      }
    }
    .inner{
        padding-left: 0.4rem;
        display: -webkit-box;

        input{
          display: block;
          line-height: 0.3rem;
          font-size: 0.14rem;
          -webkit-box-flex:1;
          padding: 0.1rem;
          outline: none;
          -webkit-appearance: none;
          border:0;

        }
        .valid-code-btn{
          background: #ff4774;
          border: 0;
          height: 0.4rem;
          width: 1rem;
          border-radius: 0.03rem;
          color: #fff;
          display: block;
          text-align: center;
          font-size: 0.12rem;
          line-height: 0.4rem;
          margin-top: 0.07rem;
          margin-right: 0.07rem;
        }
    }
  }
}
</style>
