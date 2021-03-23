<template>
  <div>
    <!-- 头部标题栏 -->
    <div>
      <select id="option">
        <option>西安</option>
      </select>
    </div>
    <div>
      <input type="text" id="search" placeholder="你想住哪里?" />
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
    <div class="goodhouse">
      <div class="good-title">
        <span>猜你喜欢</span>
      </div>
      <ul class="good-list">
        <li class="good-item">
          <div class="house-card">
            <!-- 列表上半部分信息 -->
            <div class="base-info">
              <!-- 左侧：图片+图片覆盖信息 -->
              <div class="main-photo">
                <img src="image/home/swipe/1.jpg" />
                <div class="live-photo">平台实拍 · 8</div>
              </div>
              <!-- 右侧：房屋详情：租住类型+地址+具体信息 -->
              <div class="detail">
                <p class="title">
                  <span></span>
                  <span></span>
                </p>
                <p class="room-info"></p>
                <p class="lables">
                  <span class="lable"></span>
                  <span class="lable"></span>
                  <span class="lable"></span>
                  <span class="lable"></span>
                </p>
              </div>
            </div>
            <!-- 列表下半部分信息 -->
            <div class="extra-info">
              <!-- 左侧： 房东+评分+评价 -->
              <div class="landlord-info">
                <div class="owner">
                  <div class="logo"></div>
                  <div class="name">朱先生</div>
                  <div class="tag"></div>
                </div>
                <div class="score_comment">
                  <div class="score">
                    评分：
                    <b>4.5</b>
                  </div>
                  <div class="comment_number">125条评论</div>
                </div>
                <div class="one_comment">"干净舒适"</div>
              </div>
              <!-- 右侧： 价钱+优惠广告 -->
              <div class="price-info">
                <div class="price"><span class="number">￥</span>/月</div>
                <div class="shuidianmeiwang-text">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部选项卡 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img
          v-if="selected == 'home'"
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="message">
        <img
          v-if="selected == 'message'"
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        消息
      </mt-tab-item>
      <mt-tab-item id="recommend">
        <img
          v-if="selected == 'recommend'"
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        推荐
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img
          v-if="selected == 'mine'"
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-baseinfo_active.svg"
          alt=""
        />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "home",
      swipeHeight: "0px",
    };
  },
  watch: {
    // 监听器，监听变量的更新
    selected(newvalue) {
      // newvalue 是selected的新值
      if (newvalue == "home") {
        this.$router.push("/");
      } else if (newvalue == "message") {
        this.$router.push("/message");
      } else if (newvalue == "recommend") {
        this.$router.push("/recommend");
      } else if (newvalue == "mine") {
        this.$router.push("/mine");
      }
    },
  },
  methods: {
    /** 初始化轮播图的高度 */
    initSwipeHeight() {
      console.log(window.screen.width);
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
body{
  
}
#search {
  position: absolute;
  top: 20px;
  left: 8px;
  width: 282px;
  height: 50px;
  padding-left:70px ;
}
#option{
  position: absolute;
  top: 22px;
  left: 10px;
  width: 60px;
  height: 52px;
  z-index: 10;
  border: 0;
}
.mtswipe img {
  width: 100%;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}

.goodhouse {
  background-color: #fff;
}
.good-title {
  height: 1.18rem;
  line-height: 1.18rem;
  padding: 0.3rem;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 0.38rem;
  color: #3a3b3c;
  font-weight: 700;
  text-align: left;
}
.house-card,
.extra-info {
  margin: 0 0.3rem;
  border-bottom: 1px solid #ececec;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.house-card .base-info {
  width: 100%;
  display: flex;
  box-orient: horizontal;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
/* 猜你喜欢商品图片展示 */
.house-card .base-info .main-photo {
  position: relative;
  margin: 0.4rem 0.3rem 0.4rem 0;
  width: 2.1rem;
  height: 1.6rem;
  border-radius: 0.08rem;
  overflow: hidden;
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}
.house-card .base-info .main-photo > img {
  width: 100%;
}
/* 商品图片的底部在线实拍的信息展示 */
.house-card .base-info .main-photo .live-photo {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.2rem;
  text-align: center;
  color: #fff;
  background-color: rgba(28, 28, 28, 0.4);
  border-bottom-left-radius: 0.08rem;
  border-bottom-right-radius: 0.08rem;
}
/* 商品基础信息 */
.house-card .base-info .detail {
  width: 4.2rem;
  padding: 0;
  margin: 0;
  outline: none;
}
/* 商品信息标题*/
.house-card .base-info .detail .title {
  font-size: 0.34rem;
  color: #1c1c1c;
  font-weight: 700;
  margin-top: 0.2rem;
  line-height: 0.54rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.house-card .base-info .detail .room-info {
  color: #1c1c1c;
  font-size: 0.28rem;
  line-height: 0.48rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
}
.house-card .base-info .detail .lables {
  height: 0.38rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin-top: 0.1rem;
  margin-left: 0.74rem;
}
.house-card .base-info .detail .lables .lable {
  height: 100%;
  font-size: 0.22rem;
  line-height: 0.38rem;
  margin-right: 0.1rem;
  color: #9b9b9b;
  background-color: #f6f6f6;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.02rem;
  border-radius: 0.02rem;
}
.extra-info {
  display: flex;
  justify-content: space-between;
}
/* 房东信息 */
.extra-info .landlord-info {
  margin-left: -10px;
}
.extra-info .landlord-info .owner {
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  margin-left: -0.2rem;
}
.extra-info .landlord-info .owner .logo {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0px;
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-right: 0.12rem;
  overflow: hidden;
}
.extra-info .landlord-info .owner .name {
  display: inline-block;
  color: #1c1c1c;
  font-size: 0.24rem;
  line-height: 0.48rem;
  margin-right: 0.12rem;
}
.extra-info .landlord-info .owner .tag {
  width: 0.44rem;
  height: 0.24rem;
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
}
/* 房东信息评分栏 */
.house-card .extra-info .landlord-info .score_comment {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0.1rem;
  margin-left: -0.2rem;
}
.house-card .extra-info .landlord-info .score_comment .score {
  color: #1c1c1c;
  font-size: 0.22rem;
  margin-right: 0.16rem;
}
.house-card .extra-info .landlord-info .score_comment .comment_number {
  color: #9b9b9b;
  font-size: 0.22rem;
}
/* 商品评论 */
.house-card .extra-info .landlord-info .one_comment {
  margin-top: 0.1rem;
  margin-left: -5.8rem;
  display: inline-block;
  max-width: 2.4rem;
  color: gray;
  font-size: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.house-card .extra-info .landlord-info .price-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}
.house-card .extra-info .price-info .price {
  /* display: flex; */
  color: #fe0036;
  font-size: 0.24rem;
  text-align: right;
}
.house-card .extra-info .price-info .price span {
}
.house-card .extra-info .price-info .price .number {
  font-size: 0.32rem;
  font-weight: 700;
}
.house-card .extra-info .price-info .shuidianmeiwang-text {
  color: #f58f32;
  font-size: 0.28rem;
  font-weight: 700;
  margin-top: 0.1rem;
  max-width: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good-list {
  list-style: none;
}
</style>