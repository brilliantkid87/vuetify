<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="celcius" label="Celcius"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>

    <v-divider class="mt-4"></v-divider>
    <h2>Hasil Submit:</h2>
    <div v-if="submittedData">
      <p>Fahrenheit: {{ convertToFahrenheit() }} &#8457;</p>
      <p>Kelvin: {{ convertToKelvin() }} K</p>
      <p>Reamur: {{ convertToReamur() }} &#176;Re</p>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    celcius: '',
    submittedData: false,
  }),
  methods: {
    convertToFahrenheit() {
      return (this.celcius * 9/5) + 32;
    },
    convertToKelvin() {
      return parseFloat(this.celcius) + 273.15;
    },
    convertToReamur() {
      return this.celcius * 4/5;
    },
    submitForm() {
      this.submittedData = true;
    }
  }
}
</script>
