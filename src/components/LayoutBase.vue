<template>
    <el-container class="layout-container">
        <!-- 左側選單 -->
        <el-aside width="200px">
            <LayoutMenu />
        </el-aside>

        <el-container>
            <!-- 上方目錄 -->
            <el-header>
                <LayoutHeader />
            </el-header>

            <!-- 中間主畫面 -->
            <el-tabs v-model="activeTab" class="tabs" @tab-remove="handleTabRemove" @tab-click="handleTabClick">
                <el-tab-pane v-for="(tab, k) in tabs" :key="k" :label="tab.name" :name="tab.name" :closable="!tab.keep">
                    <el-main>
                        <router-view :key="tab.name"></router-view>
                    </el-main>
                </el-tab-pane>
            </el-tabs>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, watch, toRaw } from 'vue';
import LayoutMenu from "../components/LayoutMenu.vue"
import LayoutHeader from "../components/LayoutHeader.vue"
import { useTokenStore } from '../utils/pinia/StoreToken';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = ref();
const tokenStore = useTokenStore();
const activeTab = ref()
const tabs = ref([])

watch(() => {
    route.value = router.currentRoute.value;
    tabs.value = tokenStore.getTabs

    // 判斷 tab 是否已經存在
    const exists = tabs.value.some(item => item.name === route.value.name);

    if (!exists) {
        let keep = false

        if (route.value.path === '/dashboard') {
            keep = true
        }
        tabs.value.push({
            name: route.value.name,
            path: route.value.path,
            keep: keep
        })
        tokenStore.setTabs(tabs.value)
    }
    // 切換 tab 到選中的
    activeTab.value = route.value.name
});

const handleTabClick = (tab) => {
    const tabs = tokenStore.getTabs
    const tabInfo = tabs.find(item => item.name === toRaw(tab.props).name);
    router.push({path: tabInfo.path});
};

const handleTabRemove = (tabName) => {
    const tabsStore = tokenStore.getTabs

    tabsStore.forEach((tab, index) => {
        if (tab.name === tabName) {
            tabs.value.splice(index, 1);
            tokenStore.delTabs(index)
        }
    });
}

</script>

<style scoped>
html,
body {
    margin: 0;
    height: 100%;
    overflow: hidden;
}

.layout-container {
    background-color: #f5f7f9;
}

.el-header {
    height: 35px;
    background-color: #f5f7f9;
}

.el-main {
    background-color: #e4e7ed;
    border-radius: 5px;
}

.tabs {
    margin-left: 20px;
    background-color: #f5f7f9;
}
</style>
