<template>
  <div class="h-100 text-center hidden-md-and-up " align="center">
    <v-row class="mb-16 mt-4 justify-center">
      <v-cols v-for="(project, index) in projects" :key="index" class="aspect-video m-1 w-5/12 ping">
        <NuxtLink :to="`/gallery/${project.link}`">
          <v-img
            :src="`/images/${project.thumbnail}`"
            :lazy-src="`/images/${project.thumbnail}`"
            cover
            class="mx-auto"
          >
            <v-container
              class="h-full font-Lexend text-lg text-white bg-transparent opacity-100 content-center"
            >
              <p class="tracking-wider text-xs">{{ project.title }}</p>
            </v-container>
          </v-img>
        </NuxtLink>
      </v-cols>
    </v-row>

    <Marquee :fade="true">
      <div v-for="client in clients" class="w-24 mb-4 align-center">
        <v-img
          :src="`/images/clients/${client.logo}`"
          :width="50"
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
import { projectData } from "@/data/projectsData";

const clients = ref(clientsData);
const projects = ref(projectData);
</script>


