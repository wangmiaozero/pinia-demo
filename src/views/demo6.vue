<script setup>
import { mainStore } from "../store/index";
const store = mainStore();

const actionClick = () => {
  store.changeState();
};
</script>

<template>
  <h1>store之间的相互调用</h1>
  <p>Getters 获取数据</p>
  <p>{{ store.getCommonStore }}</p>
  <p>{{ store.getCommonStore }}</p>
  <p>{{ store.getCommonStore }}</p>
  <button @click="actionClick">{{ store.count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
