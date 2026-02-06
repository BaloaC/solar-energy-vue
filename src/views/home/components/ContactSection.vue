<template>
  <v-container fluid class="py-16 bg-white position-relative overflow-visible" v-animate>
    <v-container style="max-width: 1200px" class="mt-10">
      <v-row>
        <v-col cols="12" md="7" class="py-12">
          <div class="d-flex align-center mb-4 fade-right-element">
            <span class="text-overline title-bar">{{ $t("contactForm.overline") }}</span>
          </div>
          <h2 class="text-h3 font-weight-bold text-dark-blue mb-10 fade-up-element delay-1">
            {{ $t("contactForm.title1") }}
            <span class="text-primary">{{ $t("contactForm.title2") }}</span>
          </h2>

          <v-row>
            <v-col
              cols="12"
              sm="6"
              v-for="(info, i) in contactInfo"
              :key="i"
              class="d-flex flex-column flex-md-row align-center text-center text-md-start mb-6 fade-up-element"
              :class="`delay-${i + 1}`"
            >
              <v-avatar color="primary" size="48" class="mr-4 mb-4 mb-md-0">
                <v-icon :icon="info.icon" color="white"></v-icon>
              </v-avatar>
              <div>
                <h4 class="text-subtitle-1 font-weight-bold text-dark-blue mb-4 mb-md-0">
                  {{ info.title }}
                </h4>
                <p class="text-body-2 text-grey-darken-1 mb-0" v-html="info.content"></p>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="5" class="position-relative fade-up-element delay-2">
          <v-card class="contact-form-card pa-sm-8 pa-4 rounded-xl elevation-10">
            <h3 class="text-h5 font-weight-bold text-dark-blue mb-6">
              {{ $t("contactForm.cardTitle") }}
            </h3>
            <v-form>
              <v-text-field
                :label="$t('contactForm.fields.name')"
                variant="outlined"
                class="mb-2"
                rounded="pill"
                base-color="grey-lighten-1"
              ></v-text-field>
              <v-text-field
                :label="$t('contactForm.fields.email')"
                variant="outlined"
                class="mb-2"
                rounded="pill"
                base-color="grey-lighten-1"
              ></v-text-field>
              <v-text-field
                :label="$t('contactForm.fields.subject')"
                variant="outlined"
                class="mb-2"
                rounded="pill"
                base-color="grey-lighten-1"
              ></v-text-field>
              <v-textarea
                :label="$t('contactForm.fields.message')"
                variant="outlined"
                rows="4"
                class="mb-6"
                rounded="xl"
                base-color="grey-lighten-1"
              ></v-textarea>
              <v-btn
                color="primary"
                block
                size="x-large"
                rounded="pill"
                class="font-weight-bold text-uppercase"
              >
                {{ $t("contactForm.submit") }}
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="map-overlay fade-element delay-3" style="position: absolute">
      <v-img :src="mapImage" cover height="300" class="rounded-t-pill mx-4 mx-md-16"></v-img>
    </div>
  </v-container>
</template>

<script>
import { mdiMapMarker, mdiPhone, mdiEmail, mdiClock } from "@mdi/js";
import mapImage from "@images/home/map-bg.webp";

export default {
  data: () => ({
    mapImage,
    icons: { mdiMapMarker, mdiPhone, mdiEmail, mdiClock },
    contactInfo: [
      {
        title: "Company Office",
        icon: mdiMapMarker,
        content: "1510 Cunningham St, Rockford,<br>IL 61102, United States",
      },
      {
        title: "Phone Number",
        icon: mdiPhone,
        content: "Office: +1 815 962 7114<br>Service: +1 815 962 7115",
      },
      {
        title: "E-mail Address",
        icon: mdiEmail,
        content: "Write us an inquiry<br>contact@yourdomain.com",
      },
      {
        title: "Work Hours",
        icon: mdiClock,
        content: "Monday - Friday: 9:00 am - 5:00 pm<br>Saturday: 10:00 am - 2:00 pm",
      },
    ],
  }),
};
</script>

<style scoped>
.contact-form-card {
  background: white !important;
  border: 1px solid #f0f0f0;
  z-index: 2;
}
@media (min-width: 960px) {
  .contact-form-card {
    margin-top: -50px;
  }
}
</style>
