import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/css/main.css";
import App from "./App.vue";
import router from "./router";

import vuetify from "./plugins/vuetify";

// i18n
import { createI18n } from "vue-i18n";
import { messages } from "./i18n/index";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "es",
  messages,
});

const app = createApp(App);

app.directive("animate", {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("animate-active");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px",
      },
    );
    observer.observe(el);
  },
});

app.use(vuetify);
app.use(router);
app.use(createPinia());
app.use(i18n);

const appName = "Solar Energy";

app.mount("#app");
