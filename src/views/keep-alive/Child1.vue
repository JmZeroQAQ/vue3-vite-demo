<template>
    <div>
        <h1>Child1</h1>
        <input type="text">
    </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';


// 当被keep-aive包裹时会额外有onActivated和onDeactivated这两个生命周期函数
// 切换显示时执行
onActivated(() => {
    console.log("activated");
});
// 切换不显示时执行
onDeactivated(() => {
    console.log("deactivated");
});

onMounted(() => {
    console.log("onMounted");
});

onUnmounted(() => {
    console.log("onUnmounted");
})
</script>

<style lang="scss" scoped>

</style>