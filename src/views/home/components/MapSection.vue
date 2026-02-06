<template>
  <v-container class="position-relative">
    <div class="map-overlay left-0 right-0" style="position: absolute">
      <v-img :src="mapImage" cover height="100%" class="rounded-xl mx-4 mx-md-16"></v-img>
    </div>
  </v-container>
</template>

<script>
import mapImage from "@images/home/map-bg.webp";

export default {
  data: () => ({
    mapImage,
  }),
};
</script>

<style scoped>
.map-overlay {
  height: 300px;
  width: 100%;
  z-index: 1;
}
</style>
