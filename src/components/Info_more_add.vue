<template>
    <div class="info-more-add">
        <!--顶部 -->
        <mt-header title="修改地址" fixed>
          <router-link to="/info_more" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button id="btn-save" slot="right" :disabled="disable" @click="updateAdd">保存</mt-button>
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
           add:"",
           disable:true
       }
   },
   methods:{
       updateAdd(){
           let uid=this.$store.state.userInfo.uid
            //console.log(this.state.userInfo.uid)
            this.axios.post(`/update?uid=${uid}`,`address=${this.add}`).then((res)=>{
            console.log(res)
            if(res.data.code==200){
                    let ss=window.sessionStorage;
                    let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
                    userInfo.address=this.add
                    // console.log(userInfo)          
                    ss.setItem('userInfo',JSON.stringify(userInfo))
                    this.$store.commit('setInfo',userInfo)
                    // console.log(this.$store.state.userInfo)
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
       }
   },
   watch:{
       add:function(val){
           if(val!=''){
               this.disable=false
           }else{
               this.disable=true
           }
       }
   }
}
</script>