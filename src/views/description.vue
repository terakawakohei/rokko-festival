<template>
  <v-container py-10>
    <!-- <v-overlay absolute> -->
    <v-row justify="center">
      <h1 class="display-1 font-weight-black">Web展示会へようこそ！</h1>
    </v-row>
    <v-row justify="center">
      <v-avatar size="250" color="grey lighten-4">
        <img src="@/assets/logo.png" alt="avatar" />
      </v-avatar>
    </v-row>
    <v-row justify="center">
      <p class="title font-weight-bold mt-12 mb-7"></p>
    </v-row>

    <!-- </v-overlay> -->
  </v-container>
</template>

<script>
export default {
  name: 'description',
};
</script>
<style>
.top {
  margin-top: 60%;
}
</style>
