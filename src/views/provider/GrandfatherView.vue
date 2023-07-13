<template>
    <div>
        <h1>爷爷组件</h1>
        <p>{{ number }}</p>
        <button @click="() => number++">addNumber</button>
        <Father />
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import Father from './Father.vue';

// 只能用于直系传参
provide("msg1", "hello world");
provide("msg2", "123");

const number = ref(0);
provide("number", number);

</script>

<style lang="scss" scoped>

</style>