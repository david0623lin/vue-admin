import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

import { createI18n } from "vue-i18n";
import zh from "./language/zh-TW.json";
import en from "./language/en-US.json";

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") ?? "zh-TW",
    fallbackLocale: "zh-TW",
    messages: {
      "zh-TW": zh,
      "en-US": en,
    }
  });

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(router).use(i18n).use(ElementPlus).mount('#app')
