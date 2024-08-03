<template>
  <div class="w-9/12 md:w-10/12 mx-auto mt-8 lg:mt-8 xl:mt-12">
    <HeadingTitle :title="title" />

    <p class="text-sm lg:text-sm xl:text-base mx-8 mt-12">
      <span class="font-bold">Hawkstow</span>
      <span class="">
        is a privately owned multidisciplinary engineering enterprise with
        employed dedicated professionals having extensive and proud experiences
        in different construction services, assisted by progressive and quixotic
        young people specializing in different fields of the construction
        industry.
      </span>
    </p>

    <p class="font-Lexend text-base md:text-lg mx-8 mt-8 text-center">
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
const title = "About Us";
</script>
