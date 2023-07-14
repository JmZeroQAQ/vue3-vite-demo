<template>
    <div>
        <h1>路由参数传递</h1>
        <h2>{{ route.params }}</h2>
        <router-link :to="'/router-demo/'">back</router-link>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';


// 这样就可以取出url内的参数了
const route = useRoute();
console.log(route.params);

</script>

<style lang="scss" scoped>

</style>