<template>
  <div class="h-100 text-left hidden-md-and-up mt-4" align="center">
    <p class="mb-8 text-xs text-center font-Lexend">
      Compound located at:
      <br />
      <a
        href="https://maps.app.goo.gl/Z2u2whMwYk1WkArS8"
        target="_blank"
        class="font-bold text-[#175500] hover:text-[#d4bf18] text-sm font-Lexend underline"
      >
      <v-icon> mdi-google-maps</v-icon>Hawkstow Construction Compound, Antipolo, Rizal
        
      </a>
    </p>

    <v-carousel
      hide-delimiters
      :show-arrows="false"
      continuous
      cycle
      interval="3000"
      class=""
    >
      <v-carousel-item v-for="feature in features" class="">
        <v-img
          :src="`/images/motorpool/${feature.image}`"
          class="w-10 mb-4 aspect-[4/3] mx-auto feature-mobile"
          style="box-shadow: 0px 5px 10px #848484;"
          cover
        />
        <p class="w-11/12 italic text-xs lg:text-sm xl:text-base mx-auto">
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
