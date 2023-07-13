<template>
    <div>
        <h2>父亲组件</h2>
        <p>{{ msg1 }}</p>
        <p>{{ msg2 }}</p>
        <p>{{ number }}</p>
        <Son />
    </div>
</template>

<script setup>
import { inject } from 'vue';
import Son from './Son.vue';

let msg1 = inject("msg1");
let msg2 = inject("msg2");
const number = inject("number");

</script>

<style lang="scss" scoped>

</style>