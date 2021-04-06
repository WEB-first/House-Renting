<template>
  <div>
    <!-- 导航 -->
    <mt-navbar v-model="navactive" fixed>
       <mt-tab-item v-for="(item,i) in hclass" :key='i' :id="item.c_id.toString()">{{item.c_name}}</mt-tab-item>
    </mt-navbar>
    <!-- 面板 -->
    <mt-tab-container v-model="navactive" style="margin-top:55px">
      <article-list :navactive="navactive"></article-list>
    </mt-tab-container>
    <my-footer :select="selected"></my-footer>
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue'
export default {
  components: { ArticleList },
  data() {
    return {
      navactive: "1",
      selected:'article',
      hclass:[],
    };
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

<style scoped>
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #22CA93;
    color: #22CA93;
    font-weight: bold;
}
</style>
