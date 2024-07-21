<template>
  <v-container class="">
    <h1 class="font-Lexend font-semibold text-[#175500] text-3xl mb-2">
      Our Services
    </h1>
    <v-divider
      class="mx-4 mb-8 border-opacity-100 border-[#d4bf18]"
      :thickness="5"
    ></v-divider>

    <v-row class="h-100 px-8 flex flex-row" align="center">
      <v-col>
        <!-- image to show on mobile view -->
        <v-img :src="`/images/${image}`" class="hidden-md-and-up mb-4" />

        <h1
          class="uppercase text-[#175500] text-lg md:text-xl font-semibold mb-2"
        >
          {{ title }}
        </h1>
        <p class="text-sm md:text-base">{{ description }}</p>
      </v-col>

      <!-- image to show on web view  -->
      <v-col class="hidden-sm-and-down">
        <v-img :src="`/images/${image}`" class="">
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
      </v-col>
    </v-row>
  </v-container>
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
