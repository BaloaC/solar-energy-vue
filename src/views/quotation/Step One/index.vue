<template>
  <div>
    <v-row>
      <v-col cols="12" md="7">
        <div class="h-100">
          <map-area @areaCalculated="calculatePanel" class="h-100"></map-area>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <div>
          <instructions-area
            @amountInserted="this.$emit('stepComplete')"
            :key="calculatorKey"
            :area="area"
          ></instructions-area>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MapArea from "./components/Map.vue";
import InstructionsArea from "./components/Instructions.vue";
import { useHouseEnergyStore } from "@/stores/quotation/houseEnergyStore";

export default {
  data() {
    return {
      dialog: false,
      calculatorKey: 0,
      area: null,
    };
  },
  components: {
    MapArea,
    InstructionsArea,
  },
  methods: {
    calculatePanel(area) {
      this.area = area;
      this.calculatorKey++;
    },
  },
  mounted() {
    const store = useHouseEnergyStore();
    let area = store.getArea;
  },
};
</script>

<style scoped></style>
