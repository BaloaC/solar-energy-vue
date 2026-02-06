import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/index.vue";
import QuotationView from "../views/quotation/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/quotation",
      name: "quotation",
      component: QuotationView,
    },
  ],
});

export default router;
