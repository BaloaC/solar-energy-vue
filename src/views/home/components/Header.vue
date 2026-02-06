<template>
  <div style="overflow: hidden; position: relative" v-animate>
    <v-container fluid class="hero-section pb-0 pt-16 pb-lg-16 bg-white">
      <img
        src="@images/home/use-energy-from-the-sun.webp"
        alt="Use Energy from The Sun and Save Money"
        class="hero-image"
      />
      <v-row class="px-md-10" style="z-index: 2">
        <v-col
          cols="12"
          lg="6"
          class="ps-md-12 py-16 py-lg-0 justify-center justify-lg-start text-center text-lg-start"
        >
          <h1
            class="text-h2 font-weight-bold line-height-tight mb-4 text-dark-blue hero-text"
            style="max-width: 20ch"
          >
            <span class="reveal-mask">
              <span class="reveal-content"
                >{{ $t("hero.title1") }}
                <span class="text-primary">{{ $t("hero.title2") }}</span></span
              >
            </span>
          </h1>

          <p
            class="text-body-1 text-grey-darken-1 mb-8 text-center text-lg-start subtitle-text fade-element"
            v-animate
          >
            {{ $t("hero.subtitle") }}
          </p>

          <div class="d-flex align-center form-container fade-up-element" v-animate>
            <v-btn
              size="large"
              class="text-none rounded-pill px-8 font-weight-bold quote-btn bg-primary"
              elevation="0"
              href="./quotation"
            >
              {{ $t("hero.btnQuote") }}
            </v-btn>
          </div>

          <p class="mt-6 text-caption text-grey">
            {{ $t("hero.helpText") }}
            <a href="#" class="text-primary text-decoration-none font-weight-bold">{{
              $t("hero.contactLink")
            }}</a>
          </p>
        </v-col>

        <v-col cols="12" lg="6" v-animate>
          <v-img
            :src="heroMan"
            alt="Technical Expert"
            width="1200"
            class="hero-person-image d-flex d-md-none d-lg-flex fade-up-element"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-img
      src="@/assets/solar-panels-bg.png"
      alt="Solar Panels Background"
      class="panels-bg"
      cover
    ></v-img>
  </div>
</template>

<script>
import heroMan from "@images/home/hero-man.webp";

export default {
  data() {
    return {
      heroMan,
    };
  },
};
</script>

<style scoped>
.hero-section {
  max-width: 1600px;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 10% 60%,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.8) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
}

.hero-image {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.email-input :deep(.v-field) {
  border-radius: 50px !important;
  padding-left: 20px;
}

.subtitle-text {
  max-width: 500px;
  line-height: 1.6;
}

.form-container {
  max-width: 550px;
  position: relative;
}

:deep(.email-input .v-field) {
  background-color: #f8f9fa !important;
  border: 1px solid #e9ecef !important;
  padding-right: 150px;
}

.quote-btn {
  height: 48px !important;
  z-index: 2;
}

.panels-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: 1;
}

.hero-person-image {
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0%;
}

@media (min-width: 1400px) {
  .hero-person-image {
    right: 0;
  }
}

@media (min-width: 1200px) and (max-width: 1450px) {
  .hero-person-image {
    right: -25%;
  }
}

@media (max-width: 1280px) {
  .hero-person-image {
    position: relative;
    width: 100% !important;
  }

  .hero-text,
  .subtitle-text {
    margin-inline: auto;
  }
}

@media (max-width: 768px) {
  .hero-text,
  .subtitle-text {
    max-width: 100% !important;
  }
}
</style>
