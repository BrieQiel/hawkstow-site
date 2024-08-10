<template>
  <div
    class="h-100 mx-20 mt-8 lg:mt-12 xl:mt-20 text-center hidden-sm-and-down"
    align="center"
  >
    <div class="flex flex-row md:mb-16 content-center justify-center">
      <div v-for="(project, index) in projects" :key="index"  class="mx-4 w-10/12 aspect-video">
        <NuxtLink :to="`/gallery/${project.link}`">
          <v-img
            :src="`/images/${project.thumbnail}`"
            height="200"
            :lazy-src="`/images/${project.thumbnail}`"
            cover
          >
            <v-container
              class="h-full font-Lexend text-lg text-white bg-[#84bf6e] opacity-[.01] hover:opacity-100 content-center"
            >
              <p class="tracking-wider">{{ project.title }}</p>
            </v-container>
          </v-img>
        </NuxtLink>
      </div>
    </div>

    <Marquee :fade="true" :pauseOnHover="true">
      <div v-for="client in clients" class="w-40 mr-4 align-center">
        <v-img
          :src="`/images/clients/${client.logo}`"
          :width="60"
          aspect-ratio="1"
          class="mx-auto mb-2"
        />
        <p class="text-center text-xs">{{ client.name }}</p>
      </div>
    </Marquee>
    <p class="font-Lexend font-semibold text-[#175500] text-xl">
      &#38; <br />
      PRIVATE BUSINESSES
    </p>
  </div>
</template>

<script setup>
import { clientsData } from "@/data/projectsData";
import { projectData } from "@/data/projectsData";

const clients = ref(clientsData);
const projects = ref(projectData);
</script>

<!--w-44 md:w-44 lg:w-52 xl:w-64 2xl:w-80-->