<template>
  <div class="mt-8 hidden-md-and-up">
    <v-img
      :src="`/images/${image}`"
      width="200"
      aspect-ratio="1.78"
      :lazy-src="`/images/${image}`"
      cover
      class="mx-auto"
    />
    <div class="m-5">
      <p class="text-xs md:text-base">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: String,
  image: String,
});
</script>
