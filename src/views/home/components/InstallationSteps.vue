<template>
  <div style="max-width: 1200px; margin-inline: auto">
    <v-container class="py-16 bg-white" v-animate>
      <v-row justify="center" class="text-center mb-12">
        <v-col cols="12" md="8">
          <span class="text-overline text-primary font-weight-black d-block fade-up-element">
            {{ $t("ourProcess.overline") }}
          </span>
          <div class="reveal-mask mt-2">
            <h2 class="text-h3 font-weight-bold text-dark-blue reveal-content delay-1">
              {{ $t("ourProcess.title") }}
              <br />
              <span class="text-primary">Step by Step</span>
            </h2>
          </div>
        </v-col>
      </v-row>

      <v-row class="position-relative">
        <v-col
          v-for="(step, i) in steps"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="text-center fade-up-element"
          :class="`delay-${i + 2}`"
        >
          <div class="step-wrapper px-4">
            <div class="position-relative d-inline-block mb-6">
              <v-avatar size="140" class="elevation-2 step-avatar">
                <v-img :src="step.image" cover class="step-img"></v-img>
              </v-avatar>

              <div class="step-button position-relative">
                <v-btn
                  class="mt-5"
                  variant="elevated"
                  color="primary"
                  rounded="xl"
                  block
                  style="z-index: 1"
                >
                  Step 0{{ i + 1 }}
                </v-btn>
              </div>
            </div>

            <h3 class="text-h6 font-weight-bold text-dark-blue mb-3">
              {{ $t(`ourProcess.steps.${step.key}.title`) }}
            </h3>
            <p class="text-body-2 text-grey-darken-1" style="line-height: 1.6">
              {{ $t(`ourProcess.steps.${step.key}.desc`) }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import step1 from "@images/home/step-audit.webp";
import step2 from "@images/home/step-concept.webp";
import step3 from "@images/home/step-device.webp";
import step4 from "@images/home/step-installation.webp";

export default {
  data() {
    return {
      steps: [
        { key: "one", image: step1 },
        { key: "two", image: step2 },
        { key: "three", image: step3 },
        { key: "four", image: step4 },
      ],
    };
  },
};
</script>

<style scoped>
.step-wrapper {
  position: relative;
}

.step-avatar {
  overflow: hidden;
  transition: transform 0.4s ease;
}

.step-img {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.step-wrapper:hover .step-img {
  transform: scale(1.15);
}

.step-button::before {
  content: "";
  width: 20rem;
  height: 2px;
  position: absolute;
  bottom: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #e0e0e0;
  z-index: 0;
}

@media (max-width: 990px) {
  .step-button::before {
    display: none;
  }
}
</style>
