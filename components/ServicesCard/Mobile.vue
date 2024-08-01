<template>
  <v-carousel
    :show-arrows="false"
    cycle
    touch
    hide-delimiter-background
    color="#d4bf18"
    class="mx-8 h-4 hidden-md-and-up"
    height="280"
  >
    <v-carousel-item v-for="services in servicesList">
      <v-card flat class="h-fit w-56 m-4 mx-auto">
        <v-img
          :src="`/images/services/${services.icon}`"
          :width="100"
          height="100"
          lazy-src="assets/images/bg.png"
          cover
          class="mt-4 mx-auto"
        ></v-img>
        <p class="mt-4 mx-4 text-center">{{ services.title }}</p>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const props = defineProps({
  servicesList: Array,
});
</script>
