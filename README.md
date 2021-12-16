# vuex介绍

## 安装Vuex：
```
npm i vuex --save
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

