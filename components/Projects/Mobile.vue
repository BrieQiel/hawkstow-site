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

    <Marquee :fade="true">
      <div v-for="client in clients" class="w-32 mb-4 align-center">
        <v-img
          :src="`/images/clients/${client.logo}`"
          :width="60"
          aspect-ratio="1"
          class="mx-auto mb-2"
        />
        <p class="text-center text-xs">{{ client.name }}</p>
      </div>
    </Marquee>
    <p class="font-Lexend font-semibold text-[#175500] text-xl">&#38; <br /> PRIVATE BUSINESSES</p>
  </div>
</template>

<script setup>
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
</script>


