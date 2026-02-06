<template>
  <div class="text-end">
    <v-btn
      variant="elevated"
      color="#1f1f25e8"
      class="text-white mt-3"
      :append-icon="mdiPencil"
      @click="dialog = true"
    >
      Editar
    </v-btn>

    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="800" color="#fafafa">
        <v-card-title class="text-h5 text-center my-1"> Tu Sistema </v-card-title>
        <v-card-text>
          <ul style="list-style-type: none">
            <li
              v-if="
                quotation.quotation.hasOwnProperty('solar_panels') &&
                quotation.quotation.solar_panels
              "
            >
              <card-panel
                ref="CardPanelRef"
                @priceChange="calculateTotal"
                :panels="quotation.quotation.solar_panels"
              ></card-panel>
            </li>
            <li
              v-if="
                quotation.quotation.hasOwnProperty('converters') && quotation.quotation.converters
              "
            >
              <card-conversor
                ref="CardConversorRef"
                @priceChange="calculateTotal"
                :converters="quotation.quotation.converters"
              ></card-conversor>
            </li>
            <li
              v-if="
                quotation.quotation.hasOwnProperty('batteries') && quotation.quotation.batteries
              "
            >
              <card-batteries
                ref="CardBatteriesRef"
                @priceChange="calculateTotal"
                :batteries="quotation.quotation.batteries"
              ></card-batteries>
            </li>
            <li class="text-end mt-6">
              <h2 style="color: #9a9a9a">Total</h2>
              <p class="title">{{ total }}</p>
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" variant="text" @click="dialog = false">Cancelar</v-btn>
          <v-btn color="success" variant="tonal" @click="emitBill">Guardar Cambios</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CardPanel from "./cards/CardPanel.vue";
import CardConversor from "./cards/CardConversor.vue";
import CardBatteries from "./cards/CardBatery.vue";

import { useQuotationStore } from "@/stores/quotation/quotationStore";
import { mdiPencil } from "@mdi/js";

export default {
  data() {
    return {
      dialog: false,
      total: 0,
      bill: "",
      mdiPencil,
    };
  },
  props: {
    quotation: {
      type: Array,
      required: true,
    },
  },
  components: {
    CardPanel,
    CardConversor,
    CardBatteries,
  },
  methods: {
    calculateTotal() {
      if (!this.dialog) return;
      try {
        const panelChild = this.$refs.CardPanelRef;
        const conversorChild = this.$refs.CardConversorRef;
        const batteriesChild = this.$refs.CardBatteriesRef;
        console.log("quotation");

        let currentTotal = 0;
        let tempBody = {};

        if (panelChild && this.quotation.quotation?.solar_panels?.[0]) {
          currentTotal += Number(panelChild.total) || 0;
          tempBody.solar_panels = [
            {
              solar_panel_id: this.quotation.quotation.solar_panels[0].solar_panels_id,
              count: panelChild.quantity,
            },
          ];
        }

        if (conversorChild && this.quotation.quotation?.converters?.[0]) {
          currentTotal += Number(conversorChild.total) || 0;
          tempBody.converters = [
            {
              converter_id: this.quotation.quotation.converters[0].converters_id,
              count: conversorChild.quantity,
            },
          ];
        }

        if (batteriesChild && this.quotation.quotation?.batteries?.[0]) {
          currentTotal += Number(batteriesChild.total) || 0;
          tempBody.batteries = [
            {
              battery_id: this.quotation.quotation.batteries[0].baterys_id,
              count: batteriesChild.quantity,
            },
          ];
        }

        if (this.total !== currentTotal) {
          this.total = currentTotal;
          this.bill = tempBody;
        }
        // this.total = currentTotal;
        // this.bill = tempBody;
      } catch (error) {
        console.log(" error", error);
      }
    },
    emitBill() {
      const QuotationStore = useQuotationStore();

      if (this.bill.solar_panels) {
        QuotationStore.setCountPanel(this.bill.solar_panels[0].count);
      }
      if (this.bill.converters) {
        QuotationStore.setCountConverter(this.bill.converters[0].count);
      }
      if (this.bill.batteries) {
        QuotationStore.setCountBatteries(this.bill.batteries[0].count);
      }

      this.$emit("billChanged", this.bill);
      this.dialog = false;
    },
  },
  // updated() {
  //   this.calculateTotal();
  // },
};
</script>

<style scoped>
li {
  margin-bottom: 1rem;
}
.title {
  font-size: 5rem;
}
@media screen and (max-width: 600px) {
  .title {
    font-size: 1.8rem;
  }
}
@media screen and (max-width: 400px) {
  .v-card-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
