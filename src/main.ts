/*
 * @Description: 
 * @Date: 2022-06-23 11:38:34
 * @LastEditTime: 2022-08-05 11:01:44
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).use(router).use(store).mount('#app')
