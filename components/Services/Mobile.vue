<template>
    <div>
        <v-img :src="`/images/${image}`" />
        <div class="mx-5 mt-5">
            <h1
              class="uppercase text-[#175500] text-lg md:text-xl leading-snug font-semibold mb-2"
            >
              {{ title }}
            </h1>
            <p class="text-xs md:text-base">{{ description }}</p>
          </div>
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