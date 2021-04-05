<template>
  <div>
    电话
    <mt-tabbar v-model="selected">
      <mt-tab-item id="detail">
        <img
          v-if="selected == 'detail'"
          src="../assets/common/me_1.png"
          slot="icon"
        />
        <img v-else src="../assets/common/me_0.png" slot="icon" />
        详情
      </mt-tab-item>
      <mt-tab-item id="talk">
        <img
          v-if="selected == 'talk'"
          slot="icon"
          src="../assets/common/cart_1.png"
          alt=""
        />
        <img v-else slot="icon" src="../assets/common/cart_0.png" alt="" />
        消息
      </mt-tab-item>
      <mt-tab-item id="phone">
        <img
          v-if="selected == 'phone'"
          slot="icon"
          src="../assets/common/main_1.png"
          alt=""
        />
        <img v-else slot="icon" src="../assets/common/main_0.png" alt="" />
        电话
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "phone",
    };
  },
  watch: {
    selected(newvalue) {
      //newvalue是selecte的新值
      if (newvalue == "detail") {
        this.$router.push("/detail");
      } else if (newvalue == "talk") {
        this.$router.push("/talk");
      } else if (newvalue == "phone") {
        this.$router.push("/phone");
      }
    },
  },
};
</script>