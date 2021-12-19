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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapGetters(["name", "token"]),
  },
  components: {},
};
</script>
