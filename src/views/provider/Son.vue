<template>
    <div>
        <h3>儿子组件</h3>
        <p>{{ msg1 }}</p>
        <p>{{ msg2 }}</p>
        <p>{{ number }}</p>
    </div>
</template>

<script setup>
import { inject } from 'vue';

let msg1 = inject("msg1");
let msg2 = inject("msg2");
const number = inject("number");
</script>

<style lang="scss" scoped>

</style>