<template>
    <div class="register">
        <!-- 顶部 -->
        <mt-header fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <router-link to="/login" slot="right">
            <mt-button>登录</mt-button>
          </router-link>
        </mt-header>
        <!-- 下方 -->
        <div id="register">
            <p>新用户注册</p>
<<<<<<< HEAD
            <mt-field id="uname" label="用户名" placeholder="请输入用户名" :state="unameState" v-model="uname"></mt-field>
            <mt-field label="昵称" placeholder="为自己设置一个昵称吧" v-model="nickname"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" :state="upwdState" type="password" v-modal="upwd"></mt-field>
            <mt-field label="确认密码" placeholder="再次输入密码" :state="cpwdState" type="password" v-modal="cpwd"></mt-field>
            <mt-field label="手机号" placeholder="输入手机号" :state="phoneState" type="tel" v-model="phone"></mt-field>
            <mt-field label="身份证" placeholder="请输入身份证号码" :state="numberState" type="testarea" v-model="number"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" :state="emailState" v-model="email"></mt-field>    
=======
            <mt-field id="uname" @blur.native.capture="checkUsername" label="用户名" placeholder="请输入用户名" v-model="uname" :state="unameState"></mt-field>
            <mt-field label="昵称"  placeholder="为自己设置一个昵称吧" v-model="username"></mt-field>
            <mt-field label="密码" @blur.native.capture="checkUpwd" placeholder="请输入密码" type="password" v-model="upwd" :state="upwdState"></mt-field>
            <mt-field label="确认密码" @blur.native.capture="checkCpwd" placeholder="再次输入密码" type="password" v-model="cpwd" :state="cpwdState"></mt-field>
            <mt-field label="手机号" @blur.native.capture="checkPhone" :state="phoneState" placeholder="输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="身份证" @blur.native.capture="checkIdcard" :state="numberState" placeholder="请输入身份证号码" type="testarea" v-model="number"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" v-model="email" @blur.native.capture="checkEmail" :state="emailState"></mt-field>
>>>>>>> 8f1974e24da172ecc69cfcd3de7f137dfd0386fd
        </div>
        <mt-button @click="checkFrom" id="btn-login" type="danger" size="large">注册</mt-button>
    </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      nickname:"",
      upwd:"",
      cpwd:"",
      phone:"",
      email:"",
      number:"",
      unameState:"",
      upwdState:"",
      cpwdState:"",
      phoneState:"",
      emailState:"",
      numberState:""
    }
  },
  methods:{
    checkFrom(){
      if(this.checkUsername()&&this.checkUpwd()&&this.checkCpwd()&&this.checkPhone()&&this.checkEmail()&&this.checkIdcard()){
        this.axios.post('/sinup',
        `uname=${this.uname}&nickname=${this.nickname}&upwd=${this.upwd}&shengfenID=${this.number}&phone=${this.phone}&e-mail=${this.email}`).then(res=>{
            console.log(res)
          if(res.data.code == 200){
            this.$toast(`注册成功`)
            // this.$messagebox('提示','是否跳转登录?')
            this.$router.push(`/login`)
          }else{
              this.$toast({
                message:`注册失败:`+res.data.message,
                position:'bottom',
                duration:3000
              })
          }
        })
      }else{
        this.$toast({
          message:"格式有误",
          position:"bottom",
          duration:1000
        })
      }
    }
    ,checkUsername(){
      var reg=/^\w{6,15}$/;
      if(reg.test(this.uname)){
        this.unameState='success';
        return true;
      }else{
        this.unameState='error';
        return false;
      }
    },
    checkUpwd(){
      var reg=/^\w{6,12}$/;
      if(reg.test(this.upwd)){
        this.upwdState='success';
        return true;
      }else{
        this.upwdState='error';
        return false;
      }
    },
    checkCpwd(){
      if(this.upwd==this.cpwd){
       this.cpwdState='success';
       return true;
      }else{
        this.cpwdState='error'
        return false;
      }
    },
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
    checkEmail(){
      var reg= /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
      if(reg.test(this.email)){
        this.emailState='success';
        return true;
      }else{
        this.emailState='error';
        return false;
      }
    },
    checkIdcard(){
      var reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if(reg.test(this.number)){
        this.numberState='success';
        return true;
      }else{
        this.numberState='error';
        return false;
      }
    },
  }
}
</script>
<style>
.register .mint-header{
    background-color: #fff;
    height: 50px;
    font-size: 16px;
    color: black;
}
.register #register{
    margin-top: 65px;
    padding-left: 10px;
}
.register #register p{
    font-size: 35px;
    margin-left: 10px;
}
.register #uname{
    margin-top: 15px;
}
.register .mint-cell-wrapper{
    background-size: 120% 0px;
}
.register .mint-button--danger{
    height: 50px;
    background-color:#66b081 !important ;
    width: 340px;
    border-radius: 40px;
    margin: 50px auto;
}
</style>