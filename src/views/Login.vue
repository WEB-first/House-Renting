<template>
    <div class="login">
        <!-- 顶部 -->
        <mt-header fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <!-- <router-link to="/register" slot="right">
            <mt-button>注册</mt-button>
          </router-link> -->
        </mt-header>
        <!-- 下方 -->
        <div id="login">
            <p>欢迎登录</p>
            <router-link id="link" to="/register">注册新用户</router-link>
            <!-- <span>注册一个新用户?</span> -->
            <mt-field id="mt-field" placeholder="请输入用户名" :state="unameState" v-model="uname" @blur.native.capture="checkuname" ></mt-field>
            <mt-field placeholder="请输入密码" type="password" :attr="{maxlength:8}" v-model="pwd"></mt-field>
        </div>
        <mt-button id="btn-login" type="danger" size="large" :disabled="disable" @click="login()">登录</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            disable:true,
            unameState:'',
            uname:'',
            pwd:''
        }
    },
    methods:{
        checkuname(){
            let exp=/^\w{4,9}$/;//字母数字或下划线
            if(exp.test(this.uname)){
                // this.unameState="success"; 
                return true
            }else{
                // this.unameState="error";
                return false
            }
        },
        islog(){
            if(this.checkuname()&&(this.pwd!='')){
                this.disable=false
            }
        },
        login(){
            if (this.checkuname()==true){
                this.axios.post('/login',`uname=${this.uname}&upwd=${this.pwd}`).then(res=>{
                    console.log(res)
                    if(res.status==200){
                        this.$indicator.open("登录中...")
                         //获取用户信息
                            let userInfo=res.data.result;
                            this.$store.commit('loginSuccess',userInfo)
                            let ss=window.sessionStorage
                            ss.setItem('isLogin',1)
                            ss.setItem('userInfo',JSON.stringify(userInfo))
                            // console.log(this.$store.state.userInfo.uname)
                            console.log(this.$store.state.isLogin)
                            console.log(sessionStorage.getItem('isLogin'))


                        setTimeout(()=>{
                            this.$indicator.close()
                            this.$router.push('/')
                        },500)
                    }else{
                        // this.$indicator.open("用户名或密码错误")
                        // setTimeout(()=>{
                        //     this.$indicator.close()
                        // },800)
                        this.$toast({
                            message:"用户名或密码错误",
                            position:"bottom",
                            duration:1000
                        })
                    }
                })
            }
        }
    },
    watch:{
        pwd(newvalue){
            if(newvalue!=''){
                this.islog()
            }
        },
        // uname(newvalue){
        //     if(newvalue!=''){
        //         this.islog()
        //     }
        // }
    },

    
}
</script>

<style>
.login .mint-header{
    background-color: #fff;
    height: 50px;
    font-size: 16px;
    color: black;
}
.login #login{
    margin-top:50px;
    padding:10px;
}
.login #login p{
    font-size: 40px;
    margin-top: 25px;
    margin-left: 10px;
    margin-bottom: 15px;
}
.login #link{
    color:#66b081;
    margin-left: 10px;
    font-size: 20px;
}
.login #mt-field{
    margin-top:30px ;
}
.login .mint-cell-wrapper{
    background-size: 120% 0px;
}
.login .mint-button--danger{
    height: 50px;
    background-color:#66b081 !important ;
    width: 340px;
    border-radius: 40px;
    margin: 50px auto;

}
</style>