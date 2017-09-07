<template>
  <div class="page setting-page form-group">
    <HeaderBar title="设置" showBack="true"></HeaderBar>
    <div class="weui-cells weui-cells_form" style="margin-top:0;">
      <div class="weui-cell user-photo">

          <div class="weui-cell__hd"><label class="weui-label" >头像</label></div>
          <div class="weui-cell__bd">
              <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nt51E0q8Zoo.jpg?max_age=2592000" width="50" style="float:right;" />
          </div>
      </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">昵称</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入昵称" value="Clout">
            </div>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">性别</label></div>
            <div class="weui-cell__bd">
              <select class="weui-select" name="select1">
                  <option selected="" value="1">男</option>
                  <option value="2">女</option>
              </select>

            </div>
            <div class="weui-cell__ft"></div>
        </div>

        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">地址</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" placeholder="请输入家庭详细地址">

            </div>
        </div>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">真实姓名</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入真实姓名">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">身份证号</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入身份证号">
            </div>
        </div>
        <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
                <label class="weui-label">手机号</label>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="tel" placeholder="请输入手机号">
            </div>
            <div class="weui-cell__ft">
                <button class="weui-vcode-btn">获取验证码</button>
            </div>
        </div>

        <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="number" placeholder="请输入验证码">
            </div>
        </div>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">修改密码</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入修改密码">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入确认密码">
            </div>
        </div>
    </div>
    <a href="javascript:;" class="weui-btn weui-btn_primary addBtn">保存</a>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

export default {
  name: 'setting',
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
.setting-page{
  padding-top: 0.44rem;
  
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
