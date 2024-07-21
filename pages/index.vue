<template>
  <v-app>
    <Navbar @emitToSlide="toSlide" />

    <v-carousel
      class="h-screen"
      hide-delimiters
      direction="vertical"
      :continuous="false"
      v-model="currentSlide"
    >
      <!-- slide 0 -->
      <v-carousel-item>
        <HomepageSlide />
      </v-carousel-item>

      <!-- slide 1,2,3,4 -->
      <v-carousel-item v-for="(service, index) in services" :key="index">
        <Services
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :imageName="service.imageName"
          :area="service.area"
          :location="service.location"
        />
      </v-carousel-item>

      <!-- slide 5 -->
      <v-carousel-item>Projects</v-carousel-item>
      <!-- slide 6 -->
      <v-carousel-item>Contact</v-carousel-item>

      <template v-slot:next="{ props }">
        <v-btn
          class="absolute m-8"
          style="bottom: -30%"
          @click="props.onClick"
          icon="mdi-arrow-down"
          color="#175500"
        >
        </v-btn>
      </template>
      <template v-slot:prev="{ props }">
        <v-btn
          class="absolute m-8"
          style="bottom: -30%"
          @click="props.onClick"
          icon="mdi-arrow-up"
          color="#175500"
        >
        </v-btn>
      </template>
    </v-carousel>
  </v-app>
</template>

<script setup>
import { provide } from "vue";
import { servicesData } from "@/data/servicesData";

useHead({
  title: "Hawkstow Construction and Development",
});

const currentSlide = ref(0);
const services = ref(servicesData);

function toSlide(slide) {
  currentSlide.value = slide;
}
</script>

<style scoped></style>
