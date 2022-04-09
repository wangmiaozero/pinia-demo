<script setup>
import { mainStore } from "../store/index";
const store = mainStore();

const actionClick = () => {
  store.changeState();
};
</script>

<template>
  <h1>Pinia中的Getters</h1>
  <p>Getters 获取数据</p>
  <p>{{ store.getCountBuff }}</p>
  <p>{{ store.getCountBuff }}</p>
  <p>{{ store.getCountBuff }}</p>
  <button @click="actionClick">{{ store.count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
