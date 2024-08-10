<template>
  <v-card
    v-for="services in servicesList"
    flat
    class="h-fit w-44 mt-8 mx-2 hidden-sm-and-down hover:scale-105 hover:font-bold hover:text-[#175500]"
  >
    <v-img
      :src="`/images/services/${services.icon}`"
      aspect-ratio="1"
      :lazy-src="`/images/services/${services.icon}`"
      cover
      class="mt-4 mx-auto w-4/12"
    />
    <p class="mt-5 text-sm lg:text-sm xl:text-base text-center ">{{ services.title }}</p>
  </v-card>
</template>

<script setup>
const props = defineProps({
  servicesList: Array,
});
</script>
