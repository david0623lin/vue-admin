<template>
    <el-scrollbar>
        <h4 class="layout-title">Demo Layout Title</h4>
        <el-menu background-color="#1d3043" default-active="1" text-color="#fff" active-background-color="#3375b9">
            <el-menu-item index="1">
                <el-icon>
                    <setting />
                </el-icon>
                <span>首頁</span>
            </el-menu-item>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>折疊頁</span>
                </template>
                <el-menu-item index="2-1">折疊頁1</el-menu-item>
            </el-sub-menu>

            <el-menu-item index="3">
                <el-icon><icon-menu /></el-icon>
                <span>功能頁</span>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script setup>
import { Menu as location } from '@element-plus/icons-vue'

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
