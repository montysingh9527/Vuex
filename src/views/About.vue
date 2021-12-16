<template>
  <div class="about">
    <button @click="test">+1（原始方式）</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 原始方式调用
    test() {
      // 调用mutation方法,commit(mutation名称,payload载荷)
      this.$store.commit("addCount", 10);
    },
  },
};
</script>
