<template>
  <div class="position-relative">
    <h1 class="text-center mb-5">{{ $t("stepOne.instructions.title") }}</h1>
    <h4 class="text-center mb-5">
      {{ $t("stepOne.instructions.subtitle") }}
    </h4>

    <div class="mapMessage" :class="{ 'd-none': isCalculated }">
      <div>
        <div class="mt-4 m-auto w-50">
          <div class="line"></div>
          <v-icon class="cursor" :icon="mdiCursorDefault"></v-icon>
        </div>
        <div>
          <p>
            {{ $t("stepOne.instructions.map") }}
          </p>
        </div>
      </div>
    </div>

    <v-container data-aos="fade" :class="{ 'd-none': !isCalculated }">
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3" md="8" offset-md="2">
          <p class="text-result">
            <v-icon :icon="mdiMapMarkerCheck" color="#168407"></v-icon>
            {{ $t("stepOne.instructions.resultArea", { area: area }) }}
          </p>
        </v-col>
        <v-col cols="12" sm="6" offset-sm="3" md="8" offset-md="2">
          <v-text-field
            type="number"
            :label="$t('stepOne.instructions.inputLabel')"
            variant="outlined"
            v-model="amount"
            @input="setEstimate"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useHouseEnergyStore } from "@/stores/quotation/houseEnergyStore";
import { mdiCursorDefault } from "@mdi/js";
import { mdiMapMarkerCheck } from "@mdi/js";

export default {
  data() {
    return {
      isCalculated: false,
      amount: 0,
      mdiCursorDefault,
      mdiMapMarkerCheck,
    };
  },
  props: {
    area: Number,
  },
  methods: {
    setEstimate() {
      const HouseEnergy = useHouseEnergyStore();
      HouseEnergy.setArea(this.area);
      HouseEnergy.setConsume(this.amount);
      this.$emit("amountInserted");
    },
  },
  mounted() {
    if (this.area != null) {
      this.isCalculated = true;
    }
  },
};
</script>

<style scoped>
.mapMessage {
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mapMessage p {
  color: #000;
  font-size: 1rem;
}
.cursor {
  animation: moveCursor 5s infinite;
}
.line {
  height: 4px;
  width: 6.5rem;
  position: relative;
}
.line::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #0000008f;
  animation: ampliateLine 5s infinite;
}
@keyframes moveCursor {
  0% {
    font-size: 1.4rem;
  }
  1% {
    font-size: 1rem;
  }
  2% {
    font-size: 1.4rem;
  }
  3% {
    transform: translate(0);
  }
  95% {
    font-size: 1.4rem;
  }
  97% {
    font-size: 1.2rem;
  }
  100% {
    transform: translatex(100px);
    font-size: 1.4rem;
  }
}
@keyframes ampliateLine {
  0% {
    width: 0%;
  }
  3% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.text-result {
  padding: 1rem;
  font-weight: 600;
  font-size: 1.5rem !important;
  text-align: center;
  /* width: 75%; */
  border-radius: 5px;
  margin: 3rem auto;
  box-shadow: 1px 1px 9px #0000004f;
}
</style>
