<template>
  <ProjectsNavbar />

  <GalleryDesktop
    :projects="projects"
    :images="images"
    :isSelected="isSelected"
  />

  <GalleryMobile
    :projects="projects"
    :images="images"
    :isSelected="isSelected"
  />
</template>

<script setup>
import { projectData } from "@/data/projectsData";
import { useRoute } from "vue-router";

useHead({
  title: "Gallery | Hawkstow Construction and Development",
});

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
  if (route.path === `/gallery/${projects.value[index].link}`) {
    return "text-base md:text-xl mb-2 underline";
  } else {
    return "text-xs md:text-base mb-2 hover:underline";
  }
};
</script>
