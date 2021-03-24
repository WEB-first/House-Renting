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
        <div>
          <div class="articleItem">
            <!-- 图像 -->
            <div class="article-img">
              <img src="../assets/logo.png" />
            </div>
            <div class="article-wrapper">
              <!-- 标题 -->
              <div>
                <p class="article-title">
                  凤城十二路地铁口  凯润大厦明光路
                </p>
              </div>
              <!-- 地址 -->
              <div class="article_address">
                <span class="address">经济开发区</span>
                <span class="address">欧亚大厦</span>
              </div>
              <!-- 条件 -->
              <div class="article-tag">
                <el-tag type="success" size="small" class="tag">合租</el-tag>
                <el-tag type="success" size="small" class="tag">朝南</el-tag>
                <el-tag type="success" size="small" class="tag">近地铁</el-tag>
                <el-tag type="success" size="small" class="tag">有电梯</el-tag>
              </div>
              <!-- 价格 -->
              <div class="article-foot">
                <P class="price">700元/月</P>
                <p class="house_type">2室1厅</p>
                <p class="house_type">20㎡</p>
              </div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">新房面板</mt-tab-container-item>
      <mt-tab-container-item id="3">二手房面板</mt-tab-container-item>
      <mt-tab-container-item id="4">商业地产面板</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navactive: "1",
    };
  },
};
</script>

<style scoped>
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #548C27;
    color: #548C27;
}
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  height: 100px;
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
/* .article-tag{
  margin-top: 0px;
} */
.tag {
  padding: 2px 5px;
  margin: 0 3px;
  /* font-size: 13px; */
}
.article-foot {
  float: left;
}
.article-foot p {
  display: inline-block;
  margin-top: 10px;
  padding: 0 5px;
}
.price {
  color: rgb(233, 126, 126);
  font-size: 15px;
}
.house_type {
  font-size: 12px;
}
</style>
