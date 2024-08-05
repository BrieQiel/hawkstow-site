<template>
  <div
    class="h-100 mx-20 mt-4 lg:mt-4 xl:mt-16 text-center hidden-sm-and-down"
    align="center"
  >
    <div class="flex flex-row mb-16">
      <NuxtLink to="/projects">
        <v-img
          src="assets/images/bg.png"
          :width="200"
          aspect-ratio="3/4"
          lazy-src="assets/images/bg.png"
          cover
          class="mx-8"
        />
      </NuxtLink>
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

    <Marquee :fade="true">
      <div v-for="client in clients" class="w-40 mr-4 align-center">
        <v-img
          :src="`/images/clients/${client.logo}`"
          :width="60"
          aspect-ratio="1"
          class="mx-auto mb-2"
        />
        <p class="text-center text-xs">{{ client.name }}</p>
      </div>
    </Marquee>
    <p class="font-Lexend font-semibold text-[#175500] text-xl">
      &#38; <br />
      PRIVATE BUSINESSES
    </p>
  </div>
</template>

<script setup>
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
</script>
