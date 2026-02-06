<template>
  <v-container class="pt-16 pb-16 bg-white overflow-hidden" v-animate>
    <v-row align="center">
      <v-col cols="12" md="6" class="position-relative">
        <div class="position-relative pr-md-10 fade-left-element">
          <v-img
            :src="SolarSolutionImage"
            alt="Solar Energy Offers Reliable Solutions"
            rounded="xl"
            max-height="80vh"
          ></v-img>

          <v-card
            v-intersect="onIntersect"
            :class="['project-card pa-4 rounded-lg elevation-4', { 'animate-in': isVisible }]"
          >
            <div class="d-flex align-center">
              <v-progress-circular :model-value="projectCount" color="primary" size="50" width="5">
                <span class="text-caption font-weight-bold">{{ projectCount }}%</span>
              </v-progress-circular>
              <div class="ml-3 text-left">
                <div class="text-subtitle-2 font-weight-bold" style="line-height: 1">
                  {{ $t("aboutService.success").split(" ")[0] }}
                </div>
                <div class="text-subtitle-2 font-weight-bold">
                  {{ $t("aboutService.success").split(" ")[1] }}
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="pl-md-10 px-10" v-animate>
        <span class="text-overline title-bar fade-right-element">
          {{ $t("aboutService.overline") }}
        </span>

        <h2 class="text-h3 font-weight-bold text-dark-blue mt-2 mb-6 fade-up-element delay-1">
          {{ $t("aboutService.title1") }} <br />
          <span class="text-primary">{{ $t("aboutService.title2") }}</span>
        </h2>

        <p
          class="text-body-1 text-grey-darken-1 mb-8 text-center text-md-start fade-up-element delay-2"
        >
          {{ $t("aboutService.text1") }}
        </p>

        <p
          class="text-body-1 text-grey-darken-1 mb-8 text-center text-md-start fade-up-element delay-3"
        >
          {{ $t("aboutService.text2") }}
        </p>

        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="mb-6 fade-up-element"
          :class="`delay-${index + 4}`"
        >
          <div class="d-flex justify-space-between mb-2 font-weight-bold text-dark-blue">
            <span>{{ $t(`aboutService.stats.${stat.key}`) }}</span>
            <span>{{ currentStats[index] }}%</span>
          </div>
          <v-progress-linear
            v-model="currentStats[index]"
            color="primary"
            height="8"
            rounded
          ></v-progress-linear>
        </div>

        <div class="d-flex align-center mt-10 fade-up-element delay-7">
          <v-btn color="secondary" size="large" class="rounded-pill px-8 text-white mr-6">
            {{ $t("aboutService.contactBtn") }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolarSolutionImage from "@images/home/solar-energy-solutions.webp";

export default {
  data() {
    return {
      isVisible: false,
      projectCount: 0,
      targetProject: 92,
      stats: [
        { key: "one", value: 90 },
        { key: "two", value: 65 },
        { key: "three", value: 82 },
      ],
      currentStats: [0, 0, 0],
      SolarSolutionImage,
    };
  },
  methods: {
    onIntersect(isIntersecting) {
      if (isIntersecting && !this.isVisible) {
        this.isVisible = true;
        this.animateNumbers();
      }
    },
    animateNumbers() {
      const projectInterval = setInterval(() => {
        if (this.projectCount < this.targetProject) {
          this.projectCount++;
        } else {
          clearInterval(projectInterval);
        }
      }, 20);

      this.stats.forEach((stat, index) => {
        const interval = setInterval(() => {
          if (this.currentStats[index] < stat.value) {
            this.currentStats[index]++;
          } else {
            clearInterval(interval);
          }
        }, 25);
      });
    },
  },
};
</script>

<style scoped>
.project-card {
  position: absolute;
  top: 50%;
  right: -50px;
  background: white;
  width: 200px;
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  z-index: 2;
}

.project-card.animate-in {
  opacity: 1;
  transform: translateX(0);
  right: 20px;
}
</style>
