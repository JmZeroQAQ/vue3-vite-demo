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
        path: "", // 在这里会被拼接成 /404
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
        path: "", // 在这里会被拼接成 /404
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/reactive/ReactiveView.vue"),
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
