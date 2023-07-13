<template>
    <div>
        <h1>Child2</h1>
    </div>
</template>

<script setup>

// 顶层异步会影响组件的加载
await new Promise(resolve => {
    setTimeout(() => {
        console.log("123");
        resolve();
    }, 2000);
});

</script>

<style lang="scss" scoped>

</style>