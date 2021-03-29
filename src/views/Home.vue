<template>
  <div>
    <!-- 头部标题栏 -->
    <div id="header">
      <select id="option">
        <option>西安</option>
      </select>
      <input type="text" id="search" placeholder="你想住哪里?" />
      <span>热搜:</span>
      <router-link to="/detail?id=1" style="margin-left:5px;color:#333">曲江观邸</router-link>
      <router-link to="/detail?id=1" style="margin-left:5px;color:#333">融创东方宸院</router-link>
      <router-link to="/detail?id=1" style="margin-left:5px;color:#333">紫郡长安</router-link>
      <router-link to="/detail?id=1" style="margin-left:5px;color:#333">融侨馨苑</router-link>

    </div>
    
    <!-- 面板 -->
    <mt-tab-container style="margin-top: 90px; margin-bottom: 55px">
      <mt-tab-container-item>
        <!--轮播图-->
        <mt-swipe
          class="mtswipe"
          :style="{ height: swipeHeight }"
          :auto="3000"
          :speed="150"
        >
          <mt-swipe-item>
            <img src="image/home/swipe/1.jpg" alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="image/home/swipe/2.jpg" alt="" />
          </mt-swipe-item>
        </mt-swipe>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 房屋列表 -->
    <div class="artic">
        <h3 style="margin-left:5px;color:#333">猜你喜欢</h3>
        <article-list></article-list>  
        <article-list></article-list>
        <article-list></article-list>        
        <article-list></article-list>
        <article-list></article-list>
        <article-list></article-list>
        <article-list></article-list>
    </div>
    <!-- 底部选项卡 -->
   <my-footer :select="selected"></my-footer>
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue'
export default {
  components: { ArticleList },
  data() {
    return {
      selected: "home",
      swipeHeight: "0px",
    };
  },

  methods: {
    /** 初始化轮播图的高度 */
    initSwipeHeight() {
      // console.log(window.screen.width);
      // 通过公式  计算轮播图应该设置的高度
      let picwidth = 690;
      let picheight = 345;
      let screenwidth = window.screen.width;
      let height = Math.floor((picheight * screenwidth) / picwidth) + "px";
      this.swipeHeight = height;
    },
  },
  mounted() {
    // 初始化轮播图的高度
    this.initSwipeHeight();
  },
};
</script>

<style scoped>
#header{
    position: absolute;
    top: 20px;
    left: 8px;
    font: 12px "微软雅黑";

}
#search {
  width: 360px;
  height: 50px;
  padding-left:70px ;
}
#option{
  position: absolute;
  top: 1px;
  left: 10px;
  width: 60px;
  height: 48px;
  z-index: 10;
  border: 0;
  background-color: #fff;
}

.mtswipe img {
  width: 100%;
}
.artic{
  margin-bottom: 50px;
}

</style>
