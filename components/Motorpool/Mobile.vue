<template>
  <div class="h-100 text-center hidden-md-and-up " align="center">
    Motorpool
  </div>
</template>

<script setup>
import { clientsData } from "@/data/projectsData";
import { projectData } from "@/data/projectsData";

const clients = ref(clientsData);
const projects = ref(projectData);
</script>


