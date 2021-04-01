<template>
<div>
  <mt-search v-model="value"></mt-search>
  <span v-if="result.length!==0">{{result[0].a_area}}</span>
  <span v-else></span>
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
        console.log( res.data[0].a_area)
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