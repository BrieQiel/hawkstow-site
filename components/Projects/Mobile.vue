<template>
  <div class="h-100 text-center hidden-md-and-up " align="center">
<!--
    commented out for now; no pics yet

    <v-row class="mb-12 mt-4 justify-center">
      <v-cols v-for="(project, index) in projects" :key="index" class="m-1 w-[47%] mb-3 ping">
        <NuxtLink :to="`/gallery/${project.link}`">
          <v-img
            :src="`/images/projects/${project.thumbnail}`"
            :lazy-src="`/images/projects/${project.thumbnail}`"
            cover
            class="mx-auto mb-1"
            style="box-shadow: 0px 5px 10px #848484;"
            aspect-ratio="1.5"
          >
          </v-img>
          <p class="font-Lexend font-medium text-[#175500] text-xs drop-shadow underline">{{ project.title }}</p>
        </NuxtLink>
      </v-cols>
    </v-row>    

-->

    <Marquee :fade="true">
      <div v-for="client in clients" class="w-24 mb-4 align-center mt-8">
        <v-img
          :src="`/images/clients/${client.logo}`"
          :width="50"
          aspect-ratio="1"
          class="mx-auto mb-2"
        />
        <p class="text-center text-xs">{{ client.name }}</p>
      </div>
    </Marquee>
    <p class="font-Lexend font-semibold text-[#175500] text-l mt-8">&#38; <br /> PRIVATE BUSINESSES</p>
  </div>
</template>

<script setup>
import { clientsData } from "@/data/projectsData";
import { projectData } from "@/data/projectsData";

const clients = ref(clientsData);
const projects = ref(projectData);
</script>


