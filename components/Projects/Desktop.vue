<template>
  <div class="h-100 mx-20 mt-20 text-left" align="center">
    wag nyo muna pansinin part na to pls ty
    <div class="w-9/12 border overflow-hidden">
        <div class="flex flex-row marqueeanimation">
            <div v-for="client in clients" class="flex flex-row mx-16 clients">
              <v-img :src="`/images/clients/${client.logo}`" :width="100" />
              pls?
            </div>
          </div>
    </div>
  </div>
</template>

<script setup>
import { projectsData } from "@/data/projectsData";

const clients = ref(projectsData);
</script>

<style scoped>
.marqueeanimation {
  animation: marquee 10s linear 0s infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
