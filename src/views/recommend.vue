<template>
  <div class="recommend">
    <mt-navbar fixed v-model="navactive">
      <mt-tab-item id="1">综合</mt-tab-item>
      <mt-tab-item id="2">二手房</mt-tab-item>
      <mt-tab-item id="3">租房</mt-tab-item>
      <mt-tab-item id="4">新房</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="navactive">
      <mt-tab-container-item id="1">
        <!-- <recom-list></recom-list>    -->
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        二手房
       </mt-tab-container-item>
      <mt-tab-container-item id="3">
        租房
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        新房
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<style>
  .recommend .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #22CA93;
    color: #22CA93;
    font-weight: bold;
}
.recommend .mint-tab-container{
  margin-top: 55px;
}
</style>
<script>

import RecomList from '../components/RecomList.vue'
export default {
  components: { RecomList },
  data(){
    return{
       navactive : '1'
    }
  }
}
</script>
