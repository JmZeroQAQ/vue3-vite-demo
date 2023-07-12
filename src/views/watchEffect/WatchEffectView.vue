<template>
    <div>
        <h1>watchEffect</h1>
        <div>{{ num }}</div>
        <button @click="num++">addNum</button>
        <button @click="stop">stopWatch</button>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const num = ref(1);

// 初始化执行回调函数里面代码
// 当回调函数有响应式数据变化时,执行回调函数代码
// 调用stop后也会执行一次cleanUp回调
const stop = watchEffect(onCleanup => {
    console.log(num.value);
    onCleanup(() => {
        console.log("clear");
    })
},
{ // 配置项可选
    flush: 'pre', // 'pre': 在dom更新前执行回调函数代码, 'post': 当dom更新后执行回调函数代码, 'sync': 同步更新执行回调函数代码
});
</script>

<style lang="scss" scoped>

</style>