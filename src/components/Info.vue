<template>
    <div class="info">
        <!-- 顶部 -->
        <mt-header title="个人中心" fixed>
           <router-link to="/mine" slot="left">
              <mt-button icon="back"></mt-button>
           </router-link>
        </mt-header>
        <!-- 个人信息 -->
        <div id="info">
            <mt-cell title="头像" is-link id="cell">
                <img src="../assets/logo.png" width="60" height="60">
            </mt-cell>
            <mt-cell title="名字" to="/info_mingzi" is-link >
                <span>这里是名字</span>
            </mt-cell>
            <mt-cell title="账号" to="/info_uname" is-link >
                <span>这里是账号</span>
            </mt-cell>
            <mt-cell title="更多" to="/info_more" is-link value="更多信息"></mt-cell>
            <mt-cell title="安全" to="/info_updatepwd" is-link>
                <span style="color: green">修改密码</span>
            </mt-cell>
        </div>

    </div>
</template>
<style>
.info .mint-header{
        background-color: #66b081;
        height: 50px;
}
.info #info{
    margin-top: 60px;
    padding-left: 15px;
}
.info #cell .mint-cell-wrapper{
    background-image: linear-gradient(180deg,#d9d9d9,#d9d9d9 0%,transparent 0);
}
</style>
<script>
// import { defineComponent } from '@vue/composition-api'
export default{
    name:"Info",  
}
</script>
