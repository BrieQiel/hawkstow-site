<template>
  <div class="h-100 text-center hidden-md-and-up " align="center">
    <div class="mb-12 ">
      <v-img
      src="assets/images/bg.png"
      :width="150"
      aspect-ratio="3/4"
      lazy-src="assets/images/bg.png"
      cover
      class="mx-auto my-1"
    />
    <v-img
      src="assets/images/bg.png"
      :width="150"
      aspect-ratio="3/4"
      lazy-src="assets/images/bg.png"
      cover
      class="mx-auto my-1"
    />
    <v-img
      src="assets/images/bg.png"
      :width="150"
      aspect-ratio="3/4"
      lazy-src="assets/images/bg.png"
      cover
      class="mx-auto my-1"
    />
    </div>

    <MarqueeMobile :clients="clients" />
    <p class="font-Lexend font-semibold text-[#175500] text-xl">&#38; <br /> PRIVATE BUSINESSES</p>
  </div>
</template>

<script setup>
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
</script>


