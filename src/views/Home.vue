<template>
  <div class="home">
    <br/>
    <!-- 用户的token和应用名称name -->
    <!-- $store.state.子模块.属性 -->
    <div>用户token：{{ $store.state.user.token }}</div>
    <div>网站名称：{{ $store.state.setting.name }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
