<template>
  <div
    class="h-100 mx-20 mt-4 lg:mt-4 xl:mt-16 text-center hidden-sm-and-down"
    align="center"
  >
    <div class="flex flex-row md:mb-16 justify-center">
      <div v-for="(project, index) in projects" :key="index">
        <NuxtLink :to="`/projects/${project.link}`">
          <v-img
            :src="`/images/${project.image}`"
            aspect-ratio="3/4"
            lazy-src="assets/images/bg.png"
            cover
            class="mx-8 w-44 md:w-44 lg:w-52 xl:w-64 2xl:w-80"
          >
            <v-container
              class="h-full font-Lexend text-lg text-white bg-[#84bf6e] opacity-5 hover:opacity-100 content-center"
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
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
const projects = ref([
  {
    title: "Commercial Buildings",
    link: "commercial-buildings",
    image: "bg.png",
  },
  {
    title: "Government Buildings",
    link: "government-buildings",
    image: "bg.png",
  },
  {
    title: "Roads",
    link: "roads",
    image: "bg.png",
  },
]);
</script>

<!--
<NuxtLink to="/projects/commercial-buildings">
        <v-img
          src="assets/images/bg.png"
          aspect-ratio="3/4"
          lazy-src="assets/images/bg.png"
          cover
          class="mx-8 w-44 md:w-44 lg:w-52 xl:w-64 2xl:w-80"
        >
          <v-container
            class="h-full font-Lexend text-lg text-white bg-[#84bf6e] opacity-5 hover:opacity-100 content-center"
          >
            <p class="tracking-wider">Commercial Buildings</p>
          </v-container>
        </v-img>
      </NuxtLink>
      <NuxtLink to="/projects">
        <v-img
          src="assets/images/bg.png"
          aspect-ratio="3/4"
          lazy-src="assets/images/bg.png"
          cover
          class="mx-8 w-44 md:w-44 lg:w-52 xl:w-64 2xl:w-80"
        />
      </NuxtLink>

      <NuxtLink to="/projects">
        <v-img
          src="assets/images/bg.png"
          aspect-ratio="3/4"
          lazy-src="assets/images/bg.png"
          cover
          class="mx-8 w-44 md:w-44 lg:w-52 xl:w-64 2xl:w-80"
      /></NuxtLink>
-->
