<template>
    <div class="info-more-phone">
        <!--顶部 -->
        <mt-header title="电话号码" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right">保存</mt-button>
        </mt-header>
        <!-- 修改 -->
        <div id="phone">
            <mt-field label="手机号" placeholder="输入手机号" type="tel" v-model="phone"></mt-field>
        </div>
    </div>
</template>
<style>
.info-more-phone .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-more-phone #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-more-phone #phone{
    margin-top: 50px;
}
.info-more-phone .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
    margin-left: 10px;
}
</style>
<script>
export default{
   data(){
       return {
           phone:""
       }
   },
}
</script>