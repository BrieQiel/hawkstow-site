<template>
  <NavBarProjects />
  <v-divider
    class="border-opacity-100 border-[#175500]"
    :thickness="4"
  ></v-divider>

  <div class="h-100 w-9/12 md:w-10/12 mx-auto mt-7 lg:mt-8 xl:mt-12 border">
    <HeadingTitle :title="title" />
  </div>
</template>

<script setup>
const title = "Projects";
</script>
