<template>
    <div class="mine">
        <div id="top">
            <div id="avatar"><img src="../assets/logo.png" alt="../assets/logo.png"></div>
            <div>
                <p>张三</p>
                <!-- <p>快去登录吧</p> -->
                <p>个人中心</p>
            </div>
        </div>
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
        </div>
    </div>
</template>
<style>
*{box-sizing: border-box}
.mine{
    height: 100vh;
    background:white;
}
.mine #top{
    width: 100%;
    height:200px;
    display: flex;
    background:cadetblue;
    padding-top:90px;
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