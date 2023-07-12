<template>
    <div>
        <h1>toRef & toRefs</h1>
        <p>{{ User }}</p>
        <div>{{ my_name }}</div>
        <button @click="() => User.name = 'Mogu'">changeName</button>
        <div>{{ name }}</div>
        <div>{{ age }}</div>
        <div>{{ sex }}</div>
    </div>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue';

const User = reactive({
    name: "JmZeroQAQ",
    age: 20,
    sex: "man",
});

// name也是响应对象,并且和User绑定
let my_name = toRef(User, "name");

// 结构写法,name,age,sex都是响应对象,且和User绑定
let {name, age, sex} = toRefs(User);

</script>

<style lang="scss" scoped>

</style>