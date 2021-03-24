<template>
    <div class="info-more">
        <div id="info-more">
            <!--顶部 -->
            <mt-header title="更多信息" fixed>
                <router-link to="/info" slot="left">
                   <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
            <!-- 其他信息 -->
            <mt-cell title="性别" to="/info_more_sex" is-link >
                <span>这里是性别</span>
            </mt-cell>
            <mt-cell title="生日">
                <span>这里是身份证截取的生日</span>
            </mt-cell>
            <mt-cell title="联系方式" to="/info_more_phone" is-link >
                <span>这里是电话</span>
            </mt-cell>
            <mt-cell title="地址" to="/info_more_add" is-link >
                <span>这里是地址</span>
            </mt-cell>
            <mt-cell title="邮箱" to="/info_more_email" is-link >
                <span>这里是邮箱</span>
            </mt-cell>
        </div>
    </div>
</template>
<style>
.info-more .mint-header{
        background-color: #66b081;
        height: 50px;
}
.info-more #info-more{
    margin-top: 50px;
    padding-left: 15px;
}
</style>