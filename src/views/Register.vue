<template>
    <div class="register">
        <!-- 顶部 -->
        <mt-header fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <router-link to="/login" slot="right">
            <mt-button>登录</mt-button>
          </router-link>
        </mt-header>
        <!-- 下方 -->
        <div id="register">
            <p>新用户注册</p>
            <mt-field id="uname" label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="昵称" placeholder="为自己设置一个昵称吧" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-modal="password"></mt-field>
            <mt-field label="确认密码" placeholder="再次输入密码" type="password" v-modal="password"></mt-field>
            <mt-field label="手机号" placeholder="输入手机号" type="tel" v-model="phone"></mt-field>
            <!-- <mt-field label="身份证" placeholder="请输入身份证号码" type="testarea" v-model="number"></mt-field> -->
            <mt-field label="邮箱" placeholder="请输入邮箱" v-model="email"></mt-field>
            <!-- <mt-popup
              v-model="popupVisible"
              position="bottom">
              <mt-field label="身份证" placeholder="请输入身份证号码" type="testarea" v-model="number"></mt-field>
            </mt-popup> -->

            
        </div>
        <mt-button id="btn-login" type="danger" size="large" disabled>注册</mt-button>
    </div>
</template>
<style>
.register .mint-header{
    background-color: #fff;
    height: 50px;
    font-size: 16px;
    color: black;
}
.register #register{
    margin-top: 50px;
    padding-left: 10px;
}
.register #register p{
    font-size: 35px;
    margin-left: 10px;
}
.register #uname{
    margin-top: 10px;
}
.register .mint-cell-wrapper{
    background-size: 120% 0px;
}
.register .mint-button--danger{
    height: 50px;
    background-color:#66b081 !important ;
    width: 340px;
    border-radius: 40px;
    margin: 50px auto;
}
</style>