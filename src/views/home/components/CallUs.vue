<template>
  <section class="cta-section position-relative">
    <v-img :src="backgroundWind" height="450" cover class="align-center">
      <div class="cover-gradient"></div>
      <v-container style="max-width: 1200px" class="position-relative" v-animate>
        <v-card elevation="10" class="cta-card pa-8 pa-md-12 rounded-xl" style="z-index: 2">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <div class="d-flex align-center mb-2 reveal-mask">
                <span class="text-overline title-bar reveal-content">
                  {{ $t("consultation.overline") }}
                </span>
              </div>

              <div class="reveal-mask">
                <h2
                  class="text-consultation text-h5 text-md-h4 font-weight-bold text-dark-blue mb-2 reveal-content delay-1"
                  style="max-width: 24ch"
                >
                  {{ $t("consultation.title1") }}
                  <span class="text-primary">{{ $t("consultation.title2") }}</span>
                </h2>
              </div>
            </v-col>

            <v-col cols="12" sm="8" md="5" class="fade-up-element delay-2">
              <v-no-ssr>
                <v-form @submit.prevent>
                  <v-text-field
                    :placeholder="$t('consultation.placeholder')"
                    variant="outlined"
                    rounded="pill"
                    bg-color="grey-lighten-4"
                    hide-details
                    class="custom-input"
                  >
                    <template v-slot:append-inner>
                      <v-btn
                        color="primary"
                        rounded="pill"
                        size="large"
                        class="font-weight-bold text-uppercase"
                        elevation="0"
                      >
                        {{ $t("consultation.btn") }}
                      </v-btn>
                    </template>
                  </v-text-field>

                  <v-btn
                    color="primary"
                    rounded="xl"
                    size="x-large"
                    class="px-8 font-weight-bold text-uppercase mt-4 w-100 d-sm-none"
                    elevation="0"
                  >
                    {{ $t("consultation.btn") }}
                  </v-btn>
                </v-form>
              </v-no-ssr>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-img>
  </section>
</template>

<script>
import backgroundWind from "@images/home/background-wind-turbines.webp";

export default {
  data() {
    return {
      backgroundWind,
    };
  },
};
</script>

<style scoped>
.cover-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  background: linear-gradient(
    0deg,
    rgb(19 28 44) 0%,
    rgb(19 28 44 / 80%) 50%,
    rgb(19 28 44 / 60%) 100%
  );
}

@media (max-width: 990px) {
  .text-consultation {
    max-width: 100% !important;
  }
}

@media (max-width: 600px) {
  .text-consultation {
    font-size: 2rem !important;
  }

  .text-consultation span {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
  }
}

@media (max-width: 600px) {
  .custom-input :deep(.v-field__append-inner) {
    display: none;
  }
}
</style>
