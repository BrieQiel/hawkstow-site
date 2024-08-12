<template>
  <v-carousel
    cycle
    continuous
    interval="2500"
    touch
    hide-delimiters
    class="h-4 mt-8 mx-4 hidden-md-and-up"
    height="280"
    progress="#d4bf18"
  >
    <v-carousel-item v-for="services in servicesList">
      <v-card flat class="h-fit w-44 m-4 mx-auto">
        <v-img
          :src="`/images/services/${services.icon}`"
          aspect-ratio="1"
          :lazy-src="`/images/services/${services.icon}`"
          cover
          class="w-20 mt-4 mx-auto"
        ></v-img>
        <p class="mt-4 mx-4 text-center">{{ services.title }}</p>
      </v-card>
    </v-carousel-item>

    <template v-slot:prev="{ props }">
      <v-btn icon="mdi-arrow-left-drop-circle-outline" variant="text" color="#175500" @click="props.onClick">
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn icon="mdi-arrow-right-drop-circle-outline" variant="text" color="#175500" @click="props.onClick">
      </v-btn>
    </template>


  </v-carousel>
</template>

<script setup>
const props = defineProps({
  servicesList: Array,
});
</script>
