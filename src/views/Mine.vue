<template>
    <div class="mine">
        <!-- 顶部 -->
        <mt-header>
            <!-- <router-link > -->
             <mt-button @click="logout" icon="more" slot="right"></mt-button>
            <!-- </router-link> -->
        </mt-header>
        <!-- 上半部分div 。。。头像部分。。 -->
        <div id="top">
            <div id="avatar"><img src="../assets/logo.png" alt="../assets/logo.png"></div>
            <div>
                <p>张三</p>
                <!-- <p>快去登录吧</p> -->
                <p>
                    <router-link to="/info">个人中心</router-link> 
                </p>
            </div>
        </div>
        <!-- 下半部分   。。。。信息页 -->
        <div id="bottom">
            <mt-cell title="关注">
                <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="足迹">
                <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="设置">
                <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="我的问答">
                <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="文章列表">
                <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <!-- <mt-button type="default">退出登录</mt-button> -->
        </div>
        <!-- footer -->
   <my-footer :selected="selected"></my-footer>

    </div>
</template>
<style>
*{box-sizing: border-box}
.mine{
    height: 100vh;
    background:white;
}
.mine .mint-header{
    background-color: #66b081;
    height: 50px;
    box-shadow: 0px 0px 1px 0px rgb(5, 99, 94);
}
.mine #top{
    width: 100%;
    height:200px;
    display: flex;
    background:#66b081;
    padding-top:90px;
    margin-top:-1px;
}
.mine p>a{
    color: white;
}
.mine #avatar{
    height: 80px;
    width: 80px;
    border-radius: 10%;
    box-shadow: 0px 0px 4px 0px rgb(5, 99, 94);
    margin-right: 15px;
    margin-left: 30px;
}
.mine #avatar>img{
    width: 100%;
}
.mine #avatar+div{
    height: 90px;
}
.mine #avatar+div>p{
    font-size:18px;
    color:white;
    margin-top:16px;
}
.mine .mint-cell-wrapper{
    padding: 0px 15px !important;
    background-size: 100% 1px;
}
.mine .mintui {
    font-size: 25px;
}
</style>
<script>
export default {
    name:"Mine",
    data(){
        return{
        }
    },
    methods:{
        logout(){
            this.$router.push("/logout")
        }
    }
}
</script>