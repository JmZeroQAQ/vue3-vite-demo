<template>
    <div>
        <h1>递归组件</h1>
        <Tree :data="treeData" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Tree from './Tree.vue';

const treeData = reactive([
    {
        name: "小橘猫1",
        isShow: true,
        children: [
            {
                name: "小橘猫1-1",
                isShow: true,
                children: [
                    {
                        name: "小橘猫1-1-1",
                        isShow: true,
                    },
                    {
                        name: "小橘猫1-1-2",
                        isShow: true,
                    }
                ]
            },
            {
                name: "小橘猫1-2",
                isShow: true,
            },
        ]
    },
    {
        name: "小橘猫2",
        isShow: true,
        children: [
            {
                name: "小橘猫2-1",
                isShow: true,
                children: [
                    {
                        name: "小橘猫2-1-1",
                        isShow: true,
                    },
                    {
                        name: "小橘猫2-1-2",
                        isShow: true,
                    }
                ]
            }
        ]
    },
    {
        name: "小橘猫3",
        isShow: true,
        children: [
            {
                name: "小橘猫3-1",
                isShow: true,
                children: [
                    {
                        name: "小橘猫3-1-1",
                        isShow: true,
                    },
                    {
                        name: "小橘猫3-1-2",
                        isShow: true,
                    }
                ]
            }
        ]
    },
]);

</script>

<style lang="scss" scoped>

</style>