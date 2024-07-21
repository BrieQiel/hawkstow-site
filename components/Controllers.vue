<template>
  <v-row class="absolute z-50 bottom-28 w-100" justify="center">
    <v-btn class="mr-6" @click="propsNext.onClick">
      <v-icon>mdi-arrow-down</v-icon>
    </v-btn>
    <v-btn class="ml-6" @click="propsPrev.onClick">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-row>
</template>

<script setup>
const props = defineProps({
  propsNext: Object,
  propsPrev: Object,
})
</script>
