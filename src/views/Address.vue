<template>
<div>
<div class="city-list-container">
  <div class="city-title">定位城市</div>
  <div class="city-inline">
    <router-link to="/" class="location-city">西安市</router-link>
  </div>
  </div>
  <div class="city-list">
    <div class="city-left">
      <div style="height:100vh">
        <div class="city-group-item" v-for="(item,i) of mapList" :key="i">
            <!-- 为城市组的标题添加唯一id
                 为了动态滚动到相应的位置 -->
            <div class="city-group-title">{{i}}</div>
            <div class="city-fullname" v-for="(cityObj,i) of item" :key="i">
              <router-link style="color:#333" to="/">{{cityObj.fullName}}</router-link>
        </div>    
      </div>
    </div>
    <div class="city-right">
      <div class="py-item" style="padding:0;height:20px;" v-for="(item,i) of letters" :key="i">
        <div>{{item}}</div>
      </div>       
    </div>
  </div>
</div>
</div>
</template>
<script>
import map from '../assets/map'
export default {
  data() {
    return {
      value: "",
      mapList:map,
      letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    };
  },
};
</script>


<style scoped>

body {
  background-color: #ebebeb;
 
}
.city-list-container {
  font-size: 14px;
  color: #333;
}
.city-title {
  padding-left: 15px;
  line-height: 30px;
}
.city-inline {
  background-color: #f5f5f5;
  padding: 10px;
}
.location-city {
  display: inline-block;
  width: auto;
  padding: 0 20px;
  background: #fff;
  height: 34px;
  line-height: 34px;
  color: #333;
}
.city-list {
  height: 100%;
  background: #fff;
  display: flex;
}
.city-left {
  flex: 1;
}
.city-right {
  position: fixed;
  top: 0;
  right: 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.city-right .py-item {
  text-align: center;
  padding: 4px 0;
}
.city-group-item {
  margin: 10px 0;
}
.city-group-title {
  background-color: #ebebeb;
  padding: 10px;
}
.city-fullname {
  color: #333;
  padding: 15px 20px;
  border-bottom: 1px dashed #ccc;

}
</style>
