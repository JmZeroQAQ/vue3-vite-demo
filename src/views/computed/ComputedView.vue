<template>
    <div>
        <h2>{{ num }}</h2>
        <button @click="num++">addnum</button>
        <h2>{{ double_num }}</h2>
        <h2>{{ double_num }}</h2>
        <h2>{{ double_num }}</h2>
        <h2>{{ double_num }}</h2>
        <hr>
        <h2>{{ plusOne }}</h2>
        <button @click="plusOne = 3">change</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const num = ref(2);

// 返回一个readonly的ref类型
const double_num = computed(() => {
    num.value * 2;
    // 每次改变只触发一次,即使有多个标签用到了double_num
    console.log("changed");
});

// 返回既可读,也可写的ref类型
const count = ref(1);
const plusOne = computed({
    get: () => count.value + 1,
    // val为3,plusOne结果为3
    // 因为count.value变了,所以plusOne也会跟着改变
    set: (val) => count.value = val - 1, 
});

</script>

<style lang="scss" scoped>

</style>