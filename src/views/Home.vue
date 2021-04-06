<template>
  <div>
    <!-- 头部标题栏 -->
    <div id="header">
      <router-link to="/address" id="option">西安市</router-link>
      <input
        type="text"
        @click="search"
        id="search"
        placeholder="你想住哪里?"
      />
      <span>热搜:</span>
      <router-link to="/detail?id=1" style="margin-left: 5px; color: #333"
        >曲江观邸</router-link
      >
      <router-link to="/detail?id=1" style="margin-left: 5px; color: #333"
        >融创东方宸院</router-link
      >
      <router-link to="/detail?id=1" style="margin-left: 5px; color: #333"
        >紫郡长安</router-link
      >
      <router-link to="/detail?id=1" style="margin-left: 5px; color: #333"
        >融侨馨苑</router-link
      >
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
            <img src="../assets/1.jpg" alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/2.jpg" alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/3.jpg" alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/4.jpg" alt="" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/5.jpg" alt="" />
          </mt-swipe-item>
        </mt-swipe>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 房屋列表 -->
    <div class="artic">
      <h3 style="margin-left: 5px; color: #333">猜你喜欢</h3>
      <div class="articleItem" v-for="(item,i) of articleList" :key="i">
        <router-link :to="`/detail?id=`+`${item.aid}`">
          <!-- 图像 -->
          <div class="article-img">
            <!-- <img v-lazy="`../assets/1.jpg`" /> -->
            <img src="../assets/1.jpg">
          </div>
          <div class="article-wrapper">
            <!-- 标题 -->
            <div>
              <p class="article-title">{{item.title}}</p>
            </div>
            <!-- 地址 -->
            <div class="article_address">
              <span class="address">经济开发区</span>
              <span class="address">欧亚大厦</span>
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
    <!-- 底部选项卡 -->
    <my-footer :select="selected"></my-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
      swipeHeight: "0px",
      articleList: [],
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
    search() {
      this.$router.push("/search");
    },
  },
  mounted() {
    // 初始化轮播图的高度
    this.initSwipeHeight();
    this.axios.get('/article').then(res=>{
      this.articleList = res.data
    })
  },
};
</script>

<style scoped>
#header {
  position: absolute;
  top: 20px;
  left: 8px;
  font: 12px "微软雅黑";
}
#search {
  width: 360px;
  height: 50px;
  font-size: 16px;
  padding-left: 70px;
}
#option {
  position: absolute;
  top: 1px;
  left: 10px;
  width: 60px;
  height: 48px;
  z-index: 10;
  border: 0;
  font-size: 16px;
  color: #333;
  line-height: 45px;
  text-align: center;
  background-color: #fff;
}

.mtswipe img {
  width: 100%;
}
.artic {
  margin-bottom: 50px;
}

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
