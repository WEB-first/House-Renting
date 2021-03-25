<template>
    <div class="mine">
<<<<<<< HEAD
=======
        <!-- 顶部 -->
        <mt-header>
             <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 上半部分div 。。。头像部分。。 -->
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
        <div id="top">
            <div id="avatar"><img src="../assets/logo.png" alt="../assets/logo.png"></div>
            <div>
                <p>张三</p>
                <!-- <p>快去登录吧</p> -->
<<<<<<< HEAD
                <p>个人中心</p>
            </div>
        </div>
=======
                <p>
                    <router-link to="/info">个人中心</router-link> 
                </p>
            </div>
        </div>
        <!-- 下半部分   。。。。信息页 -->
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
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
<<<<<<< HEAD
=======
            <!-- <mt-button type="default">退出登录</mt-button> -->
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
        </div>
    </div>
</template>
<style>
*{box-sizing: border-box}
.mine{
    height: 100vh;
    background:white;
}
<<<<<<< HEAD
=======
.mine .mint-header{
    background-color: #66b081;
    height: 50px;
    box-shadow: 0px 0px 1px 0px rgb(5, 99, 94);
}
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
.mine #top{
    width: 100%;
    height:200px;
    display: flex;
<<<<<<< HEAD
    background:cadetblue;
    padding-top:90px;
=======
    background:#66b081;
    padding-top:90px;
    margin-top:-1px;
}
.mine p>a{
    color: white;
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
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
<<<<<<< HEAD
=======
.mine .mintui {
    font-size: 25px;
}
>>>>>>> 2f9c7d1091849bf20e821398cc416d549fee8a00
</style>
<script>
export default {
    name:"Mine",
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>