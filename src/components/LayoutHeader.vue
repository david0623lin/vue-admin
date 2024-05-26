<template>
    <el-breadcrumb separator="/">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>
            <a href="/">promotion management</a>
        </el-breadcrumb-item> -->
        <!-- <el-breadcrumb-item>promotion list</el-breadcrumb-item> -->

      <el-breadcrumb-item v-for="(item, key) in breadItems" :key="key">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = ref();
const breadItems = ref([]);

watch(() => {
    route.value = router.currentRoute.value;
    const pathLevel = router.currentRoute.value.fullPath.split("/").length - 1; // 判斷路由是只有主路由 or 有子路由

    breadItems.value = [];

    if (pathLevel > 1) {
        router.currentRoute.value.matched.forEach(subRoute => {
            breadItems.value.push(subRoute.name);
        })
    } else {
        breadItems.value.push(route.value.name);
    }
});

</script>


<style scoped>

.el-breadcrumb {
    font-size:medium;
    line-height: 2;
}

</style>
