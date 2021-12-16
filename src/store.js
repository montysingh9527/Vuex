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
  actions: {}
});
