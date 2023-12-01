import { createApp } from 'vue'
import App from './App.vue'
import { axiosInit } from './plugins/axios';

axiosInit()
createApp(App).mount('#app');
