<template>
  <v-container fluid class="bg-dark-blue py-16" v-animate>
    <v-container style="max-width: 1200px">
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12">
          <div class="reveal-mask d-inline-block">
            <span
              class="text-overline text-primary text-uppercase font-weight-black reveal-content"
            >
              {{ $t("testimonials.overline") }}
            </span>
          </div>

          <div class="reveal-mask mt-2">
            <h2 class="text-h3 font-weight-bold text-white reveal-content delay-1">
              {{ $t("testimonials.title") }}
            </h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(testimonial, i) in testimonials"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="fade-up-element"
          :class="`delay-${i + 1}`"
        >
          <v-card
            variant="outlined"
            class="testimonial-card pa-6 h-100 rounded-xl"
            style="border-color: rgba(255, 255, 255, 0.1) !important"
          >
            <p class="text-body-2 text-grey-lighten-1 mb-6" style="line-height: 1.6">
              {{ testimonial.text }}
            </p>

            <div class="mt-auto d-flex align-center flex-wrap ga-2">
              <h4 class="text-subtitle-1 font-weight-bold text-white mb-0">
                {{ testimonial.name }}
              </h4>
              <span class="text-caption text-primary font-weight-bold">
                • {{ testimonial.role }}
              </span>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-10 fade-element delay-3">
        <div class="d-flex align-center">
          <v-icon color="grey-darken-3" size="10" class="mx-1">mdi-circle</v-icon>
          <v-icon color="primary" size="12" class="mx-1">mdi-circle</v-icon>
          <v-icon color="grey-darken-3" size="10" class="mx-1">mdi-circle</v-icon>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: this.$t("testimonials.cards[0].name"),
          role: this.$t("testimonials.cards[0].role"),
          text: this.$t("testimonials.cards[0].text"),
        },
        {
          name: this.$t("testimonials.cards[1].name"),
          role: this.$t("testimonials.cards[1].role"),
          text: this.$t("testimonials.cards[1].text"),
        },
        {
          name: this.$t("testimonials.cards[2].name"),
          role: this.$t("testimonials.cards[2].role"),
          text: this.$t("testimonials.cards[2].text"),
        },
        {
          name: this.$t("testimonials.cards[3].name"),
          role: this.$t("testimonials.cards[3].role"),
          text: this.$t("testimonials.cards[3].text"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-dark-blue {
  background-color: #0a1122 !important;
}

.testimonial-card {
  background-color: rgba(255, 255, 255, 0.03) !important;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  background-color: rgba(255, 255, 255, 0.07) !important;
  transform: translateY(-5px);
}
</style>
