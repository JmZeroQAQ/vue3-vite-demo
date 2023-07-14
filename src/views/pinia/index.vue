<template>
    <div>
        <h1>pinia的使用</h1>
        <h2>直接渲染</h2>
        <h3>{{ numStore.num }}</h3>
        <!-- 
            使用计算属性
         -->
        <h3>{{ numStore.doubleNum }}</h3>
        
        <hr>
        <h2>解构后渲染</h2>
        <h3>{{ num }}</h3>
        <h3>{{ doubleNum }}</h3>

        <hr>
        <!-- 
            可以直接修改,也可以使用actions内的方法修改
         -->
        <button @click="numStore.num++">add1</button>
        <button @click="increaseNum">add2</button>
        <button @click="decreaseNum">sub1</button>
        <button @click="asyncAdd">aync add</button>
    </div>
</template>

<script setup>
import { useNumStore } from '@/store/num.js'
import { storeToRefs } from 'pinia'

const numStore = useNumStore();

console.log(numStore.doubleNum);

// 解构成ref
const {num, doubleNum} = storeToRefs(numStore);

// 解构方法
const {increaseNum, decreaseNum, asyncChangeNum} = numStore;

async function asyncAdd() {
    // 等待promise执行完毕
    await asyncChangeNum();
    console.log("异步完成了");
}

</script>

<style lang="scss" scoped>

</style>