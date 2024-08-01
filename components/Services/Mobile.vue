<template>
  <div class="hidden-md-and-up">
    <v-img
      :src="`/images/${image}`"
      :width="250"
      height="150"
      lazy-src="assets/images/bg.png"
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
