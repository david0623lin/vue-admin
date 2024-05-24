<template>
    <el-container class="container">
        <div class="form-container">
            <h2 class="title">{{ $t("LoginPage.Title") }}</h2>
            <LangSelect class="lang-select" />
            <el-form ref="formRef" style="max-width: 600px" :model="form" :rules="rules" label-position="top">
                <el-form-item :label="$t('LoginPage.Acc')" prop="acc">
                    <el-input v-model="form.acc" @keyup.enter="handleLogin" />
                </el-form-item>
                <el-form-item :label="$t('LoginPage.Pwd')" prop="pwd">
                    <el-input v-model="form.pwd" type="password" show-password @keyup.enter="handleLogin" />
                </el-form-item>
                <div class="btn">
                    <el-form-item>
                        <el-button type="primary" @click="handleLogin">{{ $t("LoginPage.Login") }}</el-button>
                        <el-button @click="handleClear">{{ $t("LoginPage.Clear") }}</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </el-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import LangSelect from "../components/LangSelect.vue"
import { useI18n } from 'vue-i18n';

// 語系
const { t } = useI18n();

// 表單
const form = reactive({
    acc: '',
    pwd: '',
})

const formRef = ref(null);

const handleLogin = async () => {
    try {
        await formRef.value.validate();
        console.log('submit!');
    } catch (error) {
        console.error('表单验证失败:', error);
    }
}

const handleClear = () => {
    form.acc = '';
    form.pwd = '';
    formRef.value.resetFields();
};

// 規則
const rules = reactive({
    acc: [{ required: true, message: t("LoginPage.RuleAcc"), trigger: 'blur' }],
    pwd: [{ required: true, message: t("LoginPage.RulePwd"), trigger: 'blur' }],
});

</script>

<style>
html,
body {
    margin: 0;
    height: 100%;
    overflow: hidden;
}

.lang-select {
    margin-top: 25px;
    text-align: right;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #213d5b;
}

.form-container {
    width: 400px;
    max-width: 600px;
    padding: 20px;
    box-shadow: 5px 5px 10px #00000075;
    border-radius: 8px;
    background-color: #f5f7f9;
}

.title {
    text-align: center;
}

.btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>
