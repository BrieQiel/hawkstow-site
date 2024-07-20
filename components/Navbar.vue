<template>
  <v-toolbar height="75" color="white">
    <v-row class="mx-4">
      <v-img src="public/images/logo.webp" max-width="50"></v-img>
      <v-toolbar-title class="cursor-pointer ml-4" @click="emitGoToSlide(0)">
        <span class="text-[#34a90c] font-extrabold">HAWK</span>
        <span class="text-[#d4bf18] font-extrabold">STOW</span>
        <p class="font-Lexend font-light text-sm">
          Construction and Development
        </p>
      </v-toolbar-title>
      <v-toolbar-items class="flex hidden-sm-and-down">
        <v-btn variant="text" @click="emitGoToSlide(1)">About</v-btn>
        <v-btn variant="text" @click="emitGoToSlide(2)">Projects</v-btn>
        <v-btn variant="text" @click="emitGoToSlide(3)">Contact</v-btn>
      </v-toolbar-items>
    </v-row>
  </v-toolbar>
</template>

<script setup>
import { ref } from "vue";

useHead({
  title: "Hawkstow Construction and Development",
});

const emit = defineEmits(["go-to-slide"]);

const emitGoToSlide = (slide) => {
  emit("go-to-slide", slide);
};
</script>
