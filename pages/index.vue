<template>
  <v-app>
    <Navbar @toSlide="toSlide" />

    <!-- custom arrows -->
    <div class="z-50 absolute bottom-40 right-8">
      <v-row class="h-50">
        <v-btn
          @click="prevSlide()"
          :disabled="isFirstSlide"
          icon="mdi-arrow-up"
          color="#175500"
          class="m-4"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </v-row>
      <v-row class="h-50">
        <v-btn
          @click="nextSlide()"
          :disabled="isLastSlide"
          icon="mdi-arrow-down"
          color="#175500"
          class="m-4"
        >
        </v-btn>
      </v-row>
    </div>

    <v-img
      class="h-screen"
      src="assets/images/bg.png"
      lazy-src="assets/images/bg.png"
      cover
    >
      <v-carousel
        class="h-screen"
        hide-delimiters
        :show-arrows="false"
        direction="vertical"
        progress="#175500"
        v-model="currentSlide"
        :continuous="false"
        :touch="false"
      >
        <!-- slide 0 -->
        <v-carousel-item>
          <HomepageSlide />
        </v-carousel-item>

        <!-- slide 1 -->
        <v-carousel-item color="white">
          <AboutSlide />
        </v-carousel-item>

        <!-- slide 2,3,4,5 -->
        <v-carousel-item
          v-for="(service, index) in services"
          :key="index"
          color="white"
        >
          <Services
            :title="service.title"
            :description="service.description"
            :image="service.image"
            :imageName="service.imageName"
            :area="service.area"
            :location="service.location"
          />
        </v-carousel-item>

        <!-- slide 6 -->
        <v-carousel-item color="white">
          <Projects />
        </v-carousel-item>
        <!-- slide 7 -->
        <v-carousel-item color="white">Contact</v-carousel-item>
      </v-carousel>
    </v-img>
  </v-app>
</template>

<script setup>
import { servicesData } from "/data/servicesdata.ts";

useHead({
  title: "Hawkstow Construction and Development",
});

const currentSlide = ref(0);
const services = ref(servicesData);

const isFirstSlide = computed(() => currentSlide.value === 0);
const isLastSlide = computed(() => currentSlide.value === 7);
const nextSlide = () => (currentSlide.value += 1);
const prevSlide = () => (currentSlide.value -= 1);
const toSlide = (slide) => (currentSlide.value = slide);
</script>
