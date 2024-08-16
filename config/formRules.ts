//ContactRules from SCTC

export const ContactRules: Record<string, Function[]> = {
  nameRules: [
    (value: any) => !!value || "Please enter your name",
    (value: any) =>
      (value && value.trim().length >= 3) ||
      "Name must be at least 3 characters long",
    (value: any) =>
      /^[a-zA-Z\s]*$/.test(value) ||
      "Name must contain only letters and spaces",
  ],

  emailRules: [
    (value: any) => !!value || "Please enter your email address",
    (value: any) => /.+@.+\..+/.test(value) || "Email must be valid",
    (value: any) =>
      (value && value.trim().length <= 50) ||
      "Email must be less than 50 characters long",
  ],

  // removed rules for phone and address
  // because they are not required in the contact form
  /*
  phoneRules: [
    (value: any) =>
      /^(?:\+63|0)?[0-9]{10}$/.test(value) || "Please enter a valid phone number",
  ],

  addressRules: [
    (value: any) =>
      (value && value.trim().length <= 100) ||
      "Address must be less than 100 characters long",
  ],
*/

  subjectRules: [
    (value: any) => !!value || "Subject is required",
    (value: any) =>
      (value && value.trim().length >= 2) ||
      "Subject must be at least 2 characters long",
    (value: any) =>
      /^[a-zA-Z\s]*$/.test(value) ||
      "Subject must contain only letters and spaces",
  ],

  messageRules: [
    (value: any) => !!value || "Message is required",
    (value: any) =>
      (value && value.trim().length >= 2) ||
      "Message must be at least 2 characters long",
    (value: any) =>
      (value && value.trim().length <= 500) ||
      "Message must be less than or equal to 500 characters long",
  ],
};
