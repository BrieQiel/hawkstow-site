<template>
  <div
    class="h-100 w-10/12 mx-auto mt-8 lg:mt-12 xl:mt-20 hidden-sm-and-down"
    align="center"
  >
    <v-row class="w-full">
      <v-col v-for="feature in features" class="w-72 aspect-[3/4] text-left">
        <v-img
          :src="`/images/${feature.image}`"
          class="mb-4"
          aspect-ratio="0.75"
          cover
        />
        <p class="italic text-sm lg:text-sm xl:text-base">
          "{{ feature.quote }}"
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { motorpoolData } from "@/data/servicesdata";

const features = ref(motorpoolData);
</script>
