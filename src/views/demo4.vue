<script setup>
import { mainStore } from "../store/index"
const store = mainStore()

const actionClick = () => {
  store.changeState()
}


</script>

<template>
<h1>通过action修改</h1>
  <p>组件方法调用 store.方法名</p>
  <p>{{store.msg}}</p>
  <button @click="actionClick">{{store.count}}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
