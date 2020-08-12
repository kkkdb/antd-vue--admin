import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import originalOrders from "../views/orderManage/originalOrders.vue";
import omsOrders from "../views/orderManage/omsOrders.vue";
import originalAfterSales from "../views/orderManage/afterSaleManage/originalAfterSales.vue";
import omsAfterSales from "../views/orderManage/afterSaleManage/omsAfterSales.vue";
import batchModifyOrder from "../views/orderManage/batchModifyOrder.vue";
import returnToStorage from "../views/orderManage/afterSaleManage/returnToStorage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/dashboard",
    component: () => import("../views/index"),
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Home
      },
      {
        path: "orderManage/originalOrders",
        name: "originalOrders",
        component: originalOrders
      },
      {
        path: "orderManage/omsOrders",
        name: "omsOrders",
        component: omsOrders
      },
      {
        path: "orderManage/originalAfterSales",
        name: "originalAfterSales",
        component: originalAfterSales
      },
      {
        path: "orderManage/omsAfterSales",
        name: "omsAfterSales",
        component: omsAfterSales
      },
      {
        path: "orderManage/batchModifyOrder",
        name: "batchModifyOrder",
        component: batchModifyOrder
      },
      {
        path: "orderManage/returnToStorage",
        name: "returnToStorage",
        component: returnToStorage
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login")
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/common/404")
  },
  {
    path: "/403",
    name: "403",
    component: () => import("../views/common/403")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
