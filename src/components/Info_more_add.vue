<template>
    <div class="info-more-add">
        <!--顶部 -->
        <mt-header title="修改地址" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right">保存</mt-button>
        </mt-header>
        <!-- 修改 -->
        <div id="add">
            <mt-field label="地址" placeholder="输入新地址" type="text" v-model="add"></mt-field>
            <!-- <mt-field></mt-field> -->
        </div>
    </div>
</template>
<style>
.info-more-add .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-more-add #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-more-add #add{
    margin-top: 50px;
}
.info-more-add .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
    margin-left: 10px;
}
</style>
<script>
export default{
   data(){
       return {
           add:""
       }
   },
}
</script>