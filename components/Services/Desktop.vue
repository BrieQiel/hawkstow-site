<template>
  <div class="h-100 mx-20 mt-20 flex flex-row text-left" align="center">
    <v-img :src="`/images/${image}`" :width="400" aspect-ratio="16/9" cover />
    <div class="mx-10">
      <p class="text-sm md:text-base">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: String,
  image: String,
  imageName: String,
  area: String,
  location: String,
});
</script>
