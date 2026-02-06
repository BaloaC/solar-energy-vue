<template>
  <div>
    <v-card class="card-quotation">
      <v-card-text v-for="(panel, index) in panels" :key="index">
        <p class="fs-5 mb-3 text-dark font-weight-medium">
          {{ panel.model_solar_panels }}
        </p>
        <v-row class="ms-3">
          <v-col cols="12" sm="6">
            <p class="font-weight-semibold mt-3">
              {{ $t("stepThree.quotation.dimensions") }}
            </p>
            <span>
              {{ panel.height_solar_panels || "1.7" }} x {{ panel.width_solar_panels || "1.0" }}
            </span>

            <p class="font-weight-semibold mt-3">
              {{ $t("stepThree.quotation.potency") }}
            </p>
            <span>{{ panel.potency_solar_panels || "0.45" }} kW</span>

            <p class="mt-3">{{ $t("quantity") }}</p>
            <div class="d-flex align-center mt-4">
              <v-responsive>
                <v-text-field
                  type="number"
                  v-model.number="quantity"
                  density="compact"
                  class="input-custom"
                  :append-inner-icon="mdiPlus"
                  @click:append-inner="changePrice(true)"
                  :prepend-inner-icon="mdiMinus"
                  @click:prepend-inner="changePrice(false)"
                  @input="refreshTotal"
                ></v-text-field>
              </v-responsive>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="total text-end">
              <p class="subtitle">{{ $t("stepThree.quotation.totalMessage") }}</p>
              <p class="title">{{ (quantity * price).toFixed(2) }}</p>

              <div class="text-end">
                <p>{{ $t("unitPrice") }}</p>
                <span>{{ price }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiPlus, mdiMinus } from "@mdi/js";

export default {
  data() {
    return {
      quantity: 1,
      price: 0,
      total: 0,
      mdiPlus,
      mdiMinus,
    };
  },
  props: {
    panels: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    changePrice(action) {
      if (action) {
        this.quantity++;
      } else {
        if (this.quantity > 1) this.quantity--;
      }
      this.refreshTotal();
    },
    refreshTotal() {
      this.total = Number(this.quantity) * Number(this.price);
      this.$emit("priceChange", this.total);
    },
  },
  mounted() {
    if (this.panels && this.panels.length > 0) {
      const p = this.panels[0];
      this.quantity = Number(p.count);
      this.price = Number(p.price);
      this.total = this.quantity * this.price;

      this.$emit("priceChange", this.total);
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 3rem;
}
@media screen and (max-width: 600px) {
  .title {
    font-size: 1.8rem;
  }
}
</style>
