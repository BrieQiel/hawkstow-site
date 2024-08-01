<template>
  <div class="h-100 mx-20 mt-12 text-center" align="center">
    <div class="flex flex-row mb-16">
      <v-img
      src="assets/images/bg.png"
      :width="200"
      aspect-ratio="3/4"
      lazy-src="assets/images/bg.png"
      cover
      class="mx-8"
    />
    <v-img
      src="assets/images/bg.png"
      :width="200"
      aspect-ratio="3/4"
      lazy-src="assets/images/bg.png"
      cover
      class="mx-8"
    />
    <v-img
      src="assets/images/bg.png"
      :width="200"
      aspect-ratio="3/4"
      lazy-src="assets/images/bg.png"
      cover
      class="mx-8"
    />
    </div>

    <Marquee :clients="clients" />
    <p class="font-Lexend font-semibold text-[#175500] text-xl">&#38; <br /> PRIVATE BUSINESSES</p>
  </div>
</template>

<script setup>
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
</script>


