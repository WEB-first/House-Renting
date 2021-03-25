<template>
  <div class="articleItem">
    <router-link to="/">
      <!-- 图像 -->
      <div class="article-img">
        <img src="../assets/1.jpg" />
      </div>
      <div class="article-wrapper">
        <!-- 标题 -->
        <div>
          <p class="article-title">凤城十二路地铁口 凯润大厦明光路</p>
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
          <P class="price">700元/月</P>
          <p class="house_type">2室1厅</p>
          <p class="house_type">20㎡</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ArticleList",
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