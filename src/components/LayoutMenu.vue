<template>
    <el-scrollbar>
        <h4 class="layout-title">Demo Layout Title</h4>
        <el-menu background-color="#1d3043" :default-active="defaultActive" text-color="#fff"
            active-background-color="#3375b9">
            <template v-for="item in menuItems" :key="item.index">
                <el-menu-item v-if="!item.children" :index="item.index" @click="handleMenuClick(item.index)">
                    <el-icon>
                        <component :is="item.icon" />
                    </el-icon>
                    <span>{{ item.title }}</span>
                </el-menu-item>
                <el-sub-menu v-else :index="item.index">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item v-for="child in item.children" :key="child.index" :index="child.index"
                        @click="handleMenuClick(child.index)">
                        {{ child.title }}
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuItems = ref([]);
const defaultActive = '/dashboard'; // 預設 Menu Item

const handleMenuClick = (index) => {
    router.push(index);
};

// 遞迴動態產生 Menu Item Lists
router.options.routes.forEach(route => {
    const menuItem = {
        index: route.path,
        title: route.name,
        icon: route.meta?.icon || '',
    };

    if (route.hidden) {
        // 如果主路由設隱藏, 且有子路由就只取第一筆資料做 Menu Item
        if (route.children) {
            menuItem.index = route.children[0].path
            menuItem.title = route.children[0].name
            menuItems.value.push(menuItem);
        }
    } else {
        // 主路由下遞迴產生 Menu Sub Item
        if (route.children) {
            menuItem.children = []
            route.children.forEach(child => {
                const childItem = {
                    index: `${route.path === '/' ? '' : route.path}/${child.path}`,
                    title: child.name
                };
                menuItem.children.push(childItem);
            });
        }
        menuItems.value.push(menuItem);
    }
});
</script>


<style scoped>
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
</style>
