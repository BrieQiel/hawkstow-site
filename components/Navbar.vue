<template>
  <v-toolbar height="75" color="white">
    <v-row class="mx-4">
      <v-img src="public/images/logo.webp" max-width="50"></v-img>
      <v-toolbar-title class="cursor-pointer ml-4" @click="emitToSlide(0)">
        <span class="text-[#34a90c] font-extrabold">HAWK</span>
        <span class="text-[#d4bf18] font-extrabold">STOW</span>
        <p class="font-Lexend font-light text-sm">
          Construction and Development
        </p>
      </v-toolbar-title>
      <v-toolbar-items class="flex hidden-sm-and-down">
        <v-btn variant="text" @click="emitToSlide(1)">About</v-btn>
        <v-btn variant="text" @click="emitToSlide(5)">Projects</v-btn>
        <v-btn variant="text" @click="emitToSlide(6)">Contact</v-btn>
      </v-toolbar-items>
    </v-row>
  </v-toolbar>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);

const emit = defineEmits(["toSlide"]);

function emitToSlide(slide) {
  emit("emitToSlide", slide);
}


</script>
