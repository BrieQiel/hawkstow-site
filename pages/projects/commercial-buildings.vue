<template>
  <ProjectsNavbar />
  <div class="h-100 w-9/12 md:w-10/12 mx-auto mt-2 lg:mt-8 xl:mt-12">
    <HeadingTitle title="Gallery" />
    <div class="mx-8 mt-4 flex flex-row align-end">
      <h1
        class="font-Lexend font-semibold text-[#175500] text-lg md:text-xl mb-2 underline"
      >
        Commercial Buildings
      </h1>
      <NuxtLink to="/projects/government-buildings">
        <h1
          class="font-Lexend font-semibold text-[#175500] text-sm md:text-base mb-2 mx-8 hover:underline hover:cursor-pointer"
        >
          Government Buildings
        </h1>
      </NuxtLink>
      <NuxtLink to="/projects/roads">
        <h1
          class="font-Lexend font-semibold text-[#175500] text-sm md:text-base mb-2 mx-8 hover:underline hover:cursor-pointer"
        >
          Roads
        </h1>
      </NuxtLink>
    </div>

    <div class="mx-8 mt-4 flex flex-row align-end">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/project/${project.link}`">
          <h1
          class="font-Lexend font-semibold text-[#175500] mb-2 mx-8 "
        >
          {{ project.title }}
        </h1>
        </NuxtLink>
      </div>
    </div>

    <p>Commercial Buildings</p>
  </div>
</template>

<script setup>
import { projectThumbnails } from "@/data/projectsData";
import { route } from 'vue';

const projects = ref(projectThumbnails);

const isSelected = () => {
  
}
</script>
<!--
text-sm md:text-base mb-2 mx-8 hover:underline hover:cursor-pointer
-->
<!--
text-lg md:text-xl mb-2 underline
-->