<template>
  <div>
    <div style="height: 120px">
      <Navbar />
    </div>

    <v-container class="py-10">
      <v-stepper
        v-model="activeStep"
        :items="[
          $t('stepOne.IndicateLocation'),
          $t('stepTwo.selectInstallation'),
          $t('stepThree.confirmVisit'),
        ]"
        alt-labels
        hide-actions
        flat
        class="rounded-xl border shadow-sm"
        style="min-height: 80dvh"
      >
        <template v-slot:item.1>
          <v-card flat class="pa-4">
            <step-one @stepComplete="isDisabled = false"></step-one>
          </v-card>
        </template>

        <template v-slot:item.2>
          <v-card flat class="pa-4">
            <step-two @stepComplete="isDisabled = false"></step-two>
          </v-card>
        </template>

        <template v-slot:item.3>
          <v-card flat class="pa-4">
            <step-three :key="stepKey" @stepComplete="isDisabled = false"></step-three>
          </v-card>
        </template>

        <v-divider></v-divider>
        <div class="d-flex pa-4">
          <v-btn
            v-if="activeStep > 1"
            variant="text"
            color="#1f1f25e8"
            class="font-weight-bold"
            @click="activeStep--"
          >
            {{ $t("prev") }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            v-if="activeStep < 3"
            color="#1f1f25e8"
            class="text-white font-weight-bold px-8"
            rounded="pill"
            :disabled="isDisabled"
            @click="nextStep"
          >
            {{ $t("next") }}
          </v-btn>

          <v-btn
            v-else
            color="primary"
            class="font-weight-bold px-8"
            rounded="pill"
            :disabled="isDisabled"
            @click="finishProcess"
          >
            {{ $t("requestVisit") }}
          </v-btn>
        </div>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
import StepOne from "./Step One/index.vue";
import StepTwo from "./Step Two/index.vue";
import StepThree from "./Step Three/index.vue";
import Navbar from "../home/components/Navbar.vue";

export default {
  components: {
    Navbar,
    StepOne,
    StepTwo,
    StepThree,
  },
  data() {
    return {
      activeStep: 1,
      isDisabled: true,
      stepKey: 0,
      area: null,
    };
  },
  methods: {
    nextStep() {
      this.verifyStep(this.activeStep);
      this.activeStep++;
    },
    verifyStep(stepIndex) {
      if (stepIndex === 2) {
        this.stepKey++;
      }
      this.isDisabled = true;
    },
    finishProcess() {
      console.log("Solicitud de visita enviada");
    },
  },
};
</script>

<style scoped>
:deep(.v-stepper-header) {
  box-shadow: none !important;
}
</style>
