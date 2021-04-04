<template>
    <div class="wenda">
        <!-- 顶部 -->
        <mt-header title="我的问答" fixed>
           <router-link to="/mine" slot="left">
              <mt-button icon="back"></mt-button>
           </router-link>
        </mt-header>
        <!-- 内容 -->
        <div id="wenda">
            <div class="wenda-item">
                <!-- 头像 -->
                <div class="img"><img src="../assets/logo.png" width="50" height="50"></div>
                <!-- 问题 -->
                <div>
                    <p>这里是问题</p>
                    <span>发布于2021-01-01</span>
                </div>
            </div>
            <div class="wenda-item">
                <!-- 头像 -->
                <div class="img"><img src="../assets/logo.png" width="50" height="50"></div>
                <!-- 问题 -->
                <div>
                    <p>这里是问题</p>
                    <span>发布于2021-01-01</span>
                </div>
            </div>
            <div class="wenda-item">
                <!-- 头像 -->
                <div class="img"><img src="../assets/logo.png" width="50" height="50"></div>
                <!-- 问题 -->
                <div>
                    <p>这里是问题</p>
                    <span>发布于2021-01-01</span>
                </div>
            </div>
            <div class="wenda-item">
                <!-- 头像 -->
                <div class="img"><img src="../assets/logo.png" width="50" height="50"></div>
                <!-- 问题 -->
                <div>
                    <p>这里是问题</p>
                    <span>发布于2021-01-01</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.wenda .mint-header{
    background-color: #66b081;
    height: 50px;
}
.wenda #wenda{
    margin-top: 60px;
}
.wenda #wenda .wenda-item{
    height: 100px;
    margin: 15px 15px;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgb(180, 179, 179);
    display: flex;
}
.wenda #wenda .wenda-item .img{
    margin-right: 10px;
}
.wenda #wenda .wenda-item p{
    line-height: 50px;
    font-size: 20px;
}
.wenda #wenda .wenda-item span{
    color: rgb(102, 101, 101);
    margin-left: 160px;
    font-size: 14px;
}
</style>