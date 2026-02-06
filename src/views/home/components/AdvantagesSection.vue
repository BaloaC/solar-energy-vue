<template>
  <v-container class="pt-16 pb-16 bg-white" v-animate>
    <v-row justify="center" class="text-center mb-10">
      <v-col cols="12" md="6">
        <span class="text-overline text-primary font-weight-black">WHY CHOOSE US?</span>
        <h2 class="text-h3 font-weight-bold text-dark-blue mt-2">
          <span class="reveal-mask">
            <span class="reveal-content">{{ $t("advantage.titlePart1") }}</span>
          </span>
          <span class="reveal-mask">
            <span class="reveal-content text-primary delay-1">
              {{ $t("advantage.titlePart2") }}
            </span>
          </span>
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(advantage, i) in advantages"
        :key="i"
        cols="12"
        sm="6"
        lg="3"
        class="py-lg-4 py-8 fade-up-element"
        :class="`delay-${i}`"
      >
        <v-card
          variant="flat"
          class="advantage-card pa-6 text-center rounded-xl bg-grey-lighten-4 h-100 position-relative overflow-visible"
        >
          <div class="card-sweep"></div>

          <v-avatar
            color="primary"
            size="94"
            class="mb-6 position-absolute z-1 left-0 right-0 mx-auto"
            style="top: -15%; z-index: 5"
          >
            <v-icon :icon="advantage.icon" color="white" size="42"></v-icon>
          </v-avatar>

          <div class="relative-content">
            <v-card-title class="text-h6 font-weight-bold mb-2 text-wrap pt-10 px-10">
              {{ $t(advantage.title) }}
            </v-card-title>

            <v-card-text class="text-body-2 text-grey-darken-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae odio sem.
              Mauris ultrices magna metus, eu pellentesque ipsum pulvinar nec
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiLightningBoltOutline, mdiLeaf, mdiAutorenew, mdiSprout } from "@mdi/js";

export default {
  data() {
    return {
      advantages: [
        {
          title: "advantage.one.title",
          icon: mdiLeaf,
        },
        {
          title: "advantage.two.title",
          icon: mdiAutorenew,
        },
        {
          title: "advantage.three.title",
          icon: mdiSprout,
        },
        {
          title: "advantage.four.title",
          icon: mdiLightningBoltOutline,
        },
      ],
    };
  },
};
</script>

<style scoped>
.advantage-card {
  cursor: pointer !important;
  z-index: 1;
}

.card-sweep {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  z-index: 0;
}

.card-sweep::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #03b02d;
  transform: translateY(-100.1%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.advantage-card:hover .card-sweep::before {
  transform: translateY(0);
}

.relative-content {
  position: relative;
  z-index: 2;
  pointer-events: none;
}

.advantage-card:hover .v-card-title,
.advantage-card:hover .v-card-text {
  color: white !important;
  transition: color 0.3s ease;
}

.text-dark-blue {
  color: #1a1a2e;
}
</style>
