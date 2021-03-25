<template>
    <div class="info-updatepwd-forgetpwd">
        <!-- 顶部 -->
        <mt-header title="忘记密码" fixed>
          <router-link to="/info" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <!-- <mt-button id="btn-save" slot="right">保存</mt-button> -->
        </mt-header>
        <!-- 修改密码 -->
        <div id="forgetpwd">
           <h3>功能暂未开放 请联系管理员</h3>
            
        </div>
    </div>
</template>
<style>
.info-updatepwd-forgetpwd .mint-header{
        background-color: #86998c;
        height: 50px;
}
/* .info-updatepwd-forgetpwd #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
} */
.info-updatepwd-forgetpwd #forgetpwd{
    margin-top: 50px;
    padding:0px 10px;
}
</style>
