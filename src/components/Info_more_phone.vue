<template>
    <div class="info-more-phone">
        <!--顶部 -->
        <mt-header title="电话号码" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right" :disabled="disable" @click="updatePhone">保存</mt-button>
        </mt-header>
        <!-- 修改 -->
        <div id="phone">
            <mt-field label="手机号" placeholder="输入手机号" :attr="{maxlength:11}" type="tel" v-model="phone"></mt-field>
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
           phone:"",
           disable:true
       }
   },
   methods:{
       checkPhone(){
            var reg=/^1[3-9]\d{9}$/;
            if(reg.test(this.phone)){
              this.phoneState='success';
              return true;
            }else{
              this.phoneState='error';
              return false;
            }
        },
       updatePhone(){
           if(this.checkPhone()){
               let uid=this.$store.state.userInfo.uid
               //console.log(this.state.userInfo.uid)
               this.axios.post(`/update?uid=${uid}`,`phone=${this.phone}`).then((res)=>{
               console.log(res)
               if(res.data.code==200){
                       let ss=window.sessionStorage;
                       let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
                       userInfo.phone=this.phone
                       // console.log(userInfo)          
                       ss.setItem('userInfo',JSON.stringify(userInfo))
                       this.$store.commit('setInfo',userInfo)
                       //console.log(this.$store.state.userInfo)
                       this.$toast({
                           message:"修改成功",
                           position:"bottom",
                           duration:500
                        })
                       this.$router.push('/info_more')
                   }else{
                        this.$toast({
                           message:"系统忙,请稍后再试",
                           position:"bottom",
                           duration:500
                       })
                   }
               })
           }else{
               this.$toast({
                   message:"格式不正确 请重新输入",
                   position:"bottom",
                   duration:500
               })
           }
           
       }
   },
   watch:{
       phone:function(val){
           if(val!=''){
               this.disable=false
           }else{
               this.disable=true
           }
       }
   }
}
</script>