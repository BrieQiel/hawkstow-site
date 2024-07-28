<template>
    <div class="h-100 mx-20 mt-20 flex flex-row text-left" align="center">
        <div class="mx-5">
          <h1
            class="uppercase text-[#175500] text-lg md:text-xl font-semibold mb-2"
          >
            {{ title }}
          </h1>
          <p class="text-sm md:text-base">{{ description }}</p>
        </div>
        <v-img
          :src="`/images/${image}`"
          :width="400"
          aspect-ratio="16/9"
          cover
        >
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
        </v-img>
      </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  imageName: String,
  area: String,
  location: String,
});
</script>