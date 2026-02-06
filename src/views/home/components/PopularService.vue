<template>
  <v-container fluid class="bg-secondary py-16" v-animate>
    <v-container style="max-width: 1200px">
      <v-row justify="center" class="text-center mb-10">
        <v-col cols="12" md="8">
          <span class="d-block text-overline text-primary font-weight-black fade-up-element">
            {{ $t("ourService.overline") }}
          </span>
          <div class="reveal-mask mt-2 mb-6">
            <h2 class="text-h3 font-weight-bold text-white reveal-content delay-1">
              {{ $t("ourService.title") }}
            </h2>
          </div>
        </v-col>
      </v-row>

      <div class="swiper-container-wrapper">
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :loop="!$vuetify.display.smAndDown"
          :autoplay="{ delay: 5000 }"
          :pagination="{ clickable: true, el: '.custom-pagination' }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 },
          }"
          :enabled="!$vuetify.display.smAndDown"
          :modules="modules"
          :class="['mySwiper', { 'swiper-as-column': $vuetify.display.smAndDown }]"
        >
          <swiper-slide v-for="(service, i) in services" :key="i">
            <v-card
              variant="flat"
              class="ma-2 rounded-xl overflow-hidden service-card border-thin"
              style="border-color: #dedede24 !important"
            >
              <div
                v-if="service.special"
                class="bg-primary fill-height d-flex align-center pa-8 text-center flex-column justify-center"
                style="min-height: 450px"
              >
                <v-icon :icon="icons.mdiSolarPower" size="64" class="mb-4"></v-icon>
                <v-card-title class="text-h5 font-weight-bold text-white mb-2 text-wrap">
                  {{ $t(`ourService.cards.${service.key}.title`) }}
                </v-card-title>
                <v-card-text class="text-body-2 text-white opacity-90">
                  {{ $t(`ourService.cards.${service.key}.description`) }}
                </v-card-text>
              </div>

              <div v-else>
                <v-img :src="service.image" height="250" cover class="align-end zoom-image"></v-img>
                <v-card-item class="text-center pa-6">
                  <v-card-title class="text-h5 font-weight-bold text-white mb-3">
                    {{ $t(`ourService.cards.${service.key}.title`) }}
                  </v-card-title>
                  <v-card-subtitle class="text-body-2 text-grey-lighten-1 text-wrap mb-6">
                    {{ $t(`ourService.cards.${service.key}.description`) }}
                  </v-card-subtitle>
                  <v-btn
                    variant="text"
                    color="primary"
                    class="font-weight-bold"
                    :append-icon="icons.mdiChevronRight"
                    rounded="pill"
                  >
                    {{ $t("ourService.readMore") }}
                  </v-btn>
                </v-card-item>
              </div>
            </v-card>
          </swiper-slide>
        </swiper>

        <div
          v-if="!$vuetify.display.smAndDown"
          class="custom-pagination d-flex justify-center mt-8"
        ></div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import service1 from "@images/home/service-solar-panel-install.webp";
import service2 from "@images/home/service-wind-farm.webp";
import service3 from "@images/home/service-ev-charger.webp";
import service4 from "@images/home/service-energy-future.webp";
import { mdiChevronRight, mdiSolarPower, mdiCircle } from "@mdi/js";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Autoplay, Pagination],
      icons: { mdiChevronRight, mdiSolarPower, mdiCircle },
      services: [
        {
          key: "one",
          image: service1,
        },
        {
          key: "two",
          image: service2,
        },
        {
          key: "three",
          image: service3,
        },
        {
          key: "four",
          image: service4,
        },
      ],
    };
  },
};
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease;
  background-color: inherit;
}

:deep(.swiper-as-column .swiper-wrapper) {
  display: flex !important;
  flex-direction: column !important;
  height: auto !important;
  transform: none !important;
}

:deep(.swiper-as-column .swiper-slide) {
  width: 100% !important;
  height: auto !important;
  margin-bottom: 16px;
}

:deep(.swiper-pagination-bullet) {
  background: #616161;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: rgb(var(--v-theme-primary)) !important;
  width: 12px;
  height: 12px;
}
</style>
