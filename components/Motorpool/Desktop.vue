<template>
  <div
    class="h-100 mx-20 mt-8 lg:mt-12 xl:mt-20 text-center hidden-sm-and-down"
    align="center"
  >
    Motorpool
  </div>
</template>

<script setup>
import { clientsData } from "@/data/projectsData";
import { projectData } from "@/data/projectsData";

const clients = ref(clientsData);
const projects = ref(projectData);
</script>

