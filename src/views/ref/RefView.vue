<template>
    <div>
        <h1>{{ content }}</h1>
        <button @click="setContent">setContent</button>

        <!-- 获取dom元素，ref后接的名字要和变量名一致 -->
        <h1 ref="h1Tag" >hello world</h1>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// 普通响应式变量
const content = ref(""); // ()里面是默认值

const setContent = () => {
    content.value = "Hello World!";
}

// 获取dom元素，变量名要和ref=""里面的一样
const h1Tag = ref(null);

onMounted(() => {
    console.log(h1Tag.value);
})

</script>

<style lang="scss" scoped>

</style>