<template>
    <div class="container">
        <div class="nav">
            <router-link class="link" v-for="item in routes.filter(item => item.path !== '/' )" :to="item.path" :key="item.path">{{ item.path }}</router-link>
        </div>
        <div class="content">
            <!-- 路由出口
                Component为对应路由出口对应的组件
                这样的话就可以缓存所有页面
            -->
            <router-view v-slot="{Component}">
                <keep-alive :include="`KeepAliveView`">
                    <component :is="Component" />
                </keep-alive>

            </router-view>
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
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 10%;
    background-color: lightblue;
}

// 隐藏滚动条
.nav::-webkit-scrollbar {
    width: 0;
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
    background-color: yellow;
}

</style>