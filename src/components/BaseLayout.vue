<template>
    <el-container class="layout-container">
        <el-aside width="200px">
            <el-scrollbar>
                <h4 class="layout-title">Demo Layout Title</h4>
                <el-menu background-color="#1d3043" default-active="1" text-color="#fff"
                    active-background-color="#3375b9">
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
        </el-aside>

        <el-container>
            <el-header>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <a href="/">promotion management</a>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                </el-breadcrumb>

                <el-tabs type="border-card" class="demo-tabs">
                    <el-tab-pane closable>
                        <template #label>
                            <span class="custom-tabs-label">
                                <el-icon>
                                    <calendar />
                                </el-icon>
                                <span>Route</span>
                            </span>
                        </template>
                        Route
                    </el-tab-pane>
                    <el-tab-pane label="Config">Config</el-tab-pane>
                    <el-tab-pane label="Role">Role</el-tab-pane>
                    <el-tab-pane label="Task">Task</el-tab-pane>
                </el-tabs>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { Menu as location, Setting } from '@element-plus/icons-vue'

</script>



<style scoped>
.el-scrollbar {
    background-color: #1d3043;
    align-items: center;
    justify-content: center;
    height: 900px;
    text-align: center;
    border-radius: 5px;
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

.el-header {
    height: 65px;
    background-color: #f5f7f9;
}

.el-breadcrumb {
    font-size: medium;
    line-height: 4;
}

.el-main {
    background-color: #f5f7f9;
}
</style>
