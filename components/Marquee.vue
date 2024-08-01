<template>
    <div class="w-9/12 h-40 mx-auto relative overflow-hidden startendmask">
        <div class="w-11/12 flex flex-row absolute  marqueeanimation">
          <div class="flex flex-row" style="width: 200%">
            <div v-for="client in clients" class="mr-4 align-center">
              <v-img
                :src="`/images/clients/${client.logo}`"
                :width="80"
                aspect-ratio="1"
                class="mx-auto mb-2"
              />
              <p class="w-40 text-center">{{ client.name }}</p>
            </div>
            <div v-for="client in clients" class="mr-4 align-center">
              <v-img
                :src="`/images/clients/${client.logo}`"
                :width="80"
                aspect-ratio="1"
                class="mx-auto mb-2"
              />
              <p class="w-40 text-center">{{ client.name }}</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
const props = defineProps({
  clients: Array,
});
</script>

<style scoped>
.startendmask {
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
}

.marqueeanimation {
  float: left;
  animation: marquee1 20s linear infinite;
}

@keyframes marquee1 {
  0% {
    left: 0%;
  }
  100% {
    left: -105%;
  }
}
</style>