import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

import i18n from "../src/language/index"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia();

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // pinia 持久化
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).use(i18n).use(ElementPlus).mount('#app')
