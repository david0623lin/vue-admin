<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
export default {
  name: "App",
  setup() {
    const { t, locale } = useI18n();

    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    return {
      t,
      locale,
    };
  },
};
</script>

<template>
  <nav>
    <select v-model="locale">
      <option>zh-TW</option>
      <option>en-US</option>
    </select>
  </nav>
  <p>{{ t("message") }}</p>
</template>