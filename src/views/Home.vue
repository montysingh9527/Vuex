<template>
  <div class="home">
    <br />
    <!-- 用户的token和应用名称name -->
    <!-- $store.state.子模块.属性 -->
    <div>用户token：{{ $store.state.user.token }}</div>
    <div>网站名称：{{ $store.state.setting.name }}</div>
    <br />
    <div>快捷访问的方式-用户token：{{ token }}</div>
    <div>快捷访问的方式-网站名称：{{ name }}</div>
    <br />
    <button @click="updateToken">更新子模块的token</button>
    <button @click="testToken">调用子模块的mutations</button>
    <br />
    <!-- <button @click="updateToken">
      createNamespacedHelpers更新子模块的token
    </button> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// import { createNamespacedHelpers } from "vuex";
// const { mapMutations } = createNamespacedHelpers("user"); // 基于user模块下的mapMutations
export default {
  name: "home",
  computed: {
    ...mapGetters(["name", "token"]),
  },
  methods: {
    updateToken() {
      //未使用namespaced命名空间，直接调用user下的updateToken
      // this.$store.commit("updateToken");
      // 使用namespaced命名空间，采用路径形式调用,原始形式调用
      this.$store.commit("user/updateToken");
    },
    // 第二种方式辅助函数
    ...mapMutations(["user/updateToken"]),
    testToken() {
      this["user/updateToken"]();
    },
    // 第三种方式 createNamespacedHelpers
    // ...mapMutations(["updateToken"]),
  },
};
</script>
