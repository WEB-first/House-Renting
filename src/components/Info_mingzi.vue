<template>
    <div class="info-mingzi">
        <!--顶部 -->
        <mt-header title="修改名字" fixed>
          <router-link to="/info" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right">保存</mt-button>
        </mt-header>
        <!-- 修改 -->
        <div id="mingzi">
            <mt-field label="新昵称" placeholder="输入新昵称" type="text" v-model="name"></mt-field>
        </div>
    </div>
</template>
<style>
.info-mingzi .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-mingzi #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-mingzi #mingzi{
    margin-top: 50px;
}
.info-mingzi .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
    margin-left: 10px;
}
</style>
<script>
export default{
   data(){
       return {
           name:""
       }
   },
}
</script>
