<template>
  <div>
    <v-img :src="`/images/${image}`" :width="250" class="mx-auto"/>
    <div class="m-5">
      <p class="text-xs md:text-base">{{ description }}</p>
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
