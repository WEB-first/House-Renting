<template>
    <div class="info-uname">
        <!--顶部 -->
        <mt-header title="账号信息" fixed>
          <router-link to="/info" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <!-- <mt-button id="btn-save" slot="right">保存</mt-button> -->
        </mt-header>
        <!-- 修改 -->
        <div id="uname">
            <h3>账号不支持修改哦~</h3>
        </div>
    </div>
</template>
<style>
.info-uname .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-uname #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-uname #uname{
    margin-top: 50px;
}
/* .info-mingzi .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
    margin-left: 10px;
} */
</style>
<script>
export default{
   data(){
       return {
          
       }
   },
}
</script>
