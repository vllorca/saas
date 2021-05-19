<template>
  <div>
    <h3>Login</h3>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-btn @click="login()"> Login via keycloak </v-btn>
        </v-col>
      </v-row>
      {{ showuser }}
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith("keycloak")
    },
  },

  computed : {
    showUser () {
      return this.$auth
    }
  }
}
</script>

<style scoped></style>
