<template>
    <div class="info-updatepwd">
        <!-- 顶部 -->
        <mt-header title="修改密码" fixed>
          <router-link to="/info" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right">保存</mt-button>
        </mt-header>
        <!-- 修改密码 -->
        <div id="updatepwd">
            <mt-field label="旧密码" state="success" v-model="pwd"></mt-field>
            <mt-field label="新密码" state="error" v-model="pwd"></mt-field>
            <mt-field label="确认密码" state="warning" v-model="pwd"></mt-field>
            <router-link to="/info_updatepwd_forgetpwd">
                <mt-button id="btn-forget" type="danger" size="large" plain>忘记密码？</mt-button>
            </router-link>
            
        </div>
    </div>
</template>
<style>
.info-updatepwd .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-updatepwd #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-updatepwd #updatepwd{
    margin-top: 50px;
    padding:0px 10px;
}
.info-updatepwd .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
}
.info-updatepwd #btn-forget{
    margin-top:60px;
}
.info-updatepwd .mint-button--danger.is-plain {
    border: 1px solid #86998c;
    color:#86998c;
}
</style>
<script>
export default{
   data(){
       return {
           pwd:"",
           state:""
       }
   },
}
</script>
