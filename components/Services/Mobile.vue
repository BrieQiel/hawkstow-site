<template>
  <div class="mt-8 hidden-md-and-up">
    <video v-if="video" controls autoplay muted disablepictureinpicture loop width="250" class="mx-auto">
      <source :src="`/videos/${video}`" type="video/mp4" />
    </video>
    <v-img
    v-else
      :src="`/images/services/${image}`"
      width="250"
      aspect-ratio="1.78"
      :lazy-src="`/images/services/${image}`"
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
  video: String,
});
</script>
