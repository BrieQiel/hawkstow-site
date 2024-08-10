<template>
  <div
    class="h-100 w-9/12 md:w-10/12 mx-auto mt-2 lg:mt-8 xl:mt-12 hidden-sm-and-down"
  >
    <HeadingTitle title="Gallery" />
    <div class="mt-4 mb-8 flex flex-row align-end">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/gallery/${project.link}`">
          <h1
            class="font-Lexend font-semibold text-[#175500] mb-2 mx-8 cursor-pointer"
            :class="isSelected(index)"
          >
            {{ project.title }}
          </h1>
        </NuxtLink>
      </div>
    </div>

    <v-row class="justify-center">
      <v-cols v-for="(image, index) in images" :key="index">
        <v-img
          :src="`/images/${image}`"
          width="200"
          :aspect-ratio="4 / 3"
          cover
          class="m-1 cursor-pointer"
        >
          <v-dialog activator="parent" class="w-1/2">
            <v-img :src="`/images/${image}`" class="m-1"></v-img>
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
