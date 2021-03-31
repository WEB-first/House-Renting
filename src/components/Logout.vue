<template>
    <div class="logout">
        <!-- 顶部 -->
        <mt-header title="忘记密码" fixed>
          <router-link to="/mine" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <!-- 头像 -->
        <div id="avatar">
            <img src="../assets/logo.png" alt="" width="100" height="100">
            <p>用户名</p>
            <mt-button id="btn-logout" size="large" plain @click="toLogout">退出此账号</mt-button>
        </div>
    </div>
</template>
<style>
.logout .mint-header{
        background-color: #66b081;
        height: 50px;
}
.logout #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.logout #avatar{
    margin-top: 100px;
    text-align: center;
    padding: 0 10px;
}
.logout #btn-logout{
    margin-top:60px;
}
</style>
<script>
export default {
    name:"Logout",
    data(){
        return{
        }
    },
    methods:{
        toLogout(){
            console.log( 11)
            let ss=window.sessionStorage
            ss.setItem('isLogin',0)
            this.$store.commit('loginSuccess','')
            this.$store.state.isLogin=false
            ss.setItem('userInfo','')
            this.$router.push("/")
            console.log(this.$store.state.isLogin)
            console.log(this.$store.state.userInfo.uname)

        }
    }
}
</script>