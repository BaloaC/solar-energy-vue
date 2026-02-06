<template>
  <div>
    <v-row>
      <v-col cols="12" md="7" class="h-vw-step">
        <v-img :src="house7" cover height="100%" max-height="570"></v-img>
      </v-col>

      <v-col cols="12" md="5" class="wrapper-quotation">
        <h1 class="text-center mb-2 text-uppercase font-weight-bold">
          {{ $t("stepThree.summary.title") }}
        </h1>
        <p class="fs-6 text-center w-75 mx-auto">{{ $t("stepThree.summary.description") }}</p>

        <v-container>
          <v-card class="mx-auto mt-5 active" max-width="350" rounded="xl" variant="outlined">
            <v-skeleton-loader type="article" v-if="isLoading"></v-skeleton-loader>

            <v-card-text v-else>
              <div v-if="!error && quotation">
                <div class="fw-bold mb-2">
                  <p class="text-dark">{{ $t("stepThree.summary.systemIncludes") }}</p>
                </div>
                <ul class="my-3 ms-4">
                  <li v-if="quotation.quotation && quotation.quotation.solar_panels">
                    <div class="d-flex justify-space-between w-100 pr-4">
                      <span>
                        {{ quotation.quotation.solar_panels[0].count }}
                        {{ $t("stepThree.summary.solarPanels") }}
                      </span>
                      <span class="font-weight-bold">
                        {{
                          (
                            quotation.quotation.solar_panels[0].count *
                            quotation.quotation.solar_panels[0].price
                          ).toFixed(2)
                        }}$
                      </span>
                    </div>
                  </li>

                  <li v-if="quotation.quotation && quotation.quotation.converters">
                    <div class="d-flex justify-space-between w-100 pr-4">
                      <span>
                        {{ quotation.quotation.converters[0].count }}
                        {{ $t("stepThree.summary.converters") }}
                      </span>
                      <span class="font-weight-bold">
                        {{
                          (
                            quotation.quotation.converters[0].count *
                            quotation.quotation.converters[0].price
                          ).toFixed(2)
                        }}$
                      </span>
                    </div>
                  </li>

                  <li v-if="quotation.quotation && quotation.quotation.batteries">
                    <div class="d-flex justify-space-between w-100 pr-4">
                      <span>
                        {{ quotation.quotation.batteries[0].count }}
                        {{ $t("stepThree.summary.batteries") }}
                      </span>
                      <span class="font-weight-bold">
                        {{
                          (
                            quotation.quotation.batteries[0].count *
                            quotation.quotation.batteries[0].price
                          ).toFixed(2)
                        }}$
                      </span>
                    </div>
                  </li>
                </ul>

                <p class="mt-5 mb-0">
                  {{ $t("stepThree.summary.yourInstallation") }}
                  <strong class="font-weight-semibold">{{ totalInstallation.toFixed(2) }}$</strong>
                </p>
                <p class="mt-2">
                  {{ $t("stepThree.summary.savingsMessage") }}
                  <strong class="text-primary">{{ quotation.saving?.toFixed(2) }}$</strong>
                </p>

                <div class="my-3 text-caption bg-grey-lighten-4 pa-3 rounded-lg">
                  <p class="text-decoration-line-through mb-1">
                    {{ $t("stepThree.summary.monthlyPayment") }}
                    <strong>{{ quotation.consume_pay?.toFixed(2) }}$</strong>
                  </p>
                  <p class="text-dark font-weight-bold">
                    {{ $t("stepThree.summary.discountPayment") }}
                    <strong>{{ quotation.consume_descuent?.toFixed(2) }}$</strong>
                  </p>
                </div>

                <modal-edit
                  :key="modalEdit"
                  @billChanged="showBillModified"
                  :quotation="quotation"
                ></modal-edit>
              </div>

              <div v-else>
                <v-alert type="warning" variant="tonal" rounded="xl">
                  {{ $t("stepThree.summary.errorSpace") }}
                </v-alert>
              </div>
            </v-card-text>
          </v-card>
        </v-container>

        <p class="text-center mb-8 text-body-2">{{ $t("stepThree.summary.editNotice") }}</p>

        <p class="fw-bold fs-5 text-center mt-6 px-4">{{ $t("stepThree.summary.finalStep") }}</p>
        <div class="text-center mt-4">
          <modal-request :class="{ 'd-none': isLoading }"></modal-request>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/components";

import { useQuotationStore } from "@/stores/quotation/quotationStore";
import { useHouseEnergyStore } from "@/stores/quotation/houseEnergyStore";
import { useTypeInstalationStore } from "@/stores/quotation/typeInstalationStore";

import ModalEdit from "./components/ModalEdit.vue";
import ModalRequest from "./components/ModalRequest.vue";

import house7 from "@/assets/images/steps/house7.webp";

export default {
  components: {
    ModalEdit,
    VSkeletonLoader,
    ModalRequest,
  },
  data() {
    return {
      isLoading: true,
      quotation: null,
      error: false,
      modalEdit: 0,
      house7,
      QuotationStore: useQuotationStore(),
      useHouseEnergyStore: useHouseEnergyStore(),
      useTypeInstalationStore: useTypeInstalationStore(),
    };
  },
  computed: {
    totalInstallation() {
      try {
        if (!this.quotation || !this.quotation.quotation) return 0;

        const quotation = this.quotation.quotation;
        let total = 0;

        if (quotation.solar_panels) {
          total += quotation.solar_panels[0].count * quotation.solar_panels[0].price;
        }
        if (quotation.converters) {
          total += quotation.converters[0].count * quotation.converters[0].price;
        }
        if (quotation.batteries) {
          total += quotation.batteries[0].count * quotation.batteries[0].price;
        }

        return total;
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  methods: {
    async loadQuotationFromStore() {
      this.isLoading = true;

      setTimeout(() => {
        const houseEnergy = this.useHouseEnergyStore.getAll;
        const selectedType = this.useTypeInstalationStore.getType;

        const areaRaw = String(houseEnergy.area || "0").replace(/[^\d.]/g, "");
        let areaM2 = parseFloat(areaRaw) || 0;
        if (String(houseEnergy.area).includes("km")) areaM2 = areaM2 * 1000000;

        const monthlyBill = Number(houseEnergy.total_consume) || 0;

        const moneyToSave = monthlyBill * 0.85;
        const kwpNeeded = moneyToSave * 0.06;

        let panelCount = Math.ceil(kwpNeeded / 0.45);
        const maxPanelsPossible = Math.floor(areaM2 / 2.2);

        if (panelCount > maxPanelsPossible) {
          panelCount = maxPanelsPossible;
        }

        const includesConverters = selectedType !== "JUSTPANELS";
        const includesBatteries = selectedType === "ALL";

        if (panelCount > 0) {
          const finalSaving = Math.min(moneyToSave, (panelCount * 0.45) / 0.06);

          this.quotation = {
            consume_pay: monthlyBill,
            saving: finalSaving,
            consume_descuent: monthlyBill - finalSaving,
            quotation: {
              solar_panels: [{ count: panelCount, price: 85.0 }],
              converters: includesConverters
                ? [{ count: Math.max(1, Math.ceil(panelCount / 6)), price: 65.0 }]
                : null,
              batteries: includesBatteries
                ? [{ count: Math.max(1, Math.ceil(panelCount * 1.1)), price: 50.0 }]
                : null,
            },
          };
          this.QuotationStore.setQuotation(this.quotation);
          this.error = false;
        } else {
          this.error = true;
        }
        console.log("this.error", this.error);
        this.isLoading = false;
        this.modalEdit++;
      }, 800);
    },

    showBillModified() {
      this.quotation = { ...this.QuotationStore.getQuotation };
      // this.modalEdit++;
    },
  },
  mounted() {
    this.loadQuotationFromStore();
  },
};
</script>

<style scoped>
ul {
  list-style: disc;
}
p,
li {
  color: #5c5e62;
}
.active {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
}
@media screen and (min-width: 600px) {
  .wrapper-quotation {
    height: 70vh;
    overflow-y: auto;
  }
}
</style>
