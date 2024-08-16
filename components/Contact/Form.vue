<template>
    <div
      class="w-100 p-4 md:p-6 bg-[#e7eae7] rounded-md drop-shadow-md"
    >
      <p class="text-gray-700 text-xs md:text-sm hidden-sm-and-down">
        For any inquiries, questions or commendations, please fill out the given
        form or call the provided number.<br /><br />
      </p>

      <!-- emailer from https://web3forms.com/ -->
      <v-form action="https://api.web3forms.com/submit" method="POST">
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

        <!-- Form Inputs. Each input must have a name="" attribute -->
        <!-- Name and Email -->
        <div class="flex space-x-3">
          <div class="w-1/2">
            <v-text-field
              type="text"
              name="name"
              required
              label="Name*"
              variant="solo"
              flat
              dirty
              density="compact"
              bg-color="white"
              :rules="nameRules"
              @keydown="keydown"
            ></v-text-field>
          </div>
          <div class="w-1/2">
            <v-text-field
              type="email"
              name="email"
              required
              label="Email Address*"
              variant="solo"
              flat
              dirty
              density="compact"
              bg-color="white"
              :rules="emailRules"
              @keydown="keydown"
            ></v-text-field>
          </div>
        </div>

        <!-- Phone number and Address -->
        <div class="flex space-x-3">
          <div class="w-1/2">
            <v-text-field
              type="text"
              name="Phone Number"
              label="Phone Number"
              hide-spin-buttons
              variant="solo"
              flat
              dirty
              density="compact"
              bg-color="white"
              :rules="phoneRules"
              @keydown="keydown"
            ></v-text-field>
          </div>
          <div class="w-1/2">
            <v-text-field
              type="text"
              name="Address"
              label="Address"
              variant="solo"
              flat
              dirty
              density="compact"
              bg-color="white"
              :rules="addressRules"
              @keydown="keydown"
            ></v-text-field>
          </div>
        </div>

        <!-- Subject -->
        <v-text-field
          type="text"
          name="Subject"
          required
          label="Subject*"
          variant="solo"
          flat
          dirty
          prepend-inner-icon=""
          density="compact"
          bg-color="white"
          :rules="subjectRules"
          @keydown="keydown"
        ></v-text-field>

        <!-- Message -->
        <v-textarea
          name="message"
          required
          label="Message*"
          variant="solo"
          flat
          dirty
          prepend-inner-icon=""
          density="compact"
          bg-color="white"
          :rules="messageRules"
        ></v-textarea>

        <v-btn type="submit" color="#175500">Submit Form</v-btn>
        
        <!-- Subject an be prefilled using type="hidden" -->
        <input type="hidden" name="subject" value="New Inquiry" />

        <!-- From Name you want to see in the email -->
        <input type="hidden" name="from_name" value="Hawkstow Inquiry" />
      </v-form>
    </div>
</template>

<script setup>
import { ContactRules } from "@/config/formRules";

const {
  nameRules,
  emailRules,
  phoneRules,
  addressRules,
  subjectRules,
  messageRules,
} = ContactRules;

const keydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};
</script>

<style scoped>
.font-tinier{
    font-size: 8px !important;
}
</style>