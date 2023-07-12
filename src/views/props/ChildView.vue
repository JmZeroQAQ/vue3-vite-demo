<template>
    <div>
        <h1>child</h1>
        <div>{{ msg }}</div>
        <hr>
        <div>{{ numbers }}</div>
        <hr>{{ users }}
        <hr>
        <h2>子组件改变父组件的值</h2>
        <div>{{ number }}</div>
        <button @click="() => emit('addNumber', 2)">addFatherNumber</button>
        <!-- 
            只在模板使用就不需要申明
            <button @click="() => $emit('addNumber', 2)">addFatherNumber</button>
         -->
    </div>
</template>

<script setup>
// 接收父组件的值
const props = defineProps({
    // 简写
    msg: String,
    numbers: {
        type: Array, // 类型
        required: true, // 是否必须
        default: [2, 3, 4], // 默认值
    },
    users: {
        type: Object,
        required: false,
    },
    number: {
        type: Number,
    },
});

// 如果要在script内使用就必须显示申明出来
const emit = defineEmits(["addNumber"]);
// 如果在模板使用就不需要申明,直接$emit('addNumber', 2),就可以

// script要用父组件传过来的值必须以props.的形式调用
// 下面这种写法是错误的
// console.log(msg);
// 正确写法
console.log(props.msg);

</script>

<style lang="scss" scoped>

</style>