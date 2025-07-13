import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"

// router
import router from "./router";

const pinia = createPinia()
const app = createApp(App);

app
.use(router)
.use(pinia)
.mount('#app')