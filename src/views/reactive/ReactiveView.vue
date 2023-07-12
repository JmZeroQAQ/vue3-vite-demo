<template>
    <div>
        <h1>reactive的使用</h1>

        <div>{{ User.name }}</div>
        <div>{{ User.age }}</div>

        <button @click="() => User.name = 'Mogu'">changeName</button>
        <button @click="changeUser" >changeUser</button>
        <!-- 传值 -->
        <button @click="() => userPrint('hhh')" >print</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const User = reactive({
    name: "JmZeroQAQ",
    age: 20,
});

const changeUser = () => {
    User.name = "Ranunculus";
    User.age = 21;
};

const userPrint = (msg) => {
    console.log(msg);
};


</script>

<style lang="scss" scoped>

</style>