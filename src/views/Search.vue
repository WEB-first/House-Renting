<template>
<div>
  <mt-search v-model="value"></mt-search>
  <div v-if="result.length!==0" style="position:absolute;z-index:10;width: 100%;">
    <div v-for="(item,i) of result" :key="i" class="city-fullname">
  <router-link style="color:#333" :to="`/detail?id=`+`${item.aid}`">{{item.title}}</router-link>
    </div>
  </div>
  <my-footer></my-footer>
</div>
</template>
<script>
export default {
  data(){
    return{
      value:"",
      result:[]
    }
  },
  watch:{
    value(newvalue){
      this.axios.post('/search',`sear=${newvalue}`).then(res=>{
        this.result = res.data
        if(!newvalue){
          this.result = []
        }
      })
    }
  }
}
</script>
<style scoped>
.mint-search{
  height: 8vh;
}
.city-fullname {
  padding: 15px 20px;
  color: #000;
  background-color: #eee;
  border-bottom: 1px dashed #ccc;
}
</style>