<template>
  <div class="w-9/12 md:w-10/12 mx-auto mt-8 lg:mt-8 xl:mt-12">
    <HeadingTitle :title="title" />

    <ServicesMobile
      :description="description"
      :image="image"
    />

    <ServicesDesktop
      :description="description"
      :image="image"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});

</script>

<!--
-->
