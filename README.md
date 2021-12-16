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


