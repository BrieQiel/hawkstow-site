<template>
    <h1 class="fadefromleft font-Lexend font-semibold text-[#175500] text-2xl md:text-3xl mb-2 mt-5">
        {{ props.title }}
      </h1>
      <v-divider
        class="mx-4 mb-8 border-opacity-100 border-[#d4bf18]"
        :thickness="5"
      ></v-divider>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>