<template>
  <v-card class="elevation-1 pa-3">
    <v-card-text>
      <div class="layout column align-center">
        <h1 class="flex my-4 primary--text">Material Admin Template</h1>
      </div>
      <v-form>
        <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="model.username"></v-text-field>
        <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="model.password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn icon>
        <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="red">fa fa-google fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    model: {
      username: 'admin@isockde.com',
      password: 'password'
    }
  }),

  methods: {
    login () {
      this.loading = true
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
    }
  }

}
</script>
<style scoped lang="css">
</style>
