<template>
  <div
    class="h-100 w-12/12 mx-auto mt-8 lg:mt-12 xl:mt-20 hidden-sm-and-down"
    align="center"
  >
    <p class="mb-8">
      Compound located at:
      <a
        href="https://maps.app.goo.gl/Z2u2whMwYk1WkArS8"
        target="_blank"
        class="font-bold text-[#175500] hover:text-[#d4bf18] text-lg font-Lexend underline"
      >
      <v-icon> mdi-google-maps</v-icon>Hawkstow Construction Compound, Antipolo, Rizal
        
      </a>
    </p>

    <v-row class="justify-center">
      <v-col
        v-for="(feature, index) in features"
        class="text-left text-sm text-[#7b7b7b] hover:text-[#175500] hover:font-bold ping"
      >
        <v-img
          :src="`/images/motorpool/${feature.image}`"
          class="mb-6 aspect-[4/3] grayscale feature"
          cover
        />
        <p class="italic">"{{ feature.quote }}"</p>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { motorpoolData } from "@/data/servicesdata";

const features = ref(motorpoolData);
</script>
