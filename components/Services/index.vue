<template>
  <div class="w-9/12 md:w-10/12 mx-auto mt-12">
    <HeadingTitle :title="title" />

    <ServicesMobile
      :description="description"
      :image="image"
      :imageName="imageName"
      :area="area"
      :location="location"
      class="hidden-md-and-up mb-4"
    />

    <ServicesDesktop
      :description="description"
      :image="image"
      :imageName="imageName"
      :area="area"
      :location="location"
      class="hidden-sm-and-down"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  imageName: String,
  area: String,
  location: String,
});

</script>

<!--
-->
