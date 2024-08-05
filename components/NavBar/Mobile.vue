<template>
  <v-toolbar height="65" color="white" class="hidden-md-and-up">
    <v-row class="mx-4">
      <v-img
        src="assets/images/logo.webp"
        max-width="40"
        @click="toSlide(0)"
        class="cursor-pointer"
      ></v-img>
      <div class="flex">
        <v-toolbar-title class="cursor-pointer ml-3" @click="toSlide(0)">
          <span class="text-[#34a90c] font-extrabold text-sm">HAWK</span>
          <span class="text-[#d4bf18] font-extrabold text-sm">STOW</span>
          <p class="font-Lexend font-light text-xs">
            Construction and Development
          </p>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="#175500" v-bind="props" icon="mdi-menu"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn variant="text" @click="toSlide(1)">
              <p class="text-xs">About</p>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="text" @click="toSlide(6)">
              <p class="text-xs">Projects</p>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn variant="text" @click="toSlide(7)">
              <p class="text-xs">Contact</p>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
  </v-toolbar>
</template>

<script setup>
const emit = defineEmits(["toSlide"]);

function toSlide(slide) {
  emit("toSlide", slide);
}
</script>
