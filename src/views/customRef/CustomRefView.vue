<template>
    <div>
        <div>{{ num }}</div>
        <button @click="() => num++">add</button>
    </div>
</template>

<script setup>
import { customRef } from 'vue';


const num = useThrottle(30, 1000);

// 封装一个Hooks函数
// 手动实现一个节流函数Hook
function useThrottle(value, wait_time) {
    let loading = false;
    return customRef((track, trigger) => ({
        get() {
            // 依赖收集
            track();
            return value;
        },
        set(new_value) {
            if(loading) return;
            loading = true;
            value = new_value;
            // 触发更新
            trigger();

            setTimeout(() => {
                loading = false;
            }, wait_time);
        },
    }))
}
</script>

<style lang="scss" scoped>

</style>