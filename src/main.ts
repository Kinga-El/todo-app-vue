import { createApp } from 'vue'
import App from './App.vue'
import "element-plus/dist/index.css";
import "@/core/css/global.scss";
import { createPinia } from "pinia";

export async function main() {
  const pinia =  createPinia()

  const app = createApp(App).use(pinia);

  app.mount('#app')
}

main();


