<template>
  <div>
    <v-row justify="center">
      <h1 class="display-1 font-weight-black pt-6">
        Webパネル展
      </h1>
    </v-row>

    <router-view />

    <v-bottom-navigation app grow color="teal">
      <v-btn to="/panel">
        <span>テーマパネル</span>
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>

      <v-btn to="panel/free">
        <span>フリーパネル</span>
        <v-icon>mdi-brush</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'panel',
  data: function() {
    return {};
  },

  components: {},
};
</script>
<style>
.padding {
  margin-bottom: 90px;
  margin-top: 90px;
}
</style>
