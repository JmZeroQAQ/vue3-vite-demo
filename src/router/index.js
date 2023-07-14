import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/Layout.vue";

// 配置项目
export const routes = [
  { path: "/", redirect: "/home/" },
  {
    path: "/home/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/home/HomeView.vue"),
      },
    ],
  },
  {
    path: "/other/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/other/OtherView.vue"),
      },
    ],
  },
  {
    path: "/404/",
    component: Layout,
    children: [
      {
        path: "", // 在这里会被拼接成 /404
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/404/NotFoundView.vue"),
      },
    ],
  },
  {
    path: "/ref/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/ref/RefView.vue"),
      },
    ],
  },
  {
    path: "/reactive/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/reactive/ReactiveView.vue"),
      },
    ],
  },
  {
    path: "/toref-torefs/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/toref-torefs/ToRef-ToRefsView.vue"),
      },
    ],
  },
  {
    path: "/customRef/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/customRef/CustomRefView.vue"),
      },
    ],
  },
  {
    path: "/computed/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/computed/ComputedView.vue"),
      },
    ],
  },
  {
    path: "/watch/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/watch/WatchView.vue"),
      },
    ],
  },
  {
    path: "/watchEffect/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/watchEffect/WatchEffectView.vue"),
      },
    ],
  },
  {
    path: "/props/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/props/PropsView.vue"),
      },
    ],
  },
  {
    path: "/v-model/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/v-model/VModelView.vue"),
      },
    ],
  },
  {
    path: "/array/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/array/Array.vue"),
      },
    ],
  },
  {
    path: "/provier/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/provider/GrandfatherView.vue"),
      },
    ],
  },
  {
    path: "/useHooks/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/useHooks/useHooksView.vue"),
      },
    ],
  },
  {
    path: "/keep-alive/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/keep-alive/KeepAliveView.vue"),
      },
    ],
  },
  {
    path: "/suspense/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/suspense/SuspenseView.vue"),
      },
    ],
  },
  {
    path: "/recursion/",
    component: Layout,
    children: [
      {
        path: "",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/recursion/RecursionView.vue"),
      },
    ],
  },
];

// 路由实例
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
