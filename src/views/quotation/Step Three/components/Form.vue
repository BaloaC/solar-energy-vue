<template>
  <v-card-text>
    <p>
      {{ $t("stepThree.description") }}
    </p>
    <div class="mx-8 mt-2">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user.name"
            :rules="rules.name"
            :counter="20"
            class="small"
            :label="$t('stepThree.fields.name.label')"
            :placeholder="$t('stepThree.fields.name.placeholder')"
            type="text"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user.last_name"
            :rules="rules.last_name"
            :counter="20"
            :label="$t('stepThree.fields.lastName.label')"
            :placeholder="$t('stepThree.fields.lastName.placeholder')"
            type="text"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="user.phone"
            :rules="rules.phone"
            :counter="12"
            :label="$t('stepThree.fields.phone.label')"
            :placeholder="$t('stepThree.fields.phone.placeholder')"
            type="number"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
            v-model="user.address"
            :rules="rules.address"
            :counter="60"
            :label="$t('stepThree.fields.address.label')"
            :placeholder="$t('stepThree.fields.address.placeholder')"
            rows="2"
            variant="underlined"
          ></v-textarea>
        </v-col>
      </v-row>
    </div>
  </v-card-text>
</template>

<script>
import { validateLength, validateTypeDatum } from "@/utils/validate";

export default {
  data() {
    return {
      user: {
        name: "",
        last_name: "",
        phone: "",
        address: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        name: [
          (v) => !!v || this.$t("stepThree.fields.name.errorRequired"),
          (v) => validateLength(v, 3, 20) || this.$t("stepThree.fields.name.errorLength"),
          (v) => validateTypeDatum(false, v) || this.$t("stepThree.fields.name.errorType"),
        ],
        last_name: [
          (v) => !!v || this.$t("stepThree.fields.lastName.errorRequired"),
          (v) => validateLength(v, 4, 20) || this.$t("stepThree.fields.lastName.errorLength"),
          (v) => validateTypeDatum(false, v) || this.$t("stepThree.fields.lastName.errorType"),
        ],
        address: [
          (v) => !!v || this.$t("stepThree.fields.address.errorRequired"),
          (v) => validateLength(v, 8, 30) || this.$t("stepThree.fields.address.errorLength"),
        ],
        phone: [
          (v) => !!v || this.$t("stepThree.fields.phone.errorRequired"),
          (v) => validateLength(v, 12, 13) || this.$t("stepThree.fields.phone.errorLength"),
          (v) => validateTypeDatum(true, v) || this.$t("stepThree.fields.phone.errorType"),
        ],
      };
    },
  },
};
</script>
