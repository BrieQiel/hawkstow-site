<template>
  <ServicesCardMobile :servicesList="servicesList" />
  <ServicesCardDesktop
    :servicesList="servicesList"
  />
</template>

<script setup>
const props = defineProps({
  servicesList: Array,
});
</script>