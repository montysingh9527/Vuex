# vuex介绍

## 安装Vuex：
```
npm i vuex --save
印象笔记：https://www.evernote.com/shard/s423/sh/b5507a07-30ca-f816-6152-60e4f99fffdd/91f03930c5e9b8fd8dc1b3e3ed67589b
```
## Vuex基础-state
### 原始形式：插值表达式
```
<div>原始形式获取state状态：{{$store.state.count}}</div>
```
### 计算属性-将state属性定义在计算属性中
```
computed: {
    // 把state中数据,定义在组件内的计算属性中
    count() {
      return this.$store.state.count;
    },
  },

<div>计算属性获取state状态：{{ count }}</div>
```
### 辅助函数-mapState（重点）
```
mapState是辅助函数,帮助我们把store中的数据映射到组件的计算属性中,它属于一种方便的用法

用法：
第一步：导入mapState
import {mapState} from 'vuex'

第二步：采用数组形式引入state属性,利用延展运算符将导出的状态映射给计算属性
computed;{
    ...mapState(['count'])
}
类似：
computed;{
count() {
     return this.$store.state.count;
},
}

<div>mapState计算属性获取state状态：{{ count }}</div>
```
## Vuex基础-mutations

```
state数据的修改只能通过mutations,并且mutations必须是同步更新,目的是形成数据快照
数据快照：一次mutations的执行,立刻得到一种视图状态,因为是立刻,所以必须是同步

定义：修改state必须通过mutations
  mutations: {
    // 修改state的mutation方法。每个mutation方法都有对应的参数：state、payload
    addCount(state,payload) {
      state.count += 1
    }
  },
```
### mutations调用- 原始形式:$store
```
在组件中调用mutations
methods: {
    // 原始方式调用
    test() {
      // 调用mutation方法,commit(mutation名称,payload载荷)
      this.$store.commit("addCount",10);
    },
  },
```
### mutations调用- 辅助函数：mapMutations
```
mapMutations和mapState很像,它把位于mutations中的方法提取了出来,我们可以将它导入

import { mapMutations } from 'vuex'
methods: {
    // 此时组件方法就会拥有mutations中的addCount方法,方法写在methods中
    ...mapMutations(['addCount'])
}
```
## Vuex基础-actions
```
state是存放数据的,mutations是同步更新数据,actions则负责进行异步操作

定义actions：
actions: {
    // 获取异步的数据context表示当前的store的实例,可以通过context.state获取状态,也可以通过context.commit来提交mutations,也可以context.dispatch调用其它的action
    getAsyncCount(context) {
      // 做异步的请求
      setTimeout(function () {
        // 提交333去修改state
        context.commit('addCount', 333)
      }, 2000)
    }
  }

```
### actions调用- 原始调用:$store
```
在组件中调用actions
addAsyncCount(){
    this.$store.dispatch('getAsyncCount')
}

传参调用:
testAction() {
      // commit是提交mutations, dispatch调用actions,
      // dispatch(action的名称,传递的参数)
      this.$store.dispatch("getAsyncCount", 222);
    },
```
### actions调用- 辅助函数：mapActions
```
actions也有辅助函数,可以将action导入到组件中
import { mapActions } from "vuex";
methods:{
    ...mapActions(["getAsyncCount"]), 
}

直接通过this方法就可以调用
<button @click="getAsyncCount(555)">Action异步调用（辅助函数getAsyncCount式）</button>

```
## Vuex基础-getters
```
除了state之外,有时我们还需要从state中派生出一些状态,这些状态是依赖state的,此时会用到getters

例如，state中定义list为1-10的数组
state:{
    list:[1,2,3,4,5,6,7,8,9,10]
}

组件中，需要显示所有大于5的数据，正常的方式，是需要list在组件中进行再一步的处理，但是getters可以帮助我们实现它

定义getters：
getters: {
    // getters 函数的第一个参数是state 必须要有返回值
    filterList: state.list.filter(item => item > 5)
  }

```
### getters调用- 原始方式:$store
```
<div>{{ $store.getters.filterList }}</div>
```
### getters调用- 辅助函数:mapGetters（重点）
```
import { mapGetters } from "vuex";
computed: {
    // 将getters中的计算属性导入到组件的计算属性中
    ...mapGetters(["filterList"]),
  },

<div>getters辅助函数形式mapGetters：{{ filterList }}</div>
```
## Vuex基础-模块化
```
应用：定义两个模块 user 和 setting
user中管理用户的状态 token
setting中管理应用的名称 name
const store = new Vuex.Store({
    modules:{
        user:{
        state:{
            token:'12345'
        }
        },
        setting:{
        state:{
            name:'Vuex实例'
        },
        }
    }
})

```
### 模块化-调用子模块属性- 原始方式:$store
```
获取子模块的状态需要通过来获取： $store.state.子模块.属性
<template>
  <div class="home">
    <!-- 用户的token和应用名称name -->
    <!-- $store.state.子模块.属性 -->
    <div>用户token：{{ $store.state.user.token }}</div>
    <div>网站名称：{{ $store.state.setting.name }}</div>
  </div>
</template>
```
### 模块化-调用子模块属性- 辅助函数:mapGetters
```
请注意：这个getters是根级别的getters
getters:{
    // 创建快捷访问
    token:state => state.user.token,
    name:state => state.setting.name
}

通过mapGetters引用
computed: {
    ...mapGetters(["name", "token"]),
  },

<div>快捷访问-用户token：{{ token }}</div>
<div>快捷访问-网站名称：{{ name }}</div>
```