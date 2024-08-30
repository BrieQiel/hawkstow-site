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
      <v-carousel-item v-for="feature in features">
        <v-img
          :src="`/images/motorpool/${feature.image}`"
          class="mb-4 aspect-[4/3] feature-mobile"
          style="box-shadow: 0px 5px 10px #848484;"
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
