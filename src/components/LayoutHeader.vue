<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>
            <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>

</script>

<style scoped>

.el-breadcrumb {
    font-size:medium;
    line-height: 2;
}

</style>
