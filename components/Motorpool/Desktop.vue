<template>
  <div
    class="h-100 w-12/12 mx-auto mt-8 lg:mt-12 xl:mt-20 hidden-sm-and-down"
    align="center"
  >
    <v-row class=" justify-center">
      <v-col
        v-for="(feature, index) in features"
        class="w-72 aspect-[9/25] text-left text-sm text-[#7b7b7b] hover:scale-105 hover:font-bold hover:text-[#175500] hover:text-base ping"
      >
          <v-img
            :src="`/images/motorpool/${feature.image}`"
            class="mb-6 grayscale aspect-[4/3] feature"
            cover
          />
          <p class="italic">
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
