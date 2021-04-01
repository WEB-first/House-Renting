<template>
<div>
  <mt-search v-model="value"></mt-search>
  <div  v-if="result.length!==0" style="position:absolute;z-index:10">
    <div v-for="(item,i) of result" :key="i">
  <router-link :to="`/detail?id=`+`${item.aid}`">{{item.a_area}}</router-link>
    </div>
  </div>
  
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

</style>