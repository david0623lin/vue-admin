import { createI18n } from "vue-i18n";
import zh from "./zh-TW.json";
import en from "./en-US.json";

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem("locale") ?? "zh-TW",
    fallbackLocale: "zh-TW",
    messages: {
      "zh-TW": zh,
      "en-US": en,
    }
  });

export default i18n
