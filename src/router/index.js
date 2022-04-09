
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
const routerMode = "hash";
const routes = [
    {
      path: "/",
      name: "demo0",
      component: () => import("@/views/demo.vue"),
    },
    {
      path: "/demo1",
      name: "demo1",
      component: () => import("@/views/demo1.vue"),
	  },
    {
      path: "/demo2",
      name: "demo2",
      component: () => import("@/views/demo2.vue"),
	  },
    {
      path: "/demo3",
      name: "demo3",
      component: () => import("@/views/demo3.vue"),
	  },
    {
      path: "/demo4",
      name: "通过action修改",
      component: () => import("@/views/demo4.vue"),
	  },
    {
      path: "/demo5",
      name: "Pinia中的Getters",
      component: () => import("@/views/demo5.vue"),
	  },
    {
      path: "/demo6",
      name: "store之间的相互调用",
      component: () => import("@/views/demo6.vue"),
	  },
];
const router = createRouter({
	// hash模式：createWebHashHistory，history模式：createWebHistory
  history: routerMode == "history" ? createWebHistory() : createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false,
  routes:routes,
});

export default router;