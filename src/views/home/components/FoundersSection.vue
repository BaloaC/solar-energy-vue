<template>
  <v-container fluid class="py-16 bg-white overflow-hidden" v-animate>
    <v-container style="max-width: 1200px">
      <v-row align="center">
        <v-col cols="12" md="5" class="pr-md-10 py-10">
          <div class="d-flex align-center mb-4">
            <span class="text-overline title-bar fade-right-element">
              {{ $t("team.overline") }}
            </span>
          </div>

          <div class="reveal-mask mb-6">
            <h2 class="text-h3 font-weight-bold text-dark-blue reveal-content delay-1">
              {{ $t("team.title1") }} <span class="text-primary">{{ $t("team.title2") }}</span>
            </h2>
          </div>

          <p class="text-body-1 text-grey-darken-1 mb-6 fade-up-element delay-2">
            {{ $t("team.desc1") }}
          </p>

          <p class="text-body-1 text-grey-darken-1 mb-8 fade-up-element delay-3">
            {{ $t("team.desc2") }}
          </p>

          <div class="d-flex align-center fade-up-element delay-3">
            <span class="text-h2 font-weight-black text-primary mr-4">35</span>
            <div class="text-subtitle-1 font-weight-bold text-dark-blue leading-tight">
              {{ $t("team.experienceLine1") }} <br />
              {{ $t("team.experienceLine2") }}
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <v-row :class="{ 'founders-grid': !$vuetify.display.smAndDown }">
            <v-col cols="12" sm="6" class="position-relative founder-col-1 fade-up-element delay-2">
              <v-card class="founder-card rounded-xl" elevation="0">
                <div class="founder-image-bg">
                  <v-img
                    :src="founder1"
                    :height="420"
                    aspect-ratio="1/1"
                    :alt="$t('team.members.one.name')"
                    class="founder-img"
                    cover
                  ></v-img>
                </div>
                <div class="founder-info pa-4 bg-white mx-4 text-start rounded-xl shadow-sm">
                  <h4 class="text-subtitle-1 font-weight-bold text-dark-blue">
                    {{ $t("team.members.one.name") }}
                  </h4>
                  <p class="text-caption text-primary font-weight-bold my-2">
                    {{ $t("team.members.one.role") }}
                  </p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" sm="6" class="position-relative founder-col-2 fade-up-element delay-3">
              <v-card class="founder-card rounded-xl" elevation="0">
                <div class="founder-image-bg">
                  <v-img
                    :src="founder2"
                    :height="420"
                    aspect-ratio="1/1"
                    :alt="$t('team.members.two.name')"
                    class="founder-img"
                    cover
                  ></v-img>
                </div>
                <div class="founder-info pa-4 bg-white mx-4 text-start rounded-xl shadow-sm">
                  <h4 class="text-subtitle-1 font-weight-bold text-dark-blue">
                    {{ $t("team.members.two.name") }}
                  </h4>
                  <p class="text-caption text-primary font-weight-bold my-2">
                    {{ $t("team.members.two.role") }}
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import founder1 from "@images/home/founder-1.webp";
import founder2 from "@images/home/founder-2.webp";

export default {
  data() {
    return {
      founder1,
      founder2,
    };
  },
};
</script>

<style scoped>
.text-dark-blue {
  color: #1a1a2e;
}
.leading-tight {
  line-height: 1.2;
}

.founder-img {
  width: 100%;
  height: 100%;
}

.founder-info {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  z-index: 2;
  border: 1px solid #f0f0f0;
  text-align: center;
}

.shadow-sm {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
}

@media (min-width: 960px) {
  .founder-col-1 {
    margin-top: -40px;
  }
  .founder-col-2 {
    margin-top: 60px;
  }
}

@media (max-width: 959px) {
  .founder-col-1,
  .founder-col-2 {
    margin-bottom: 60px;
  }
  .founder-image-bg {
    height: 350px;
  }
}
</style>
