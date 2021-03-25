<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed>
      <mt-button icon="back" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 轮番图 -->
    <mt-swipe
      class="mtswipe" :style="{ height: swipeHeight }" :auto="5000" :speed="1000" :show-indicators="false" :continuous="false">
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
    <!-- 房屋详情 -->
    <div id="containner">
      <!-- 详情一 -->
      <div class="detail">
        <p class="detail_title">
          整租|凤城一路 居然之家 海景台北湾 两室一厅 精装全配 随时看房
        </p>
        <p id="detail_p">
          <span id="price">2200</span>元/月<span class="detail_small">押一付一</span>
        </p>
      </div>
      <!-- 详情二 -->
      <div class="detail">
        <mt-cell class="detail_cell" title="4室2厅2卫" label="房型"></mt-cell>
        <mt-cell class="detail_cell" title="25㎡" label="面积"></mt-cell>
        <mt-cell class="detail_cell" title="高/11层" label="楼层"></mt-cell>
        <mt-cell class="detail_cell" title="南" label="朝向"></mt-cell>
      </div>
      <!-- 详情三 -->
      <div class="detail">
        <mt-badge type="success" size="normal" class="detail_tag">押一付一
        </mt-badge>
        <mt-badge type="success" size="normal" class="detail_tag">有电梯
        </mt-badge>
        <mt-badge type="success" size="normal" class="detail_tag">精装修
        </mt-badge>
      </div>
      <!-- 详情四 -->
      <div class="detail">
        <div class="articleItem">
          <div class="articleItem-header detail_title">房屋介绍</div>
          <div class="articleDes">
            入住须知:男女不限，要求无不良嗜好,有正式工作,作息时间规律;社会闲杂人、游手好闲者、不讲究卫生、酗酒、大吵大闹者请绕道恕不接待;床、衣柜、电脑桌、晾衣架、卫生间或独立或公用，钥匙、单元门门禁卡、一客一套;房屋定期专人上门门]安全排查,避免各种安全隐患,上i门]维修;所有租客都会经过身份核查,每个房间一房一锁;
          </div>
        </div>
      </div>
      <!-- 详情五 -->
      <div class="detail">
        <p class="detail_title">房源简介</p>
        <ul class="detail_ul">
          <li>
            <!-- <i class="iconfont icon-xiaoxi"></i> -->
            <img class="detail_img" src="../assets/style/1.jpg" alt="" />
            <p class="detail_small">洗衣机</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/2.jpg" alt="" />
            <p class="detail_small">空调</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/3.jpg" alt="" />
            <p class="detail_small">衣柜</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/4.jpg" alt="" />
            <p class="detail_small">热水器</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/5.jpg" alt="" />
            <p class="detail_small">床</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/6.jpg" alt="" />
            <p class="detail_small">暖气</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/7.jpg" alt="" />
            <p class="detail_small"><del>天然气</del></p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/8.jpg" alt="" />
            <p class="detail_small">冰箱</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/9.jpg" alt="" />
            <p class="detail_small">电视机</p>
          </li>
          <li>
            <img class="detail_img" src="../assets/style/10.jpg" alt="" />
            <p class="detail_small">宽带</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部 -->
    <div>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="detail">
          <img v-if="selected == 'detail'" src="../assets/common/me_1.png" slot="icon"/>
          <img v-else src="../assets/common/me_0.png" slot="icon" />
          详情
        </mt-tab-item>
        <mt-tab-item id="talk">
          <img  v-if="selected == 'talk'" slot="icon" src="../assets/common/cart_1.png" alt=""/>
          <img v-else slot="icon" src="../assets/common/cart_0.png" alt="" />
          消息
        </mt-tab-item>
        <mt-tab-item id="phone">
          <img v-if="selected == 'phone'" slot="icon" src="../assets/common/main_1.png" alt=""/>
          <img v-else slot="icon" src="../assets/common/main_0.png" alt="" />
          电话
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swipeHeight: "0px",
      selected: "detail",
    };
  },
  watch: {
    selected(newvalue) {
      if (newvalue == "detail") {
        this.$router.push("/detail");
      } else if (newvalue == "talk") {
        this.$router.push("/talk");
      } else if (newvalue == "phone") {
        this.$router.push("/phone");
      }
    },
  },
  mounted() {
    console.log(window.screen.width);
    let picwidth = 1080;
    let picheight = 607;
    let screenwidth = window.screen.width;
    let height = Math.floor((picheight * screenwidth) / picwidth) + "px";
    this.swipeHeight = height;
  },
};
</script>

<style scoped>
#containner {
  margin: 0 auto;
  width: 85%;
}
.detail_cell {
  display: inline-block;
}

.detail_ul > li {
  display: inline-block;
  width: 20%;
  text-align: center;
}
.detail_ul {
  margin-top: 10px;
}
.detail_img {
  width: 60%;
}
.detail_tag {
  margin-left: 10px;
}
.detail {
  border-bottom: 1px solid rgb(211, 209, 209);
  padding: 15px;
}
.detail_title {
  margin-top: 2px;
  font-size: 18px;
  font-weight: bolder;
  line-height: 20px;
}
#price {
  color: red;
  font-weight: bold;
}
#detail_p {
  margin-top: 8px;
}
.detail_small {
  margin-left: 5px;
  font-size: 10px;
  color: grey;
}
.mint-header {
  opacity: 0.4;
  background-color: gray;
}
.articleDes {
  margin-top: 13px;
  font-size: 13px;
  line-height: 20px;
}
.mtswipe {
  height: 200px;
}
.mtswipe img {
  width: 100%;
}
</style>
