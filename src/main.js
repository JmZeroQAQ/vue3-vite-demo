import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/reset.scss'; // 引入重置样式
import App from './App.vue'
import router from './router'; // 导入路由

const app = createApp(App);
app.use(router); // 使用路由

const pinia = createPinia(); // 使用pinia
app.use(pinia);

app.mount('#app');