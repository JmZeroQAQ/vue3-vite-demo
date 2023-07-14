import { defineStore } from "pinia";

// 第一个参数为id,用来做模块划分
export const useNumStore = defineStore('numStore', {
    // 状态设定
    state: () => {
        return {
            num: 10,
        }
    },
    // 计算属性
    getters: {
        doubleNum() {
            return this.num * 2;
        },
    },
    // 函数
    actions: {
        increaseNum() {
            this.num++;
        },
        decreaseNum() {
            this.num--;
        },
        asyncChangeNum() {
            // 异步方法建议使用Promise包裹
            return new Promise(resolve => {
                setTimeout(() => {
                    this.num += 2;
                    // 切换状态已经成功
                    resolve();
                }, 2000);
            });
        }
    }
})