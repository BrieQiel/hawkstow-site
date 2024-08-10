<template>
  <div class="w-9/12 md:w-10/12 mx-auto mt-8 lg:mt-8 xl:mt-12">
    <HeadingTitle title="About us" />

    <p class="text-xs lg:text-sm xl:text-base mx-8 mt-8">
      <span class="font-bold text-[#175500]">Hawkstow</span>
      <span class="">
        is a privately owned multidisciplinary engineering enterprise with
        employed dedicated professionals having extensive and proud experiences
        in different construction services, assisted by progressive and quixotic
        young people specializing in different fields of the construction
        industry.
      </span>
    </p>

    <p class="text-base font-bold text-[#175500] md:text-lg mx-8 mt-8 text-center">
      Our Services include:
    </p>
    <v-row class="flex justify-center">
      <ServicesCard :servicesList="servicesList" />
    </v-row>
  </div>
</template>

<script setup>
import { servicesData2 } from "/data/servicesdata.ts";

const servicesList = ref(servicesData2);
</script>
