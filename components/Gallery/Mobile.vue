<template>
    <div
      class="h-100 w-9/12 mx-auto mt-2 hidden-md-and-up"
    >
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
  
      <v-row class="justify-center">
        <v-cols v-for="(image, index) in images" :key="index">
          <v-img
            :src="`/images/${image}`"
            width="150"
            :aspect-ratio="4 / 3"
            cover
            class="m-1 cursor-pointer"
          >
            <v-dialog activator="parent" class="w-1/2">
              <v-img :src="`/images/${image}`" />
            </v-dialog>
          </v-img>
        </v-cols>
      </v-row>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
      projects: Array,
      images: Array,
      isSelected: Function,
  });
  </script>
  