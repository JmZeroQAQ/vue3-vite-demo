<template>
    <div>
        <h1>对数组元素进行操作的方法</h1>
        <div>{{data}}</div>
        <h2>arry to string</h2>
        <div>{{ dataStr }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([1, 2, 3, 4, 5]);

// 在末尾添加数据
// 返回值为数组长度
data.value.push(6);

// 删除末尾数据
// 返回值为弹出的数据
data.value.pop();

// 往头部添加数据
// 返回值为数组长度
data.value.unshift(0);

// 删除头部数据
// 返回值为删除的那个元素
data.value.shift();

// 删除第i个元素 splice(i, 1);
// i为下标,第二个参数为长度
// 返回值为删除的元素集合
data.value.splice(1, 1);

// 查询数组是否有这个值
// 返回值为这个值在数组的下标,如果不存在,返回-1
data.value.indexOf(3);

// 将数组转换成字符串
// join内为连接符
let dataStr = ref("");
dataStr = data.value.join("+");

// 遍历数组的每一项
data.value.forEach((item, index) => {
    console.log("data[" + index + "]: " + item);
});

// map
// 对数组内所有元素进行相同操作
// 返回值: 每个元素进行操作返回值的集合
let tmp = data.value.map((item) => {
    return item * 10;
});
console.log("tmp: " + tmp);

// fitler
// 过滤掉数组的一些元素, 传入一个匿名函数,返回值为true怎保留该元素
// 返回一个新的数组
const tmpArray = [1, 2, 3, 'a', 'b', 'c'];
tmp = tmpArray.filter((item) => {
    return 0 <= item && item <= 9;
});
// result: [1, 2, 3]
console.log("[filter] tmp: " + tmp);


// 判断数组是不是满足所有条件
const cnd = [true, true, false, true];
let res = cnd.every((item) => {
    return item;
});
// result: false
console.log("[every] res: ", res);

// reduce
// 类似累加,, pre为上一次返回的结果
res = data.value.reduce((pre, item) => {
    return pre + item;
});
// data: [1, 3, 4, 5]
// result: 13
console.log("[reduce] res: ", res);

</script>

<style lang="scss" scoped>

</style>