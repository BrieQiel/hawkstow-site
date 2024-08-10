<template>
  <v-toolbar height="65" color="white" class="hidden-md-and-up">
    <v-spacer></v-spacer>
    <v-row class="mx-4">
      <NuxtLink to="/">
        <v-img
          src="assets/images/logo.webp"
          width="40"
          height="46"
          class="cursor-pointer"
        ></v-img>
      </NuxtLink>
      <NuxtLink to="/">
        <div class="flex">
          <v-toolbar-title class="cursor-pointer ml-3">
            <span class="text-[#34a90c] font-extrabold text-sm">HAWK</span>
            <span class="text-[#d4bf18] font-extrabold text-sm">STOW</span>
            <p class="font-Lexend font-light text-xs">
              Construction and Development
            </p>
          </v-toolbar-title>
        </div>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-toolbar-items class="flex hidden-sm-and-down"> </v-toolbar-items>
    </v-row>
  </v-toolbar>
</template>

<script setup></script>
