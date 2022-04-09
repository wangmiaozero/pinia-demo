<script setup>
import { mainStore } from "../store/index"
const store = mainStore()

const addCount = () => {
  store.count++;
  console.log(store.count,'store.count')
}

</script>

<template>
<h1>简单数据修改</h1>
  <button @click="addCount">{{store.count}}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
