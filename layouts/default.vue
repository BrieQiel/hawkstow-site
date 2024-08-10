<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script setup>
useHead({
  meta: [
    { name: 'description', content: 'Building Future Pathways' },
    { property: 'og:url', content: 'https://hawkstow-website-b83ac9bf6350.herokuapp.com/' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Hawkstow Construction and Development' },
    { property: 'og:description', content: 'Building Future Pathways' },
    { property: 'og:image', content: 'https://hawkstow-website-b83ac9bf6350.herokuapp.com/meta.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:domain', content: 'hawkstow-website-b83ac9bf6350.herokuapp.com' },
    { property: 'twitter:url', content: 'https://hawkstow-website-b83ac9bf6350.herokuapp.com/' },
    { name: 'twitter:title', content: 'Hawkstow Construction and Development' },
    { name: 'twitter:description', content: 'Building Future Pathways' },
    { name: 'twitter:image', content: 'https://hawkstow-website-b83ac9bf6350.herokuapp.com/meta.png' },
  ]
})
</script>
