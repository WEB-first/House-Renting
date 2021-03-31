<template>
  <div class="recommend">
    <mt-navbar fixed v-model="navactive">
      <mt-tab-item v-for="(item,i) in hclass" :key='i' :id="item.c_id.toString()">{{item.c_name}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="navactive">
        <recom-list :navactive="navactive"></recom-list>  
    </mt-tab-container>
    <my-footer :select="selected"></my-footer>
  </div>
</template>
<style>
  .recommend .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #22CA93;
    color: #22CA93;
    font-weight: bold;
}
.recommend .mint-tab-container{
  margin: 55px 0;
}
</style>
<script>

import RecomList from '../components/RecomList.vue'

export default {
  components: { RecomList },
  data(){
    return{
       navactive : '1',
       hclass:[],
       selected:'recommend'
    }
  },
  methods:{
    //加载类别列表，更新顶部导航
    loadNavItems(){
      //axios访问类别列表
      this.axios.get('/hclass').then(res=>{
        // console.log(res)
        this.hclass=res.data.results;
      })
    }
  },
  mounted(){
    //加载类别列表，更新顶部导航
    this.loadNavItems();
  }
}
</script>
