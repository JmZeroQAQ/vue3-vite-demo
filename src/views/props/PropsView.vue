<template>
    <div>
        <h1>father</h1>
        <ChildView 
        :msg="'hello world'" 
        :numbers="[1, 2, 3, 4]" 
        :users="{name: 'JmZeroQAQ'}" 

        :number="number"
        @addNumber="(val) => number += val"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildView from './ChildView.vue';

const number = ref(1);

</script>

<style lang="scss" scoped>

</style>