<template>
    <div>
        <h1>v-model</h1>
        <!-- 
            使用v-model实现数据的双向绑定
            即数据可以修改标签,标签可以修改数据
         -->
        <input type="text" v-model="data">
        <div>{{ data }}</div>
        <button @click="() => data = '123'">changeData</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref("");
</script>

<style lang="scss" scoped>

</style>