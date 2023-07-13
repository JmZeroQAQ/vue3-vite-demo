import { ref, onMounted, onUnmounted } from 'vue'

// 即使不在组件里面,也可以使用vue3提供的函数,并且这些函数和我们直接在组件内使用没有区别
// 如onMounted, onUnmounted等生命周期函数
export function useMouse() {
    const x = ref(0);
    const y = ref(0);

    function update(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }

    onMounted(() => window.addEventListener('mousemove', update));
    onUnmounted(() => window.removeEventListener('mousemove', update));

    return {x, y}
}