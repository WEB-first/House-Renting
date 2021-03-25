<template>
  <div>
     <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img
          v-if="selected == 'home'"
          slot="icon"
          src="image/home/icon/nav-icon-jiaoshixinxi_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-jiaoshixinxi.svg"
          alt=""
        />
        首页
      </mt-tab-item>
      <mt-tab-item id="message">
        <img
          v-if="selected == 'message'"
          slot="icon"
          src="image/home/icon/nav-icon-gonggao_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-gonggao.svg"
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
          src="image/home/icon/nav-icon-baseinfo.svg"
          alt=""
        />
        推荐
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img
          v-if="selected == 'mine'"
          slot="icon"
          src="image/home/icon/nav-icon-gerenxiaoxi_active.svg"
          alt=""
        />
        <img
          v-else
          slot="icon"
          src="image/home/icon/nav-icon-gerenxiaoxi.svg"
          alt=""
        />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  props:[ 'selected' ],
  data(){
    return {
      newsel: selected,
      selected : newsel ?`${selected}`:'home'
    }
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
    }
  },
  mounted(){
    console.log(this.selected)
  }
}
</script>