<template>
  <div class="h-100 mx-20 mt-20 text-left" align="center">
    <Marquee :clients="clients" />
  </div>
</template>

<script setup>
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
</script>


