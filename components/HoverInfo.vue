<template>
    <v-container
            class="h-full font-Lexend text-lg text-white bg-[#84bf6e] opacity-5 hover:opacity-100"
            justify="center"
            align="center"
          >
            <p class="font-bold">{{ imageName }}</p>
            <br />
            <p class="font-bold">Area</p>
            <p class="font-light">{{ area }} sqm</p>
            <p class="font-bold">Location</p>
            <p class="font-light">{{ location }}</p>
          </v-container>
</template>
<script setup>
const props = defineProps({
  imageName: String,
  area: String,
  location: String,
});
</script>