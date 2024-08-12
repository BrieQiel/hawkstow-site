<template>
<div class="hidden-md-and-up">
  <div class="w-9/12 mx-auto mt-2">
    <HeadingTitle title="Gallery" />
    <v-row class="mt-4 mb-4 flex flex-col align-start">
      <v-cols v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/gallery/${project.link}`">
          <h1
            class="font-Lexend font-semibold text-[#175500] mb-2 mx-8 cursor-pointer"
            :class="isSelected(index)"
          >
            {{ project.title }}
          </h1>
        </NuxtLink>
      </v-cols>
    </v-row>
  </div>

  <div class="mx-2">
    <v-row class="justify-center content-start">
      <v-cols v-for="(image, index) in images" :key="index" class="h-fit">
        <v-img
          :src="`/images/${image}`"
          width="100"
          :aspect-ratio="1"
          cover
          class="m-[2px] cursor-pointer"
        >
          <v-dialog activator="parent" class="">
            <v-img :src="`/images/${image}`" />
          </v-dialog>
        </v-img>
      </v-cols>
    </v-row>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  projects: Array,
  images: Array,
  isSelected: Function,
});
</script>
