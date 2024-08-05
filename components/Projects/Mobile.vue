<template>
  <div class="h-100 text-center hidden-md-and-up " align="center">
    <div class="mb-12">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/projects/${project.link}`">
          <v-img
            :src="`/images/${project.image}`"
            aspect-ratio="3/4"
            :lazy-src="`/images/${project.image}`"
            cover
            class="mx-auto my-4 w-44"
          >
            <v-container
              class="h-full font-Lexend text-lg text-white bg-transparent opacity-100 content-center"
            >
              <p class="tracking-wider text-xs">{{ project.title }}</p>
            </v-container>
          </v-img>
        </NuxtLink>
      </div>
    </div>

    <Marquee :fade="true">
      <div v-for="client in clients" class="w-32 mb-4 align-center">
        <v-img
          :src="`/images/clients/${client.logo}`"
          :width="60"
          aspect-ratio="1"
          class="mx-auto mb-2"
        />
        <p class="text-center text-xs">{{ client.name }}</p>
      </div>
    </Marquee>
    <p class="font-Lexend font-semibold text-[#175500] text-xl">&#38; <br /> PRIVATE BUSINESSES</p>
  </div>
</template>

<script setup>
import { clientsData } from "@/data/projectsData";
import { projectThumbnails } from "@/data/projectsData";

const clients = ref(clientsData);
const projects = ref(projectThumbnails);
</script>


