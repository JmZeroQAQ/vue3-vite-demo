<template>
    <div>
        <h1>page3</h1>
        <router-link :to="'/router-demo/'">back</router-link>
        <hr>
        <!-- 
            route已经被注入全局，所以可以直接加$符号使用
         -->
        <h2>{{ $route.query }}</h2>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>