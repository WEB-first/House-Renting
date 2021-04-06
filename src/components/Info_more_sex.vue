<template>
    <div class="info-more-sex">
        <!--顶部 -->
        <mt-header title="设置性别" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right" :disabled="disable" @click="updateSex">保存</mt-button>
        </mt-header>
        <!-- 选项 -->
        <div id="sex">
            <mt-cell title="男">
              <input type="radio" name="sex" id="women" value="1" v-model="sex">
            </mt-cell>
            <mt-cell title="女">
              <input type="radio" name="sex"  value="0" id="man" v-model="sex">
            </mt-cell>
        </div>
    </div>
</template>
<script>
export default{
   data(){
       return {
       sex:'',
       disable:true
       }
   },
   methods:{
     updateSex(){
       let uid=this.$store.state.userInfo.uid
       this.axios.post(`/update?uid=${uid}`,`sex=${this.sex}`).then((res)=>{
         if(res.data.code==200){
           let ss=window.sessionStorage;
           let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
           userInfo.sex=this.sex
           // console.log(userInfo)          
           ss.setItem('userInfo',JSON.stringify(userInfo))
           this.$store.commit('setInfo',userInfo)
           // console.log(this.$store.state.userInfo)
           this.$toast({
               message:"修改成功",
               position:"bottom",
               duration:800
           })
           this.$router.push('/info_more')
         }else{
           this.$toast({
                message:"系统忙,请稍后再试",
                position:"bottom",
                duration:800
            })
         }
       })
     }
   },
   watch:{
     sex(val){
       if(val){
         this.disable=false
       }
     }
   },
   mounted(){
     console.log(this.cch)
   }
}
</script>
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
         