<template>
  <Marquee class="hidden-md-and-up">
    <v-card
      v-for="services in servicesList"
      flat
      class="h-fit w-44 m-4 mx-auto"
    >
      <v-img
        :src="`/images/services/${services.icon}`"
        aspect-ratio="1"
        :lazy-src="`/images/services/${services.icon}`"
        cover
        class="w-20 mt-4 mx-auto"
      ></v-img>
      <p class="mt-4 mx-4 text-center text-sm lg:text-sm xl:text-base">
        {{ services.title }}
      </p>
    </v-card>
  </Marquee>
</template>

<script setup>
const props = defineProps({
  servicesList: Array,
});
</script>
