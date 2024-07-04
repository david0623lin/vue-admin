<template>
    <el-container class="layout-container">
        <!-- 左側選單 -->
        <el-aside width="200px">
            <el-scrollbar>
                <h4 class="layout-title">{{ $t("Menu.Title") }}</h4>
                <el-menu background-color="#1d3043" :default-active="menuActive" text-color="#fff"
                    active-background-color="#3375b9">
                    <template v-for="item in menuItems" :key="item.path">
                        <el-sub-menu :index="item.path">
                            <template #title>
                                <span>{{ $t("Router." + item.name) }}</span>
                            </template>
                            <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path"
                                @click="handleMenuClick(child.path)">
                                {{ $t("Router." + child.name) }}
                            </el-menu-item>
                        </el-sub-menu>
                    </template>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <!-- 上方目錄 -->
            <el-header>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, key) in breadItems" :key="key">
                        {{ $t("Router." + item) }}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>

            <!-- 中間主畫面 -->
            <el-tabs v-model="tabsActive" class="tabs" @tab-remove="handleTabRemove" @tab-click="handleTabClick">
                <el-tab-pane v-for="(tab, k) in tabsItems" :key="k" :label="$t('Router.'+tab.name)" :name="tab.name" :closable="tab.del">
                    <el-main>
                        <router-view />
                    </el-main>
                </el-tab-pane>
            </el-tabs>
        </el-container>
    </el-container>
</template>

<script>
import { ref, watch, toRaw, onBeforeMount } from 'vue';
import { useTokenStore } from '../utils/pinia/StoreToken';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const menuActive = ref();
        const menuItems = ref([]);
        const breadItems = ref([]);
        const tabsActive = ref();
        const tabsItems = ref([]);
        const tokenStore = useTokenStore();

        onBeforeMount(() => {
            // 遞迴動態產生 Menu Item Lists
            router.options.routes.forEach(route => {
                if (route.hidden || !route.children) {
                    return
                }

                // 首頁設定
                if (route.path === '/dashboard') {
                    menuActive.value = route.path
                }

                const menuItem = {
                    path: route.path,
                    name: route.name
                };
                let children = []

                route.children.forEach(child => {
                    const childItem = {
                        path: route.path + '/' + child.path,
                        name: child.name,
                    };
                    children.push(childItem);
                });

                if (children.length > 0) {
                    menuItem.children = children
                }
                menuItems.value.push(menuItem)
            });
        });

        watch(() => {
            // 監聽事件
            const newRoute = router.currentRoute.value;

            // 麵包屑
            breadItems.value = [];
            newRoute.matched.forEach(r => {
                breadItems.value.push(r.name);
            })

            // Tabs
            tabsItems.value = tokenStore.getTabs;
            const exists = tabsItems.value.some(item => item.name === newRoute.name); // 判斷 tab 是否已經存在

            if (!exists) {
                tabsItems.value.push({
                    name: newRoute.name,
                    path: newRoute.path,
                    del: true
                });
                tokenStore.setTabs(tabsItems.value);
            }
            // 切換 menu 到選中的
            menuActive.value = newRoute.path
            // 切換 tab 到選中的
            tabsActive.value = newRoute.name;
        });

        const handleMenuClick = (newPath) => {
            menuActive.value = newPath
            router.push({ path: newPath });
        };

        const handleTabClick = (newTab) => {
            const tabsItems = tokenStore.getTabs;
            const tab = tabsItems.find(item => item.name === toRaw(newTab.props).name);
            router.push({path: tab.path});
        };

        const handleTabRemove = (tabName) => {
            const tabsItems = tokenStore.getTabs;

            tabsItems.forEach((tab, index) => {
                if (tab.name === tabName) {
                    tabsItems.splice(index, 1);
                    tokenStore.setTabs(tabsItems)
                    router.push({ path: tabsItems[0].path });
                    tabsActive.value = tabsItems[0].name;
                    return
                }
            });
        };

        return {
            menuActive,
            menuItems,
            breadItems,
            tabsActive,
            tabsItems,
            handleMenuClick,
            handleTabClick,
            handleTabRemove,
        };
    }
};
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

.el-scrollbar {
    background-color: #1d3043;
    align-items: center;
    justify-content: center;
    height: 900px;
    text-align: center;
    /* border-radius: 5px; */
}

.layout-container .layout-title {
    color: #fff;
    text-align: center;
}

.el-menu {
    border-color: #1d3043
}

.el-menu-item:hover {
    background-color: #3375b9;
    color: white;
}

.el-breadcrumb {
    font-size: medium;
    line-height: 2;
}
</style>
