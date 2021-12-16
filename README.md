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