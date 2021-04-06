<template>
<div infinite-scroll-distance="20" v-infinite-scroll="loadmore" infinite-scroll-disabled="busy" :infinite-scroll-immediate-check="true">
  <div class="articleItem" v-for="(item,i) in article" :key="i">
    <router-link to="/detail">
      <!-- 图像 -->
      <div class="article-img">
        <img src="../assets/1.jpg" />
      </div>
      <div class="article-wrapper">
        <!-- 标题 -->
        <div>
          <p class="article-title">{{item.title}}</p>
        </div>
        <!-- 地址 -->
        <div class="article_address">
          <span class="address">{{item.a_area}}</span>
        </div>
        <!-- 条件 -->
        <div class="article-tag">
          <mt-badge type="success" size="small" style="margin: 0 3px"
            >合租</mt-badge
          >
          <mt-badge type="success" size="small" style="margin: 0 3px"
            >朝南</mt-badge
          >
          <mt-badge type="success" size="small" style="margin: 0 3px"
            >近地铁</mt-badge
          >
          <mt-badge type="success" size="small" style="margin: 0 3px"
            >有电梯</mt-badge
          >
        </div>
        <!-- 价格 -->
        <div class="article-foot">
          <P class="price">{{item.a_price}}月</P>
          <p class="house_type">{{item.a_type}}</p>
          <p class="house_type">{{item.a_daxiao}}</p>
        </div>
      </div>
    </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: "ArticleList",
  props:['navactive'],
  data(){
    return{
      article:[],
      busy:false,
      page:1
    }
  },
  methods:{
    loadArticleList(cdhclass,page){
      //请求前弹窗开启
      this.$indicator.open();
      this.axios.get(`/article?aid=${cdhclass}&${page}`).then(res=>{
        console.log(res)
        this.article=res.data
        //请求完数据弹窗关闭
        this.$indicator.close();
      })
    },
    //无限滚动
    loadmore(){
      this.busy=true;
      this.page++;
      // console.log(`加载下一页，page:${this.page}`);
      let c=this.navactive;
      let p=this.page;
      this.axios.get(`/article?aid=${c}&page=${p}`).then(res=>{
          //  console.log(res.data) 
           this.article=this.article.concat(res.data);
           this.busy=false;     
      })
    }
  },
  mounted(){
     //列表数据
     this.loadArticleList(1)  
  },
  watch:{
    navactive(cdhclass){
      this.article=[];
      this.page=1;
      this.loadArticleList(cdhclass)  
    }
  }
};
</script>
<style scoped>
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  height: 120px;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.article-img {
  margin-right: 6px;
  float: left;
}
.article-img img {
  width: 125px;
  height: 95px;
}
.articl-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}
.article-title {
  color: black;
  font-weight: 600;
  font-size: 15px;
  box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.article_address {
  display: inline-block;
  margin: 7px 0;
}
.address {
  padding: 0 5px;
  font-size: 13px;
  color: dimgray;
}
.article-tag {
  /* display: inline-block; */
  margin-top: 3px;
}
.article-foot {
  float: left;
}
.article-foot p {
  display: inline-block;
  margin-top: 14px;
  padding: 0 5px;
}
.price {
  color: rgb(241, 89, 89);
  font-size: 16px;
}
.house_type {
  font-size: 12px;
}
</style>