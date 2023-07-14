<template>
    <div>
        <ul>
            <li v-for="item in data" :key="item.name">
                {{ item.name }}
                <!-- 
                    属性后面+?的作用：
                    如果存在这个属性则正常访问，否则返回undefined
                 -->
                <button 
                @click="item.isShow = !item.isShow" 
                v-if="item.children?.length">
                    {{ item.isShow === true ? "-" : "+" }}
                </button>
                <Tree v-show="item.isShow" :data="item.children" />
            </li>
        </ul>
    </div>
</template>

<script setup>

defineProps({
    data: Array,
});

</script>

<style lang="scss" scoped>

</style>