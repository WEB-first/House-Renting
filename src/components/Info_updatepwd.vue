<template>
    <div class="info-updatepwd">
        <!-- 顶部 -->
        <mt-header title="修改密码" fixed>
          <router-link to="/info" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right" :disabled="disable" @click="updatePwd">保存</mt-button>
        </mt-header>
        <!-- 修改密码 -->
        <div id="updatepwd">
            <mt-field label="旧密码" type="password" v-model="pwd"></mt-field>
            <mt-field label="新密码" type="password" :state="newPwdState" v-model="newPwd" @blur.native.capture="checkPwd"></mt-field>
            <mt-field label="确认密码" type="password" :state="cpwdState" v-model="cPwd" @blur.native.capture="checkCpwd"></mt-field>
            <router-link to="/info_updatepwd_forgetpwd">
                <mt-button id="btn-forget" type="danger" size="large" plain>忘记密码？</mt-button>
            </router-link>
            
        </div>
    </div>
</template>
<script>
export default{
   data(){
       return {
           pwd:"",
           disable:true,
           newPwd:'',
           cPwd:'',
           cpwdState:"",
           newPwdState:""
       }
   },
   methods:{
       checkPwd(){
           if(this.newPwd!=''&&this.pwd!=''){
               this.newPwdState='success';
               if(this.cPwd!=''){
                   this.checkCpwd()
               } 
           }else{
               this.$toast({
                   message:"请先输入旧密码",
                   position:"bottom",
                   duration:800
               })
           }
       },
       checkCpwd(){
           let check=true
           //如果旧密码和新密码都不为空
           if(this.newPwd!=''&&this.pwd!=''){
               //判断新密码和确认密码 并且不能为空 状态success
               if(this.newPwd===this.cPwd&&this.cPwd!=''){
                   this.cpwdState="success"
               }else{
                   this.cpwdState='error'
                   this.$toast({
                       message:"新密码和确认密码需一致且不为空!",
                       position:"bottom",
                       duration:800
                   })
                   check=false
                }
                return check
           }else{
               //前两项为空则提示
               this.$toast({
                   message:"请先输入前两项哦",
                   position:"bottom",
                   duration:800
               })
           }
       },
       updatePwd(){
           if(this.checkCpwd()){
              let uid=this.$store.state.userInfo.uid
              this.axios.post(`/update?uid=${uid}`,`upwd=${this.cPwd}`).then((res)=>{
                //console.log(res)
                // 比较旧密码是否正确
                let ss=window.sessionStorage;
                let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
                //如果旧密码和输入旧密码相同 
                if(this.pwd===userInfo.upwd){
                    if(res.data.code==200){
                       let ss=window.sessionStorage;
                       let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
                       //接到正确响应码后令旧密码和新密码相等
                       userInfo.upwd=this.cPwd
                       console.log(userInfo)  
                       //更新修改后的密码到sessionStorage中        
                       ss.setItem('userInfo',JSON.stringify(userInfo))
                       //this.$store.commit('setInfo',userInfo)
                       console.log(this.$store.state.userInfo)
                       this.$toast({
                       message:"修改成功",
                       position:"bottom",
                       duration:800
                       })
                       this.$router.push('/info')
                    }else{
                        //其他不能成功修改的错误提示
                        this.$toast({
                           message:"系统忙,请稍后再试",
                           position:"bottom",
                           duration:800
                       })
                    }
                }else{
                    //旧密码和输入密码不相等 提示密码错误
                    this.$toast({
                        message:"原密码错误",
                        position:"bottom",
                        duration:800
                    })
                }
              })
           }  
       },
   },
   watch:{
       cPwd:function(val){
           if(this.pwd!=''&&val!=''&&this.newPwd!=''){
               this.disable=false
           }else{
               this.disable=true
           }
       },
       newPwd:function(val){
           if(this.pwd!=''&&val!=''&&this.cPwd!=''){
               this.disable=false
           }else{
               this.disable=true
           }
       },
       pwd:function(val){
           if(this.newPwd!=''&&val!=''&&this.cPwd!=''){
               this.disable=false
           }else{
               this.disable=true
           }
       },
   }
}
</script>
<style>
.info-updatepwd .mint-header{
        background-color: #86998c;
        height: 50px;
}
.info-updatepwd #btn-save{
    background-color: #66b081;
    width: 65px;
    height: 35px;
}
.info-updatepwd #updatepwd{
    margin-top: 50px;
    padding:0px 10px;
}
.info-updatepwd .mint-cell:last-child {
    background-image: linear-gradient(0deg,#d9d9d9,#d9d9d9 100%,transparent 0);
}
.info-updatepwd #btn-forget{
    margin-top:60px;
}
.info-updatepwd .mint-button--danger.is-plain {
    border: 1px solid #86998c;
    color:#86998c;
}
</style>

