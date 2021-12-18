import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 实例化Vuex的构造参数 state mutations actions
  state: {
    // 存储的状态
    count: 0
  },
  // 修改state必须通过mutations
  mutations: {
    // 修改state的mutation方法。每个mutation方法都有对应的参数：state、payload
    // state 指的是当前Vuex中的state对象
    // payload载荷 提交mutation的方法时传递的参数,它可以时任何类型的值
    addCount(state, paylad) {
      state.count += paylad
    }
  },
  // 异步动作。从后端获取一个数通过mutations更新到state的count中
  actions: {
    // action方法参数：context
    // context：执行上下文对象,相当于组件中的this.$store  store的运行实例
    getAsyncCount(context, params) {
      // 做异步的请求
      setTimeout(function () {
        // 提交数据到mutations的addCount中
        context.commit('addCount', params)
      }, 2000)
    }
  }
});
