<template>
    <div class="mt-4 hidden-md-and-up">
      <v-carousel
      hide-delimiters
      :show-arrows="false"
      progress="#175500"
      class="h-100">
        <v-carousel-item>
            <ContactForm />  
        </v-carousel-item>
        <v-carousel-item>
            <ContactDetails />  
        </v-carousel-item>
      </v-carousel>
    </div>
</template>