<template>
  <p class="mb-5 mt-4">
    <span class="font-Lexend font-bold text-lg md:text-xl text-[#175500] mb-4"
      >Head Office</span
    >
    <br />
    <span class="text-xs md:text-base"
      >Lot 14 Block 5, Emerald Hills Subdivision, Brgy. Sta. Cruz, Antipolo
      City, 1870, Philippines</span
    >
  </p>

  <span class="font-Lexend font-bold text-lg md:text-xl text-[#175500]">Visitor Map</span>
  <!-- google maps embed -->
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30886.537537600787!2d121.1261786743164!3d14.609487400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8c94c0faf6f%3A0xa52d357dbd0d2d7a!2sHawkstow%20Construction%20And%20Development!5e0!3m2!1sen!2sph!4v1723281029532!5m2!1sen!2sph"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="h-48 w-100 mb-8 mt-2 aspect-auto"
  ></iframe>

  <p class="">
    To get a quote, please call:
    <br />
    <a :href="`tel:${tel}`" class="font-bold text-[#175500] text-lg font-Lexend underline">{{ tel }}</a>
  </p>
</template>
<script setup>
const tel = '+63 90000000'
</script>
