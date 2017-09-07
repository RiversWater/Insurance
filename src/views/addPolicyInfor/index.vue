<template>
  <div class="page setting-page form-group">
    <HeaderBar title="保单填写" showBack="true"></HeaderBar>
    <div class="weui-cells weui-cells_form" >

        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">为谁投保</label></div>
            <div class="weui-cell__bd">
              <select class="weui-select" name="select1">
                  <option selected="" value="1">本人</option>
                  <option value="2">丈夫</option>
                  <option value="2">妻子</option>
                  <option value="2">父亲</option>
                  <option value="2">母亲</option>
                  <option value="2">儿子</option>
                  <option value="2">女儿</option>
              </select>

            </div>
            <div class="weui-cell__ft"></div>
        </div>

        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">起保日期</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="date" placeholder="请选择">
            </div>
            <div class="weui-cell__ft"></div>
        </div>
    </div>

    <div class="weui-cells__title">投保人信息</div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">真实姓名</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入真实姓名">
            </div>
        </div>
        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">证件类型</label></div>
            <div class="weui-cell__bd">
              <select class="weui-select" name="select1">
                  <option selected="" value="1">身份证</option>
                  <option value="2">护照</option>
                  <option value="2">港澳通行证</option>
                  <option value="2">军官证</option>
                  <option value="2">台胞证</option>
              </select>

            </div>
            <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">证件号</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入证件号">
            </div>
        </div>
        <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
                <label class="weui-label">手机号</label>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="tel" placeholder="请输入手机号">
            </div>
        </div>

        <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd"><label class="weui-label">电子邮箱</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="number" placeholder="请输入邮箱号">
            </div>
        </div>

        <div class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><label class="weui-label">职业</label></div>
            <div class="weui-cell__bd">
              <select class="weui-select" name="select1">
                  <option selected="" value="1">身份证</option>
                  <option value="2">护照</option>
                  <option value="2">港澳通行证</option>
                  <option value="2">军官证</option>
                  <option value="2">台胞证</option>
              </select>

            </div>
            <div class="weui-cell__ft"></div>
        </div>
    </div>

    <div class="weui-cells__title">紧急联系人</div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入紧急联系人姓名">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">手机号</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请输入紧急联系人手机号">
            </div>
        </div>
    </div>

    <div class="bottom-nav">
      <output>价格：¥200.00</output>
      <router-link to="payPolicy" class="btn">立即提交</router-link>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'

export default {
  name: 'policyInfor',
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
  .weui-label{
    color: #666;
  }
  .weui-cell__bd{

    input,select{
      text-align: right;
       direction: rtl;
       padding-right: 20px;
       &[type^=date]{
         display: block;
         height: 30px;
         line-height: 30px;
         padding: 0;
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
