<template>
  <div>
    <v-row>
      <v-col cols="12" md="7" class="h-vw-step">
        <v-img
          :src="previewUrl"
          :key="previewUrl"
          cover
          class="rounded-xl shadow-lg"
          max-height="550"
        ></v-img>
      </v-col>
      <v-col cols="12" md="5" class="list-type">
        <h2 class="text-center mb-6 font-weight-bold text-uppercase text-h5">
          {{ $t("stepTwo.title") }}
        </h2>
        <v-item-group mandatory v-model="selection">
          <v-container class="pa-0">
            <v-item
              v-for="(instalation, i) in instalations"
              :key="i"
              v-slot="{ isSelected, toggle }"
            >
              <v-card
                :class="isSelected ? 'active' : ''"
                @click="handleSelection(toggle, instalation.url, i)"
                variant="outlined"
                class="mx-auto my-4 rounded-xl transition-swing"
                style="border-color: #eee"
              >
                <v-card-text>
                  <v-row align="center">
                    <v-col cols="12" sm="4" class="pa-2">
                      <v-img :src="instalation.image" rounded="lg"></v-img>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <div>
                        <h4 class="text-subtitle-1 font-weight-bold text-dark-blue">
                          {{ $t(instalation.title) }}
                        </h4>
                        <p class="text-body-2 mt-2 leading-tight">
                          {{ $t(instalation.description) }}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-item>
          </v-container>
        </v-item-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useTypeInstalationStore } from "@/stores/quotation/typeInstalationStore";

import image3 from "@images/steps/house3.webp";
import image4 from "@images/steps/house4.webp";
import image5 from "@images/steps/house6.webp";

import preview1 from "@images/steps/house5.webp";
import preview2 from "@images/steps/house1.webp";
import preview3 from "@images/steps/house2.webp";

export default {
  data() {
    return {
      previewUrl: preview1,
      selection: 4,
      instalations: [
        {
          title: "stepTwo.types.all.title",
          description: "stepTwo.types.all.description",
          image: image3,
          url: preview1,
          type: "ALL",
        },
        {
          title: "stepTwo.types.network.title",
          description: "stepTwo.types.network.description",
          image: image5,
          url: preview2,
          type: "WITHOUTBATTERYS",
        },
        {
          title: "stepTwo.types.panels.title",
          description: "stepTwo.types.panels.description",
          image: image4,
          url: preview3,
          type: "JUSTPANELS",
        },
      ],
    };
  },
  methods: {
    handleSelection(toggle, url, index) {
      toggle();
      this.previewUrl = url;
      const TypeStore = useTypeInstalationStore();
      TypeStore.setType(this.instalations[index].type);
      this.$emit("stepComplete");
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgba(var(--v-theme-primary)) !important;
  background-color: rgba(var(--v-theme-primary), 0.05);
}
p {
  color: #5c5e62;
  line-height: 1.4;
}
.list-type {
  overflow-y: auto;
}
@media screen and (min-width: 900px) {
  .list-type {
    height: 65vh !important;
  }
}
</style>
