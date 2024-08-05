<template>
  <ProjectsNavbar />
  <div class="h-100 w-9/12 md:w-10/12 mx-auto mt-2 lg:mt-8 xl:mt-12">
    <HeadingTitle title="Gallery" />
    <div class="mt-4 flex flex-row align-end">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/projects/${project.link}`">
          <h1
            class="font-Lexend font-semibold text-[#175500] mb-2 mx-8"
            :class="isSelected(index)"
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
import { useRoute } from "vue-router";

const projects = ref(projectThumbnails);
const route = useRoute();

const isSelected = (index) => {
  if (route.path === `/projects/${projects.value[index].link}`) {
    return "text-lg md:text-xl mb-2 underline";
  } else {
    return "text-sm md:text-base mb-2 hover:underline hover:cursor-pointer";
  }
};
</script>
