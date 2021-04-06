<template>
    <div class="login">
        <!-- 顶部 -->
        <mt-header fixed>
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <!-- 下方 -->
        <div id="login">
            <p>欢迎登录</p>
            <router-link id="link" to="/register">注册新用户</router-link>
            <mt-field id="mt-field" placeholder="请输入用户名" :state="unameState" v-model="uname" @blur.native.capture="checkuname"></mt-field>
            <mt-field placeholder="请输入密码" type="password" :attr="{maxlength:8}" v-model="upwd" ></mt-field>
        </div>
        <mt-button id="btn-login" type="danger" size="large" :disabled="disable" @click="login">登录</mt-button>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
            disable:true,
            unameState:'',
            uname:'',
            upwd:''
        }
    },
    computed:{
        ...mapState(["isLogin","userInfo"])
    },
    methods:{
        checkuname(){
            let exp=/^\w{4,9}$/;
            if(exp.test(this.uname)){
                // this.unameState="success";
                return true;
            }else{
                // this.unameState="error";
                this.$toast({
                    message:"用户名格式错误",
                    position:"center",
                    duration:300
                })
                return false;
            }
        },
        login(){
            if (this.checkuname()==true){
                this.axios.post('/login',`uname=${this.uname}&upwd=${this.upwd}`).then(res=>{
                    // console.log(res)
                    if(res.data.code==200){
                        this.$indicator.open('登录中')
                        let userInfo=res.data.result;
                        let ss=window.sessionStorage;
                        ss.setItem('isLogin',1)
                        ss.setItem('userInfo',JSON.stringify(userInfo))
                        this.$store.commit('setInfo',userInfo)//加上此行立即渲染 但除首次加载仍无法打印
                        // console.log(this.isLogin)//刷新后可以渲染
                        // console.log(this.userInfo.nickname) //数据存在state里面但是无法打印 刷新之后才渲染
                        setTimeout(()=>{
                            this.$indicator.close()
                            this.$router.push('/')
                            // console.log(JSON.parse(sessionStorage.getItem('userInfo')).email)
                        },500)
                    }else{
                        this.$toast({
                            message:"用户名或密码错误",
                            position:"bottom",
                            duration:1000
                        })
                    }
                })
                }
            },
        },
    watch:{
        upwd:function(val){
            if(this.checkuname()&&val!=''){
                this.disable=false
            }else{
               this.disable=true
           }
        }
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