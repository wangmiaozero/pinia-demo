<script setup>
import { mainStore } from "../store/index"
const store = mainStore()
const { count } = store
</script>

<template>
 <img alt="Vue logo" src="../assets/logo.png" />
  <h1>{{ store.msg }}</h1>
  <hr />
  <p>ES 传统方式解构 store,count不会响应更新 </p>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
