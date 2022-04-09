<script setup>
import { mainStore } from "../store/index"
import { storeToRefs } from "pinia"
const store = mainStore()
const { count } = storeToRefs(store)
</script>

<template>
  <h1>{{ store.msg }}</h1>
  <p>Count now is ： {{store.count}}</p>
   <hr />
  <p>Pinia中使用 storeToRefs去解构</p>
  <p>Count now is ： {{count}}</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
