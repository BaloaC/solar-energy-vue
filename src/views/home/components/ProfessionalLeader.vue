<template>
  <v-container fluid class="py-16 bg-white overflow-visible" v-animate>
    <v-container style="max-width: 1200px" class="position-relative">
      <v-row align="center">
        <v-col cols="12" md="6" class="py-12">
          <div class="d-flex align-center justify-center justify-lg-start mb-4">
            <span class="text-overline title-bar fade-right-element">
              {{ $t("leaderSection.overline") }}
            </span>
          </div>

          <h2 class="text-h3 font-weight-bold text-dark-blue mb-6 fade-up-element delay-1">
            {{ $t("leaderSection.title1") }} <br />
            <span class="text-primary">{{ $t("leaderSection.title2") }}</span>
          </h2>

          <p
            class="leader-paragraph mx-auto mx-md-0 text-body-1 text-grey-darken-1 mb-8 text-center text-lg-start fade-up-element delay-2"
            style="max-width: 500px"
          >
            {{ $t("leaderSection.text") }}
          </p>

          <div
            class="border-question ps-6 py-8 text-center text-lg-start fade-up-element delay-3"
            style="border-top: 1px solid #dededea7"
          >
            <p class="text-h5 font-weight-bold text-dark-blue mb-1">
              {{ $t("faq.overline") }}
            </p>
            <p class="text-h5 font-weight-bold text-primary">
              {{ $t("hero.helpText") }}
              <a href="tel:+12506502000" class="text-decoration-none text-primary"
                >+1 250 650 2000</a
              >
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="position-relative">
          <div class="fade-left-element">
            <v-img
              :src="leaderImage"
              alt="Professional Leader"
              class="leader-img"
              width="100%"
              height="100%"
              max-height="80vh"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import leaderImage from "@images/home/leader-professional.webp";

export default {
  data() {
    return {
      leaderImage,
    };
  },
};
</script>

<style scoped>
.leader-img {
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.05));
  transition: transform 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

.leader-img:hover {
  transform: scale(1.02);
}
</style>
