<template>
  <div>
    <Navbar />
    <Header></Header>
    <LogoRow />
    <div style="max-width: 1200px; margin-inline: auto">
      <AdvantagesSection />
      <SolarSolutions />
    </div>
    <PopularService />
    <InstallationSteps />
    <ProfessionalLeader />
    <EnergyProjects />
    <FAQSection />
    <CallUs />
    <TestimonialsSection />
    <FoundersSection />
    <BlogSection />
    <div class="position-relative">
      <ContactSection />
      <MapSection />
      <MainFooter style="margin-top: 150px; padding-top: 250px !important" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import LogoRow from "./components/LogoRow.vue";
import AdvantagesSection from "./components/AdvantagesSection.vue";
import SolarSolutions from "./components/SolarSolutions.vue";
import PopularService from "./components/PopularService.vue";
import InstallationSteps from "./components/InstallationSteps.vue";
import ProfessionalLeader from "./components/ProfessionalLeader.vue";
import EnergyProjects from "./components/EnergyProjects.vue";
import FAQSection from "./components/FAQSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import CallUs from "./components/CallUs.vue";
import FoundersSection from "./components/FoundersSection.vue";
import BlogSection from "./components/BlogSection.vue";
import ContactSection from "./components/ContactSection.vue";
import MainFooter from "./components/MainFooter.vue";
import MapSection from "./components/MapSection.vue";

export default {
  data() {
    return {
      ApiRequest: "",
    };
  },
  props: {
    visitors: {
      type: Object,
      required: true,
    },
  },
  components: {
    Navbar,
    Header,
    LogoRow,
    AdvantagesSection,
    SolarSolutions,
    PopularService,
    InstallationSteps,
    ProfessionalLeader,
    EnergyProjects,
    FAQSection,
    TestimonialsSection,
    CallUs,
    FoundersSection,
    BlogSection,
    ContactSection,
    MainFooter,
    MapSection,
  },
  mounted() {
    // this.setVisitors();
  },
};
</script>

<style scoped>
body {
  background-color: red;
  font-size: var(--font-size-b1) !important;
  line-height: var(--line-height-b1) !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  font-family: "Albert Sans", sans-serif !important;
  color: var(--color-body) !important;
  font-weight: var(--p-regular) !important;
  position: relative !important;
  overflow-x: hidden !important;
}
</style>
