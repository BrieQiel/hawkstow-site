<template>
  <v-card
    v-for="services in servicesList"
    flat
    class="h-64 w-48 m-4 hidden-sm-and-down"
  >
    <v-img
      :src="`/images/services/${services.icon}`"
      :width="100"
      aspect-ratio="1"
      lazy-src="assets/images/bg.png"
      cover
      class="mt-4 mx-auto"
    />
    <p class="mt-4 mx-4 text-center">{{ services.title }}</p>
  </v-card>
</template>

<script setup>
const props = defineProps({
  servicesList: Array,
});
</script>
