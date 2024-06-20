import { createRouter, createWebHistory } from "vue-router";
import { useCookies } from "vue3-cookies";
import HomeView from "../views/index/index.vue";
import PCModel from "@/views/PC-Model/index.vue";
import CPU from "@/views/CPU/index.vue";
import RAM from "@/views/RAM/index.vue";
import begin from "@/views/begin/index.vue";
import Motherboard from "@/views/Motherboard/index.vue";
import GPU from "@/views/GPU/index.vue";
import INOP from "@/views/INOP/index.vue";
import test from "@/views/test/index.vue";
import auth from "@/views/auth/index.vue";
import build from "@/views/pc-build/index.vue";
import registration from "@/views/registration/index.vue";
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
    {
      path: "/registration",
      name: "registration",
      component: registration,
    },
    {
      path: "/pc-build",
      name: "build",
      component: build,
    },
    {
      path: "/begin",
      name: "begin",
      component: begin,
    }
  ],
});
router.beforeEach((to, from) => {
  if (to.fullPath === "/test") {
    const { cookies } = useCookies();
    if (cookies.get("jwt")) {
      return true;
    } else return router.push("auth");
  } else return true;
});
export default router;
