<template>
  <div>
    <!-- 导航 -->
    <mt-navbar v-model="navactive" fixed>
      <mt-tab-item id="1" style="font-size: 15px">推荐</mt-tab-item>
      <mt-tab-item id="2">新房</mt-tab-item>
      <mt-tab-item id="3">二手房</mt-tab-item>
      <mt-tab-item id="4">商业地产</mt-tab-item>
    </mt-navbar>
    <!-- 面板 -->
    <mt-tab-container v-model="navactive" style="margin-top: 60px">
      <mt-tab-container-item id="1">
        <article-list></article-list>  
        <article-list></article-list>
        <article-list></article-list>        
        <article-list></article-list>
        <article-list></article-list>
        <article-list></article-list>
        <article-list></article-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">新房面板</mt-tab-container-item>
      <mt-tab-container-item id="3">二手房面板</mt-tab-container-item>
      <mt-tab-container-item id="4">商业地产面板</mt-tab-container-item>
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
      selected:'article'
    };
  },
};
</script>

<style scoped>
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #548C27;
    color: #548C27;
}
</style>
