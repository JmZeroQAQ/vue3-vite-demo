<template>
    <div class="con">
        <div>
            <button @click="flag = !flag">{{ flag ? "off" : "on" }}</button>
            <button @click="activeIndex=0">0</button>
            <button @click="activeIndex=1">1</button>
        </div>
        <!-- 
            即使flag === false, Child组件也不会被销毁
         -->
        <!-- <keep-alive>
            <Child v-if="flag" />
        </keep-alive> -->

        <!-- 
            一个keep-alive只能缓存一个组件
            但是可以通过这样的方式让一个keep-alive缓存两个组件
            加上 :include="['Child1']" 属性让keep-alive指定缓存Child1
                 :exclude="['Child1']" 除了Child1都缓存
         -->
        <keep-alive :include="['Child1']">
            <component :is="activeIndex === 0 ? Child1 : Child2" />
        </keep-alive>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

const flag = ref(true);
const activeIndex = ref(0);

</script>

<style lang="scss" scoped>
.con {
    padding-top: 500px;
}
</style>