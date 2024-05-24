<template>
    <nav>
        <select v-model="locale">
            <option v-for="(value, key) in localeOptions" :key="key" :value="value">
                {{ key }}
            </option>
        </select>
    </nav>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n';

// 語系
const { locale } = useI18n();

// 語言選項對照表
const localeOptions = {
    "繁體中文": "zh-TW",
    "English": "en-US"
};

// 初始化語系
const storedLocale = localStorage.getItem("locale");

if (storedLocale) {
    locale.value = storedLocale;
}
watch(locale, (newLocale) => {
    localStorage.setItem("locale", newLocale);
});

</script>