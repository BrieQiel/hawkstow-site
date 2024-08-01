<template>
  <div
    class="h-100 mx-20 mt-20 flex flex-row text-left hidden-sm-and-down"
    align="center"
  >
    <v-img
      :src="`/images/${image}`"
      :width="400"
      height="300"
      lazy-src="assets/images/bg.png"
      cover
    />
    <div class="mx-10">
      <p class="text-sm md:text-base">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  description: String,
  image: String,
});
</script>
