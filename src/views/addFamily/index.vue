<template>
  <div class="page setting-page form-group">
    <HeaderBar title="添加投保人信息" showBack="true"></HeaderBar>
    <div class="weui-cells weui-cells_form" style="margin-top:0;">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">姓名:</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入真实姓名" value="">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">身份证号</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入身份证号">
            </div>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">性别:</label></div>
            <div class="weui-cell__bd">
              <select class="weui-select" name="select1">
                  <option selected="" value="1">男</option>
                  <option value="2">女</option>
              </select>

            </div>
            <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">年龄:</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" placeholder="请输入真实年龄">

            </div>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">手机号:</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" placeholder="用于接受投保成功短信">

            </div>
        </div>
    </div>

    <div class="weui-cells weui-cells_checkbox">
            <label class="weui-cell weui-check__label" for="s11">
                
                <div class="weui-cell__bd">
                    <p>设为默认</p>
                </div>
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox1" id="s11"/>
                    <i class="weui-icon-checked"></i>
                </div>
            </label>
            
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
  input{
    text-align:right;
  }
.addBtn{
  width: 100%;
  background: #ff4774;
  border-radius: 0;
  position: fixed;
  bottom: 0;
  font-size: 0.12rem;
  padding: 0.08rem;
  box-shadow: none;
}
}
</style>
