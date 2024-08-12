<template>
  <div class="w-9/12 md:w-10/12 mx-auto mt-8 lg:mt-8 xl:mt-12">
    <div class="w-4/12 h-100 m-4 float-end">
      <span class="font-Lexend font-bold text-xl text-[#175500]"
        >Visitor Map</span
      >
      <!-- google maps embed -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30886.537537600787!2d121.1261786743164!3d14.609487400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8c94c0faf6f%3A0xa52d357dbd0d2d7a!2sHawkstow%20Construction%20And%20Development!5e0!3m2!1sen!2sph!4v1723281029532!5m2!1sen!2sph"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="h-72 w-100 mb-8 mt-2"
      ></iframe>

      <p class="mb-8">
        <span class="font-Lexend font-bold text-xl text-[#175500] mb-4"
          >Head Office</span
        >
        <br />
        <span class=""
          >Lot 14 Block 5, Emerald Hills Subdivision, Brgy. Sta. Cruz, Antipolo
          City,1870, Philippines</span
        >
      </p>
      <p class="">
        To get a quote, please call:
        <span class="font-bold text-[#175500] text-lg">+63 90000000</span>
      </p>
    </div>
    <div
      class="w-7/12 h-5/12 m-4 float-start p-6 bg-[#e7eae7] rounded-md drop-shadow-md"
    >
      <p class="text-gray-700">
        For any inquiries, questions or commendations, please fill out the given
        form or call the provided number.<br /><br />
      </p>
      <form action="https://api.web3forms.com/submit" method="POST">
        <!-- Replace value="value" with your Access Key -->
        <input
          type="hidden"
          name="access_key"
          value="6d1d42bb-b29d-424e-9bab-d1c25d71d2e8"
        />

        <!-- Honeypot Spam Protection -->
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          style="display: none"
        />

        <!-- Subject an be prefilled using type="hidden" -->
        <input type="hidden" name="subject" value="New Inquiry" />

        <!-- From Name you want to see in the email -->
        <input type="hidden" name="from_name" value="Hawkstow Inquiry" />

        <!-- Custom Confirmation / Success Page -->
        <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> -->

        <!-- Form Inputs. Each input must have a name="" attribute -->
        <div class="flex flex-row">
          <v-text-field
            type="text"
            name="name"
            required
            label="Name*"
            variant="solo"
            flat
            density="comfortable"
            bg-color="white"
            class="mr-2"
          ></v-text-field>
          <v-text-field
            type="email"
            name="email"
            required
            label="Email Address*"
            variant="solo"
            flat
            density="comfortable"
            bg-color="white"
            class="ml-2"
          ></v-text-field>
        </div>
        <div class="flex flex-row">
          <v-text-field
            type="text"
            name="Phone Number"
            label="Phone Number"
            variant="solo"
            flat
            density="comfortable"
            bg-color="white"
            class="mr-2"
          ></v-text-field>
          <v-text-field
            type="text"
            name="Address"
            label="Address"
            variant="solo"
            flat
            density="comfortable"
            bg-color="white"
            class="ml-2"
          ></v-text-field>
        </div>
        <v-text-field
          type="text"
          name="Subject"
          required
          label="Subject*"
          variant="solo"
          flat
          density="comfortable"
          bg-color="white"
        ></v-text-field>

        <v-textarea
          name="message"
          required
          label="Message*"
          variant="solo"
          flat
          density="comfortable"
          bg-color="white"
        ></v-textarea>

        <v-btn type="submit" color="#175500">Submit Form</v-btn>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<!--
gmaps hawkstow
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30886.537537600787!2d121.1261786743164!3d14.609487400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8c94c0faf6f%3A0xa52d357dbd0d2d7a!2sHawkstow%20Construction%20And%20Development!5e0!3m2!1sen!2sph!4v1723281029532!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
-->
