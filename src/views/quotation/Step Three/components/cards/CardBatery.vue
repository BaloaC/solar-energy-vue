<template>
  <div>
    <v-card class="card-quotation">
      <v-card-text v-for="(batterie, index) in batteries" :key="index">
        <p class="text-h5 mb-3 text-dark font-weight-medium">
          {{ $t("stepThree.summary.batteries") }}
        </p>
        <v-row class="ms-3">
          <v-col cols="12" sm="6">
            <p class="mt-5">{{ $t("quantity") }}</p>
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
              <p class="subtitle">{{ $t("stepThree.batteries.totalMessage") }}</p>
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
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";

export default {
  data() {
    return {
      quantity: this.batteries[0]?.count || 1,
      price: 0,
      total: 0,
      mdiPlus,
      mdiMinus,
    };
  },
  props: {
    batteries: {
      type: Array,
      required: true,
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
    if (this.batteries && this.batteries.length > 0) {
      const battery = this.batteries[0];
      this.quantity = Number(battery.count);
      this.price = Number(battery.price);
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
