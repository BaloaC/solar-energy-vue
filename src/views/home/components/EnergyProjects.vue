<template>
  <v-container fluid class="py-16" style="background-color: #f5f5f5" v-animate>
    <v-container style="max-width: 1200px">
      <v-row align="end" class="mb-10">
        <v-col cols="12" md="8">
          <div class="d-flex align-center mb-4">
            <span class="text-overline title-bar fade-right-element">
              {{ $t("portfolio.overline") }}
            </span>
          </div>
          <h2 class="text-h3 font-weight-bold text-dark-blue px-5 px-md-0 fade-up-element delay-1">
            {{ $t("portfolio.title") }}
          </h2>
        </v-col>
        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-btn
            color="primary"
            rounded="xl"
            size="large"
            class="px-8 font-weight-bold text-uppercase fade-up-element delay-2"
            elevation="0"
          >
            {{ $t("portfolio.button") }}
          </v-btn>
        </v-col>
      </v-row>

      <div class="projects-swiper-wrapper">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :pagination="{ clickable: true, el: '.projects-pagination' }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 4 },
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(project, i) in projects" :key="i" v-slot="{ isActive }">
            <v-card class="project-card" elevation="0">
              <div class="image-container">
                <img :src="project.image" :alt="project.title" class="project-img" />

                <div
                  v-if="project.badge"
                  class="project-badge pa-4 bg-white rounded-lg shadow-lg"
                  :class="{ 'badge-active': isActive }"
                >
                  <span class="text-caption text-primary font-weight-bold d-block">
                    {{ $t("portfolio.badge") }}
                  </span>
                  <span class="text-subtitle-2 font-weight-bold text-dark-blue">
                    {{ project.title }}
                  </span>
                </div>
              </div>
            </v-card>
          </swiper-slide>
        </swiper>

        <div class="projects-pagination d-flex justify-center mt-10"></div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import proj1 from "@images/home/project-1.webp";
import proj2 from "@images/home/project-2.webp";
import proj3 from "@images/home/project-3.webp";
import proj4 from "@images/home/project-4.webp";
import proj5 from "@images/home/project-5.webp";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Pagination, Autoplay],
      projects: [
        { title: this.$t("portfolio.projects[0].title"), image: proj1, badge: true },
        { title: this.$t("portfolio.projects[1].title"), image: proj2, badge: true },
        { title: this.$t("portfolio.projects[2].title"), image: proj3, badge: true },
        { title: this.$t("portfolio.projects[3].title"), image: proj4, badge: true },
        { title: this.$t("portfolio.projects[4].title"), image: proj5, badge: true },
      ],
    };
  },
};
</script>

<style scoped>
.project-card {
  border-radius: 24px !important;
  overflow: hidden;
  height: 450px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

.project-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.badge-active {
  opacity: 1;
  transform: translateY(0);
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background-color: #e0e0e0;
  opacity: 1;
  margin: 0 6px !important;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: rgb(var(--v-theme-primary)) !important;
  width: 14px;
  height: 14px;
}
</style>
