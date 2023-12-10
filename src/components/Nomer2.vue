<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="kecepatan" label="Kecepatan (km/h)"></v-text-field>
      <v-text-field v-model="jarakTempuh" label="Jarak Tempuh (km)"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>

    <v-divider class="mt-4"></v-divider>

    <h2>Hasil Submit:</h2>
    <div v-if="submittedData.length > 0">
      <p>Kecepatan: {{ submittedData[submittedData.length - 1].kecepatan }} km/h</p>
      <p>Jarak Tempuh: {{ submittedData[submittedData.length - 1].jarakTempuh }} km</p>
      <p>Waktu Tempuh: {{ calculateWaktuTempuh(submittedData[submittedData.length - 1]) }}</p>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    kecepatan: '',
    jarakTempuh: '',
    submittedData: [],
  }),
  methods: {
    submitForm() {
      const newSubmission = {
        kecepatan: parseFloat(this.kecepatan),
        jarakTempuh: parseFloat(this.jarakTempuh),
      };

      this.submittedData.push(newSubmission);
      this.resetForm();
    },
    resetForm() {
      this.kecepatan = '';
      this.jarakTempuh = '';
    },
    calculateWaktuTempuh(submission) {
      // Calculate the time of travel in hours and minutes
      const waktuTempuhInHours = submission.jarakTempuh / submission.kecepatan;
      const hours = Math.floor(waktuTempuhInHours);
      const minutes = Math.round((waktuTempuhInHours % 1) * 60);

      return `${hours} jam ${minutes} menit`;
    },
  },
};
</script>
