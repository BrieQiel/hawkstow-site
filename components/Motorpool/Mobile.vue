<template>
  <div class="h-100 text-left hidden-md-and-up mt-4" align="center">
    <v-carousel
      hide-delimiters
      :show-arrows="false"
      continuous
      cycle
      interval="3000"
      progress="#175500"
    >
      <v-carousel-item v-for="feature in features" :key="feature.id">
        <v-img
          :src="`/images/${feature.image}`"
          class="mb-4"
          aspect-ratio="0.9"
          cover
        />
        <p class="italic text-sm lg:text-sm xl:text-base">
          "{{ feature.quote }}"
        </p>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { motorpoolData } from "@/data/servicesdata";

const features = ref(motorpoolData);
</script>
