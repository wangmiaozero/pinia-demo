<script>
import { ref, onMounted, reactive, toRefs, toRaw, computed,nextTick,onBeforeUnmount } from "vue";
export default {
  name:"App",
  setup(){
    const state = reactive({
      routerArr:[
        {
          path: "/",
		      name: "ES传统方式解构(能获取到值，但是不具有响应性)"
        },
        {
          path: "/demo1",
		      name: "Pinia解构方法：storeToRefs"
        },
        {
          path: "/demo2",
		      name: "简单数据修改"
        },
        {
          path: "/demo3",
		      name: "多条数据修改"
        },
         {
          path: "/demo4",
		      name: "通过action修改"
        },
         {
          path: "/demo5",
		      name: "Pinia中的Getters"
        },
         {
          path: "/demo6",
		      name: "store之间的相互调用"
        },
      ]
    })
    	return {
			...toRefs(state),
    }
  }
}
</script>

<template>
  <div class="routerArr">
    <router-link v-for="(item,index) in routerArr" :key="index" :to="item.path" >{{index+'-'+item.name}}</router-link>
  </div>
  <div class="router-view-container">
     <router-view></router-view>
  </div>
 
  <footer>
    <a href="https://pinia.vuejs.org/">Pinia</a>
  </footer>
</template>

<style>
.routerArr{
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
 
}
 .routerArr a{
    margin-right: 5px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-view-container{
  height: 92vh;
}
footer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
