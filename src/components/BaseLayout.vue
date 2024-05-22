<template>
    <el-container>
      <el-header>
        <h1>{{ title }}</h1>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">About</el-menu-item>
          <el-menu-item index="3">Contact</el-menu-item>
        </el-menu>
      </el-header>
  
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeIndex" class="el-menu-vertical-demo">
            <el-menu-item index="1">Option 1</el-menu-item>
            <el-menu-item index="2">Option 2</el-menu-item>
          </el-menu>
        </el-aside>
  
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  <script>
  export default {
    name: 'BaseLayout',
    data() {
      return {
        title: 'My App',
        activeIndex: '1',
      }
    },
  }
  </script>
  
  <style scoped>
  h1 {
    margin: 0;
    padding: 20px;
    color: #333;
  }
  </style>
  