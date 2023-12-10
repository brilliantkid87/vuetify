<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="namaLengkap" label="Nama Lengkap"></v-text-field>
      <v-text-field v-model="alamat" label="Alamat"></v-text-field>
      <v-text-field v-model="status" label="Status"></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
      <v-btn type="reset" block class="mt-2">Reset</v-btn>

      <v-divider class="mt-4"></v-divider>
      <h2>Hasil Submit:</h2>
      <div v-if="submittedData.length > 0">
        <div v-for="(data, index) in submittedData" :key="index">
          <p><strong>Nama Lengkap:</strong> {{ data.namaLengkap }}</p>
          <p><strong>Alamat:</strong> {{ data.alamat }}</p>
          <p><strong>Status:</strong> {{ data.status }}</p>
          <v-divider v-if="index !== submittedData.length - 1" class="mt-2"></v-divider>
        </div>
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    namaLengkap: '',
    alamat: '',
    status: '',
    submittedData: [],
  }),
  methods: {
    submitForm() {
      const newSubmission = {
        namaLengkap: this.namaLengkap,
        alamat: this.alamat,
        status: this.status,
      };

      this.submittedData.push(newSubmission);
      this.resetForm();
    },
    resetForm() {
      this.namaLengkap = '';
      this.alamat = '';
      this.status = '';
    },
  },
};
</script>
