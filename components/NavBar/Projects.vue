<template>
  <v-toolbar height="70" color="white">
    <v-row class="mx-4">
      <NuxtLink to="/">
        <img
          src="assets/images/logo.webp"
          width="50"
          class="cursor-pointer"
        ></img>
      </NuxtLink>
      <NuxtLink to="/">
        <div class="flex">
          <v-toolbar-title class="cursor-pointer ml-4">
            <span class="text-[#34a90c] font-extrabold">HAWK</span>
            <span class="text-[#d4bf18] font-extrabold">STOW</span>
            <p class="font-Lexend font-light text-sm">
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
