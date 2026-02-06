<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav>
      <v-list-item
        v-for="item in listItems"
        :key="item"
        :to="'#' + item"
        :title="$t(`navbar.${item}`)"
        :value="item"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat fixed :class="['px-md-10 navbar-transition', { scrolled: isScrolled }]">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="d-flex align-center">
      <div class="d-flex align-center">
        <a href="./">
          <img
            src="@images/solar-energy-logo.webp"
            alt="solar energy logo"
            class="logo-img"
            loading="lazy"
          />
        </a>
      </div>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down align-center justify-center">
      <v-btn
        v-for="item in listItems"
        :key="item"
        variant="plain"
        :to="'#' + item"
        class="text-none font-weight-bold nav-link"
        color="black"
      >
        {{ $t(`navbar.${item}`) }}
      </v-btn>

      <div class="d-inline-flex">
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <div v-bind="props" class="d-flex align-center cursor-pointer ml-4">
              <v-icon :icon="mdiTranslate" size="small" class="mr-1"></v-icon>
              <span class="text-uppercase font-weight-bold" style="font-size: 0.7rem">
                {{ $i18n.locale }}
              </span>
              <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
            </div>
          </template>

          <v-list density="compact" class="mt-2">
            <v-list-item
              v-for="lang in langs"
              :key="lang.value"
              :value="lang.value"
              @click="$i18n.locale = lang.value"
              :active="$i18n.locale === lang.value"
              color="primary"
            >
              <v-list-item-title class="font-weight-bold" style="font-size: 0.75rem">
                {{ lang.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mdiTranslate } from "@mdi/js";

export default {
  data() {
    return {
      listItems: [
        "home",
        "about",
        "service",
        "work",
        "portfolio",
        "faq",
        "team",
        "blog",
        "contact",
      ],
      drawer: false,
      isScrolled: false,
      mdiTranslate,
    };
  },
  computed: {
    langs() {
      return [
        { title: this.$t("language.english"), value: "en" },
        { title: this.$t("language.spanish"), value: "es" },
      ];
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
.navbar-transition {
  background-color: transparent !important;
  transition: all 0.4s ease-in-out !important;
  padding-top: 20px;
  padding-bottom: 20px;
}

.scrolled {
  background-color: white !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

.logo-img {
  max-height: 80px;
  max-width: 120px;
  transition: max-height 0.4s ease;
}

.scrolled .logo-img {
  max-height: 50px;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>
