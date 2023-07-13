<template>
    <div>
        <Suspense>
            <Child1 />
            <!-- 
                当Child1还没加载完成先显示template的内容
                Suspense的主要功能就是占位
             -->
            <template #fallback>
                loading...
            </template>
        </Suspense>
        <hr>
        <Suspense>
            <Child2 />
            <!-- 
                当Child1还没加载完成先显示template的内容
             -->
            <template #fallback>
                loading...
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import Child1 from './Child1.vue';
import { defineAsyncComponent } from 'vue';

const Child2 = defineAsyncComponent(() => import('./Child2.vue'));

</script>

<style lang="scss" scoped>

</style>