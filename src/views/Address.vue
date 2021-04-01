<template>
<div>
  <mt-search
    v-model="value"
    cancel-text="取消"
    placeholder="搜索">
  </mt-search>
  <mt-cell
  title="西安"
  to="/"
  is-link>
</mt-cell>
</div>
</template>
<script>
export default {
  data(){
    return{
      value:''
    }
  }
}
</script>


<style scoped>
.mint-search{
  height: 7vh;
}
</style>
