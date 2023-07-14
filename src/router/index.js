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
        // 独享路由
        beforeEnter: (to, from) => {
          console.log("onEnterEach");
          console.log(to.path);
          console.log(from.path);

          return true;
        }
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
  {
    path: "/router-demo/",
    component: Layout,
    children: [
      {
        path: "",
        demo: "router-demo",
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/router-demo/RouterDemoView.vue"),
      },
    ],
  },
  {
    path: "/router-page1/",
    component: Layout,
    children: [
      {
        path: "",
        name: "router-page1", //别名
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/router-demo/Page1.vue"),
      },
    ],
  },
  {
    // 这里会拼成 /router-page2/xxx/
    path: "/router-page2",
    component: Layout,
    children: [
      {
        path: ":name/",
        name: "router-page2", //别名
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/router-demo/Page2.vue"),
      },
    ],
  },
  {
    path: "/router-page3/",
    component: Layout,
    children: [
      {
        path: '',
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/router-demo/Page3.vue"),
      },
    ],
  },
  {
    path: "/router-guard/",
    component: Layout,
    children: [
      {
        path: '',
        // 动态导入组件,只有当导入这个地址的时候才会导入这个组件
        // 又叫路由懒加载
        component: () => import("@/views/router-guard/index.vue"),
      },
    ],
  },
];

// 路由实例
const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 前置路由守卫，常用于权限判断
router.beforeEach((to, from) => {

  // to.path是目标地址
  console.log(to.path);
  // from.path是起始地址
  console.log(from.path);

  // 返回false就是不跳转到该路由
  if(to.path === "/router-demo/")
    return false;

  // 如果目标是watch，则重定向到/ 
  if(to.path === "/watch/")
    return {path: "/"} // 和router.push一样的用法
  
  return true;
});

// 后置路由守卫，用处不大，常用于进度条
router.afterEach((to, from) => {
  console.log("afterEach")
  console.log(to);
  console.log(from);
});

export default router;
