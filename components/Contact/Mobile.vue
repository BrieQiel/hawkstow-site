<template>
  <div class="mt-4 hidden-md-and-up">
    <div align="center" class="mb-2">
      <v-btn density="comfortable" class="ping" color="#175500" text="">
        Details
        <v-dialog activator="parent" class="">
          <div class="bg-white p-6 rounded-md">
            <ContactDetails />
          </div>
        </v-dialog>
      </v-btn>
    </div>
    <ContactForm />
  </div>
</template>

<!--<span class="font-bold hidden-md-and-up">Swipe to view details <v-icon>mdi-arrow-right</v-icon>-->
<!--<v-carousel
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
      </v-carousel>-->
