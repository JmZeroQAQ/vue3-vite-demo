<template>
    <div>
        <h1>watch</h1>
        <div>{{ num }}</div>
        <button @click="num++">addNum</button>
        <hr>
        <div>{{ User }}</div>
        <button @click="User.name = 'Mogu'">changeUser</button>
        <hr>
        <h2>侦听多个数据的变化</h2>
        <div>{{ num }}</div>
        <div>{{ User }}</div>
        <button @click="num++">addNum</button>
        <button @click="User.age = 19">changeUserAge</button>
        <hr>
        <h2>onCleanup</h2>
        <div>{{ data }}</div>
        <button @click="data++">addData</button>
    </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';

const num = ref(0);
// 当num发生改变时,会回调含newVal,oldVal参数的匿名函数
watch(num, (newVal, oldVal) => {
    console.log("newVal: " + newVal);
    console.log("oldVal: " + oldVal);
});

const User = reactive({
    name: "JmZeroQAQ",
    age: 20,
});

// 侦听reactive对象
// newVal和oldVal是同个地址,所以内容都是一样的
watch(User, (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
    console.log(newVal === oldVal); // true
    console.log(newVal.name);
    console.log(oldVal.name);
});

// 侦听User的某个属性需要这样写,用函数返回
watch(() => User.name, (newVal, oldVal) => {
    console.log("newVal: " + newVal);
    console.log("oldVal: " + oldVal);
});

// 侦听User的属性需要用函数返回
// 当数组内有成员改变时都会侦听到
// newVal,和oldVal为数组
watch([num, () => User.age], (newVal, oldVal) => {
    console.log("newVal: " + newVal);
    console.log("oldVal: " + oldVal);
}, 
{
    // 默认为 false
    immediate: false, // 为true时当创建侦听的时候会回调第二个函数(newVal, oldVal)
    // 默认为pre
    flush: "pre", // 'pre': 在dom更新前执行第二个函数, 'post': 当dom更新后执行第二个函数, 'sync': 同步更新
});

const data = ref(1);
watch(data, (newVal, oldVal, onCleanup) => {
    console.log(newVal);
    console.log(oldVal);
    
    // 第一次侦听触发不会执行,以后每次侦听触发后都会先调用onCleanup传入的匿名函数, 再回调第二个函数
    // 当侦听属性被销毁时也会执行传入的匿名函数
    onCleanup(() => {
        // do something
        console.log("Cleanup")
    })
});

// watch()函数还会返回一个函数,调用这个函数即可停止对对应变量的侦听

</script>

<style lang="scss" scoped>

</style>