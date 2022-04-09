<script setup>
import { mainStore } from "../store/index"
const store = mainStore()

const addCount = () => {
  store.$patch({
     count:store.count + 2,
     msg:store.msg?"疫情快结束吧":"上海加油"
  })
  console.log(store,'store')
}
const funcCount = () => {
  store.$patch((state)=>{
     state.count = state.count + 2,
     state.msg = state.msg?"疫情快结束吧":"上海加油"
    console.log(state,'state');
  })
}

</script>

<template>
<h1>多条数据修改</h1>
  <p>修改所有状态（$patch+ 对象）</p>
  <p>{{store.msg}}</p>
  <button @click="addCount">{{store.count}}</button>
  <p>修改所有状态（$patch+ 函数）</p>
   <p>{{store.msg}}</p>
  <button @click="funcCount">{{store.count}}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
