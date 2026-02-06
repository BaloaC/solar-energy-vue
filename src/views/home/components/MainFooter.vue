<template>
  <v-footer class="bg-primary text-white py-16">
    <v-container style="max-width: 1200px">
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-center mb-6">
            <img
              src="@images/solar-energy-logo.png"
              alt="solar energy logo"
              style="max-height: 120px; max-width: 120px"
            />
          </div>
          <p class="text-body-2 mb-8 opacity-90">
            {{ $t("footer.description") }}
          </p>
          <div class="text-h4 font-weight-black mb-6">{{ $t("footer.since") }}</div>
          <div class="d-flex">
            <v-btn
              v-for="icon in socialIcons"
              :key="icon"
              icon
              variant="tonal"
              class="mr-2 text-white"
              size="small"
            >
              <v-icon :icon="icon"></v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold mb-6">{{ $t("footer.articlesTitle") }}</h3>
          <ul class="list-unstyled">
            <li v-for="(articleKey, i) in articleKeys" :key="i" class="mb-4 d-flex align-start">
              <v-icon :icon="icons.mdiCircle" size="8" class="mt-2 mr-3"></v-icon>
              <a href="#" class="text-white text-decoration-none text-body-2 hover-underline">
                {{ $t(`footer.articles.${articleKey}`) }}
              </a>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="text-h6 font-weight-bold mb-6">{{ $t("footer.newsletterTitle") }}</h3>
          <p class="text-body-2 mb-6">
            {{ $t("footer.newsletterDesc") }}
          </p>
          <v-text-field
            :placeholder="$t('footer.emailPlaceholder')"
            variant="solo"
            flat
            rounded="pill"
            bg-color="white"
          ></v-text-field>
          <v-btn
            block
            size="x-large"
            rounded="pill"
            class="font-weight-bold text-uppercase"
            style="background-color: #0000005c; color: #ffffff"
          >
            {{ $t("footer.subscribeBtn") }}
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-8 opacity-20"></v-divider>

      <div class="text-center text-caption opacity-70">
        {{ $t("footer.copyright") }}
      </div>
    </v-container>
  </v-footer>
</template>

<script>
import { mdiSolarPower, mdiFacebook, mdiInstagram, mdiLinkedin, mdiCircle } from "@mdi/js";

export default {
  data: () => ({
    icons: { mdiSolarPower, mdiCircle },
    socialIcons: [mdiFacebook, mdiInstagram, mdiLinkedin],
    articleKeys: ["profitable", "inverter", "pump", "cable"],
  }),
};
</script>
