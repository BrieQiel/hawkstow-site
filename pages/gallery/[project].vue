<template>
  <ProjectsNavbar />
  <div class="h-100 w-9/12 md:w-10/12 mx-auto mt-2 lg:mt-8 xl:mt-12">
    <HeadingTitle title="Gallery" />
    <div class="mt-4 mb-8 flex flex-row align-end">
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

    <v-row class="justify-center">
        <v-cols v-for="(image, index) in images" :key="index">
            <v-img :src="`/images/${image}`" width="200" :aspect-ratio="4/3" cover class="m-1 cursor-pointer">
                <v-dialog activator="parent" max-width="1000" class="w-1/2">
                    <v-img :src="`/images/${image}`" width="1000" class="m-1"></v-img>
                </v-dialog>
            </v-img>
        </v-cols>
    </v-row>
  </div>
</template>

<script setup>
import { projectData } from "@/data/projectsData";
import { useRoute } from "vue-router";

const route = useRoute();
const projects = ref(projectData);
const projectDetails = ref({});
const images = ref([]);

onMounted(() => {
  projectDetails.value = projects.value.find(
    (project) => project.link === route.params.project
  );
  if (projectDetails.value) {
    images.value = projectDetails.value.images;
  }
});

const isSelected = (index) => {
  if (route.path === `/projects/${projects.value[index].link}`) {
    return "text-lg md:text-xl mb-2 underline";
  } else {
    return "text-sm md:text-base mb-2 hover:underline hover:cursor-pointer";
  }
};
</script>
