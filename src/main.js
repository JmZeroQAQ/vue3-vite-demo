import { createApp } from 'vue'
import '@/assets/reset.scss'; // 引入重置样式
import App from './App.vue'
import router from './router'; // 导入路由

const app = createApp(App);
app.use(router); // 使用路由
app.mount('#app');