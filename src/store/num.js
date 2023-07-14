import { defineStore } from "pinia";
import { ref, computed } from 'vue';

// 第一个参数为id,用来做模块划分
export const useNumStore = defineStore('numStore', () => {
    // 状态设定
    const num = ref(10);
    // 计算属性
    const doubleNum = computed(() => num.value * 2);
    // 函数
    function increaseNum() {
        num.value++;
    }

    function decreaseNum() {
        num.value--;
    }

    async function asyncChangeNum() {
        // 异步方法建议使用Promise包裹
        return new Promise(resolve => {
            setTimeout(() => {
                num.value += 2;
                // 切换状态已经成功
                resolve();
            }, 2000);
        });
    }

    return {
        num,
        doubleNum,
        increaseNum,
        decreaseNum,
        asyncChangeNum,
    }
});