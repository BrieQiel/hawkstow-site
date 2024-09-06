<template>
  <div class="text-center h-3/4">
    <h1
      class="fadefromleft font-Lexend font-semibold leading-relaxed lg:leading-relaxed xl:leading-relaxed text-white underline decoration-[#d4bf18] underline-offset-8 mt-36 text-3xl lg:text-4xl xl:text-5xl">
      BUILDING FUTURE
      <br />
      PATHWAYS
    </h1>

    <!-- logo in web view -->
    <v-row
      class="hidden-sm-and-down justify-center absolute bottom-32 lg:bottom-32 xl:bottom-44 left-1/2 -translate-x-1/2">
      <v-col class="mb-4">
        <v-img src="assets/images/logo.webp" max-width="60" class="mx-auto" />
        <span class="text-[#428f28] font-extrabold text-lg lg:text-xl xl:text-2xl">HAWK</span>
        <span class="text-[#d4bf18] font-extrabold text-lg lg:text-xl xl:text-2xl">STOW</span>
        <p class="text-white font-Lexend font-light text-xs lg:text-sm xl:text-base">
          Construction and Development
        </p>
      </v-col>

      <v-col class="hidden-sm-and-down">
        <v-img src="public/images/iso.png" max-width="93" class="mx-auto mb-2" cover />
        <p class="text-white font-Lexend font-light text-sm lg:text-sm xl:text-base">
          Cert. Reg. No. QMS 23 93 0125
        </p>
      </v-col>
    </v-row>

    <!-- logo in mobile view -->
    <v-row
      class="hidden-md-and-up w-100 justify-center absolute bottom-32 mx-auto">
      <v-col class="mb-4" cols="12">
        <v-img src="assets/images/logo.webp" max-width="60" class="mx-auto" />
        <span class="text-[#428f28] font-extrabold text-lg">HAWK</span>
        <span class="text-[#d4bf18] font-extrabold text-lg">STOW</span>
        <p class="text-white font-Lexend font-light text-xs">
          Construction and Development
        </p>
      </v-col>

      <v-col>
        <v-row class="">
          <v-col class="hidden-md-and-up">
            <v-img src="public/images/iso.png" max-width="60" class="mx-auto mb-2" cover />
            <p class="text-white font-Lexend font-light text-xs">
              Cert. Reg. No. QMS 23 93 0125
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
