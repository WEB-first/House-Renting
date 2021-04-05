<template>
    <div class="info-more-email">
        <!--顶部 -->
        <mt-header title="修改邮箱" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right">保存</mt-button>
        </mt-header>
        <!-- 修改 -->
        <div id="email">
            <mt-field label="邮箱" placeholder="输入邮箱" type="e-mail" v-model="email"></mt-field>
        </div>
    </div>
</template>
<style>
.info-more-email .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-more-email #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-more-email #email{
    margin-top: 50px;
}
.info-more-email .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
    margin-left: 10px;
}
</style>
<script>
export default{
   data(){
       return {
           email:""
       }
   },
}
</script>
