<template>
  <div
    class="h-100 mx-20 mt-12 lg:mt-12 xl:mt-20 flex flex-row text-left hidden-sm-and-down"
    align="center"
  >
    <video v-if="video" controls autoplay muted disablepictureinpicture loop width="350">
      <source :src="`/videos/${video}`" type="video/mp4" />
    </video>
    <v-img
      v-else
      :src="`/images/services/${image}`"
      :width="350"
      aspect-ratio="1.67"
      :lazy-src="`/images/services/${image}`"
      cover
      class="border"
    />
    <div class="mx-10">
      <p class="text-sm lg:text-sm xl:text-base">{{ description }}</p>
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
