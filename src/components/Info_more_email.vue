<template>
    <div class="info-more-email">
        <!--顶部 -->
        <mt-header title="修改邮箱" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right" :disabled="disable" @click="updateEmail">保存</mt-button>
        </mt-header>
        <!-- 修改 -->
        <div id="email">
            <mt-field label="邮箱" placeholder="输入邮箱" type="e-mail" v-model="email"></mt-field>
        </div>
    </div>
</template>
<script>
export default{
   data(){
       return {
           email:"",
           disable:true
       }
   },
   methods:{
        checkEmail(){
          var reg= /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
          if(reg.test(this.email)){
            // this.emailState='success';
            return true;
          }else{
            // this.emailState='error';
            return false;
          }
        },
       updateEmail(){
           if(this.checkEmail()){
               let uid=this.$store.state.userInfo.uid
            //console.log(this.state.userInfo.uid)
            this.axios.post(`/update?uid=${uid}`,`email=${this.email}`).then((res)=>{
            console.log(res)
            if(res.data.code==200){
                 this.$toast({
                    message:"修改成功",
                    position:"bottom",
                    duration:500
                    })
                    let ss=window.sessionStorage;
                    // console.log(JSON.parse(sessionStorage.getItem('userInfo')).nickname)
                    let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
                    userInfo['e-mail']=this.email
                    // console.log(userInfo)          
                    ss.setItem('userInfo',JSON.stringify(userInfo))
                    this.$store.commit('setInfo',userInfo)
                    console.log(this.$store.state.userInfo)
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
                    message:"请输入正确邮箱格式",
                    position:"bottom",
                    duration:500
                })
           }
       }
   },
   watch:{
       email:function(val){
           if(val!=''){
               this.disable=false
           }else{
               this.disable=true
           }
       }
   }
}
</script>
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

