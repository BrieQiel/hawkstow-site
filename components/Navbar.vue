<template>
  <v-toolbar height="75" color="white">
    <v-row class="mx-4">
      <v-img src="public/images/logo.webp" max-width="50" @click="toSlide(0)" class="cursor-pointer"></v-img>
      <div class="flex">
        <v-toolbar-title
          class="cursor-pointer ml-4"
          @click="toSlide(0)"
        >
          <span class="text-[#34a90c] font-extrabold">HAWK</span>
          <span class="text-[#d4bf18] font-extrabold">STOW</span>
          <p class="font-Lexend font-light text-sm">
            Construction and Development
          </p>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="flex hidden-sm-and-down">
        <v-btn variant="text" @click="toSlide(1)">About</v-btn>
        <v-btn variant="text" @click="toSlide(6)">Projects</v-btn>
        <v-btn variant="text" @click="toSlide(7)">Contact</v-btn>
      </v-toolbar-items>
    </v-row>
  </v-toolbar>
</template>

<script setup>
const emit = defineEmits(["toSlide"]);

function toSlide(slide) {
  emit("toSlide", slide);
}
</script>
