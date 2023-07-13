<template>
    <div>
        {{ `${x}, ${y}` }}
    </div>
</template>

<script setup>
import { useMouse } from '@/hooks/useMouse.js'

const {x, y} = useMouse();

</script>

<style lang="scss" scoped>

</style>