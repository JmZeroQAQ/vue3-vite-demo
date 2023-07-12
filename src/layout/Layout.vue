<template>
    <div class="container">
        <div class="nav">
            <router-link class="link" v-for="item in routes.filter(item => item.path !== '/' )" :to="item.path" :key="item.path">{{ item.path }}</router-link>
        </div>
        <div class="content">
            <!-- 路由出口 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { routes } from '@/router/index';

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    height: 100%;
}

.nav {
    display: flex;
    flex-direction: column;
    width: 10%;
    background-color: orange;
}

.content {
    width: 90%;
}

.link {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
    padding: 10px;
}

// 这个样式vue3会给我们自动加上
.router-link-active {
    background-color: lightblue;
}

</style>