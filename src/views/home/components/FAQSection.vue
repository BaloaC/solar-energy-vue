<template>
  <v-container fluid class="py-16" style="background-color: #f5f5f5" v-animate>
    <v-container style="max-width: 1200px">
      <v-row>
        <v-col cols="12" md="6" class="pr-md-12">
          <div class="d-flex align-center mb-0">
            <span class="text-overline title-bar fade-right-element">{{ $t("faq.overline") }}</span>
          </div>

          <h2 class="text-h3 font-weight-bold text-dark-blue mb-8 fade-up-element delay-1">
            {{ $t("faq.title1") }}
            <span class="text-primary"> {{ $t("faq.title2") }}</span>
          </h2>

          <div
            v-for="(item, i) in benefits"
            :key="i"
            class="d-flex mb-6 fade-up-element"
            :class="`delay-${i + 2}`"
          >
            <v-avatar color="primary" size="40" class="mr-4 mt-1 benefit-icon">
              <v-icon :icon="icons.mdiCheck" color="white" size="18"></v-icon>
            </v-avatar>
            <div>
              <h4 class="text-h6 font-weight-bold text-dark-blue mb-4">{{ item.title }}</h4>
              <p class="text-body-2 text-grey-darken-1">{{ item.desc }}</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="fade-left-element delay-2">
          <v-expansion-panels
            v-model="panel"
            variant="accordion"
            class="custom-faq rounded-lg"
            style="box-shadow: 1px 1px 2px 0px #00000021"
          >
            <v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="rounded-lg overflow-hidden">
              <v-expansion-panel-title class="text-h6 font-weight-bold text-dark-blue py-6">
                {{ faq.question }}
                <template v-slot:actions="{ expanded }">
                  <v-icon
                    color="primary"
                    :icon="expanded ? icons.mdiMinus : icons.mdiPlus"
                  ></v-icon>
                </template>
              </v-expansion-panel-title>

              <v-expansion-panel-text class="text-body-2 text-grey-darken-1 pb-4">
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mdiCheck, mdiPlus, mdiMinus } from "@mdi/js";

export default {
  data() {
    return {
      panel: 0,
      icons: { mdiCheck, mdiPlus, mdiMinus },
      benefits: [
        {
          title: this.$t("faq.benefits.one.title"),
          desc: this.$t("faq.benefits.one.desc"),
        },
        {
          title: this.$t("faq.benefits.two.title"),
          desc: this.$t("faq.benefits.two.desc"),
        },
      ],
      faqs: [
        {
          question: this.$t("faq.questions[0].q"),
          answer: this.$t("faq.questions[0].a"),
        },
        {
          question: this.$t("faq.questions[1].q"),
          answer: this.$t("faq.questions[1].a"),
        },
        {
          question: this.$t("faq.questions[2].q"),
          answer: this.$t("faq.questions[2].a"),
        },
        {
          question: this.$t("faq.questions[3].q"),
          answer: this.$t("faq.questions[3].a"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-expansion-panel-title :deep(.v-expansion-panel-title__icon) {
  display: inline-flex;
}

.benefit-icon {
  transition: transform 0.3s ease-out;
}
</style>
