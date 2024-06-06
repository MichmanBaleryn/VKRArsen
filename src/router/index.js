import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/index/index.vue";
import PCModel from "@/views/PC-Model/index.vue";
import CPU from "@/views/CPU/index.vue";
import RAM from "@/views/RAM/index.vue";
import Motherboard from "@/views/Motherboard/index.vue";
import GPU from "@/views/GPU/index.vue";
import INOP from "@/views/INOP/index.vue";
import test from "@/views/test/index.vue";
import auth from "@/views/auth/index.vue";
import authMiddleware from "@/middleware/authMiddleware.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pc-model",
      name: "PCModel",
      component: PCModel,
    },
    {
      path: "/cpu",
      name: "CPU",
      component: CPU,
    },
    {
      path: "/ram",
      name: "RAM",
      component: RAM,
    },
    {
      path: "/gpu",
      name: "GPU",
      component: GPU,
    },
    {
      path: "/motherboard",
      name: "Motherboard",
      component: Motherboard,
    },
    {
      path: "/inop",
      name: "INOP",
      component: INOP,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/auth",
      name: "auth",
      component: auth,
      meta: {
        middleware: authMiddleware,
      },
    },
  ],
});
router.beforeEach((to, from) => {
  if (to.fullPath === "/test") return false;
  else return true;
});
export default router;
