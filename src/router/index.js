import { createRouter, createWebHistory } from "vue-router";
import BasicLayout from "../layouts/BasicLayout.vue";
import RouteView from "../layouts/RouteView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    meta: { title: "Home" },
    component: BasicLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: { title: "Dashboard", icon: "DashboardOutlined" },
        redirect: "/dashboard/monitor",
        component: RouteView,
        children: [
          {
            path: "workspace",
            name: "workspace",
            meta: { title: "Workspace", icon: "icon-antdesign" },
            component: () => import("../views/page1.vue"),
          },
          {
            path: "monitor",
            name: "monitor",
            meta: { title: "Monitor", icon: "icon-icon-test" },
            component: () => import("../views/detail.vue"),
          },
        ],
      },
      {
        path: "/form",
        name: "form",
        meta: { title: "Form", icon: "FormOutlined" },
        redirect: "/form/basic-form",
        component: RouteView,
        children: [
          {
            path: "basic-form",
            name: "basic-form",
            meta: { title: "Basic Form", icon: "icon-icon-test" },
            component: () => import("../views/page1.vue"),
          },
        ],
      },
      {
        path: "/single",
        name: "single",
        meta: { title: "Single", icon: "SettingOutlined" },
        component: () => import("../views/page1.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
