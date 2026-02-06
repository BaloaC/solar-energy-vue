<template>
  <div class="text-center">
    <v-btn variant="elevated" class="rts-btn btn-green mt-3" @click="dialog = true">
      {{ $t("stepThree.modalRequest.btnLabel") }}
    </v-btn>

    <v-dialog v-model="dialog" width="auto" scrollable persistent>
      <v-card max-width="800" color="#fafafa" class="rounded-xl pa-2">
        <v-card-title class="text-h5 text-center my-1 font-weight-bold">
          {{ $t("stepThree.modalRequest.title") }}
        </v-card-title>

        <v-alert
          class="ma-5 my-2"
          variant="outlined"
          :type="typeAlert"
          border="top"
          prominent
          v-if="error"
        >
          {{ error }}
        </v-alert>

        <v-window v-model="step">
          <v-window-item :value="1">
            <step-one ref="stepOneRef"></step-one>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text class="mx-8" style="height: 100%">
              <p class="text-body-1 text-center mb-4">
                {{ $t("stepThree.modalRequest.step2Text") }}
              </p>

              <v-text-field
                v-if="isSmallScreen"
                v-model="date"
                class="mt-5 m-auto"
                type="date"
                variant="outlined"
                rounded="pill"
              ></v-text-field>

              <div class="d-flex justify-center mt-3" v-else>
                <div class="wrapper-arrows">
                  <v-icon :icon="mdiChevronDown"></v-icon>
                  <v-icon :icon="mdiChevronDown"></v-icon>
                </div>

                <v-locale-provider locale="es">
                  <v-date-picker
                    color="green"
                    v-model="date"
                    width="400"
                    class="rounded-xl border shadow-sm"
                  ></v-date-picker>
                </v-locale-provider>
              </div>
            </v-card-text>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions class="pa-4">
          <v-btn v-if="step > 1" variant="text" class="font-weight-bold" @click="step--">
            {{ $t("stepThree.modalRequest.btnBack") }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            v-if="step == 1"
            color="#4AAB3D"
            variant="flat"
            class="text-white px-8 rounded-pill"
            @click="saveUserInfo"
          >
            {{ $t("stepThree.modalRequest.btnNext") }}
          </v-btn>
          <v-btn
            v-if="step == 2"
            color="#4AAB3D"
            variant="flat"
            class="text-white px-8 rounded-pill"
            :disabled="!date"
            @click="submitFinalRequest"
          >
            {{ $t("stepThree.modalRequest.btnSend") }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import StepOne from "./Form.vue";
import { VDatePicker } from "vuetify/components";
import { useHouseEnergyStore } from "@/stores/quotation/houseEnergyStore.js";
import { useQuotationStore } from "@/stores/quotation/quotationStore.js";
import { mdiChevronDown } from "@mdi/js";

export default {
  components: {
    VDatePicker,
    StepOne,
  },
  data() {
    return {
      dialog: false,
      error: false,
      step: 1,
      date: null,
      typeAlert: "error",
      isSmallScreen: false,
      quotationStore: useQuotationStore(),
      houseStore: useHouseEnergyStore(),
    };
  },
  watch: {
    date(newVal) {
      if (newVal) this.handleDate(newVal);
    },
  },
  methods: {
    saveUserInfo() {
      const userData = this.$refs.stepOneRef.user;

      if (!userData.name || !userData.address || !userData.phone) {
        this.showAlert($t("stepThree.modalRequest.completeFields"), "error");
        return;
      }

      // this.quotationStore.setClientData(userData);
      this.step++;
      this.error = false;
    },

    submitFinalRequest() {
      if (!this.date) {
        this.showAlert(($t("stepThree.modalRequest.selectDate"), "warning"));
        return;
      }

      // this.quotationStore.setVisitDate(this.date);

      this.typeAlert = "success";
      this.error = this.$t("stepThree.modalRequest.success");

      setTimeout(() => {
        this.error = this.$t("stepThree.modalRequest.redirecting");
        this.$router.push("/");
      }, 2500);
    },

    showAlert(message, type) {
      this.error = message;
      this.typeAlert = type;
      setTimeout(() => (this.error = false), 3000);
    },

    handleDate(date) {
      this.date = new Date(date).toISOString().substr(0, 10);
    },
  },
  mounted() {
    this.isSmallScreen = window.innerWidth <= 600;
  },
};
</script>

<style scoped>
.wrapper-arrows {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25%;
  right: 10%;
  font-size: 1.5rem;
  animation: up-down 1s ease-in-out infinite;
  z-index: 10;
  color: #4aab3d;
}
.wrapper-arrows i:first-child {
  margin-bottom: -1.4rem;
}
@keyframes up-down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
