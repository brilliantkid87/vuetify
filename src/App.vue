<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <!-- Your application content goes here -->
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
/* Your global styles go here */
</style>
