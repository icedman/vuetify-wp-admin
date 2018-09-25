<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <!-- <v-flex xs12 sm8 md4> -->
          <div style="margin:auto">
            <router-view/>
          </div>
          <!-- </v-flex> -->
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
