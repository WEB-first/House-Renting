<template>
    <div class="info-more-sex">
        <!--顶部 -->
        <mt-header title="设置性别" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right">保存</mt-button>
        </mt-header>
        <!-- 选项 -->
        <div id="sex">
            <mt-cell title="男">
              <span style="color: green">√</span>
            </mt-cell>
            <mt-cell title="女">
              <span style="color: green">√</span>
            </mt-cell>

        </div>
    </div>
</template>
<style>
.info-more-sex .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-more-sex #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-more-sex #sex{
    margin-top: 50px;
}
</style>
<script>
export default{
   data(){
       return {
         
       }
   },
}
</script>