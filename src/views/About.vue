<template>
  <div class="about">
    <button @click="test">+10（原始方式）</button>
    <!-- Vue中方法的默认第一个参数 事件参数对象$event, 100就是传递的载荷payload-->
    <button @click="addCount(100)">+100（辅助函数mapMutations方式）</button>
    <br />
    <button @click="testAction">Action异步调用（原始方式）</button>
    <button @click="getAsyncCount(555)">
      Action异步调用（辅助函数getAsyncCount方式）
    </button>
    <br /><br />
    <div>{{ $store.getters.filterList }}</div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    // 原始方式调用
    test() {
      // 调用mutation方法,commit(mutation名称,payload载荷)
      this.$store.commit("addCount", 10);
    },
    // actions异步调用 原始形式
    testAction() {
      // commit是提交mutations, dispatch调用actions,dispatch(action的名称,传递的参数)
      this.$store.dispatch("getAsyncCount", 222);
    },
    ...mapMutations(["addCount"]), // 此时组件方法就会拥有mutations中的addCount方法
    ...mapActions(["getAsyncCount"]),
  },
};
</script>
