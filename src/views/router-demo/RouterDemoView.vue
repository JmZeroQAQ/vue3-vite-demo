<template>
    <div>
        <h1>路由传参</h1>
        <button @click="routeJump1">jump to page1</button>
        <button @click="routeJump2">using name to jump to page1</button>
        <hr>

        <h1>参数传递</h1>
        <router-link :to="'/router-page2/JmZero'">page2</router-link>
        <button @click="routeJump3">jump to page2</button>
        <hr>

        <h1>get式参数传递</h1>
        <router-link :to="{path: '/router-page3/', query: {name: 'Mogu'}}">page3</router-link>
        <button @click="routeJump4">page3</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 使用js完成路由跳转
const routeJump1 = function() {
    router.push({path: "/router-page1/"});    
    // 也可以直接传字符串
    // router.push("/router-page1/");   
};

// 第二种方法：使用别名跳转
const routeJump2 = function() {
    router.push({name: "router-page1"});
}

const routeJump3 = function() {
    router.push("/router-page2/123");
}

const routeJump4 = function() {
    router.push({path: '/router-page3/', query: {name: "JmZero"}});
}
</script>

<style lang="scss" scoped>

</style>