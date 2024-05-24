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
            <el-tabs v-model="activeName" class="tabs">
                <el-tab-pane label="User" name="first">
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-tab-pane>
                <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
            </el-tabs>
        </el-container>
    </el-container>
</template>

<script setup>
import LayoutMenu from "../components/LayoutMenu.vue"
import LayoutHeader from "../components/LayoutHeader.vue"

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
