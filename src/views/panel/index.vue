<template>
  <div>
    <v-row justify="center">
      <h1 class="display-1 font-weight-black padding">
        Webパネル展
      </h1>
    </v-row>

    <router-view />

    <v-bottom-navigation app>
      <v-btn to="/panel">
        <span>テーマパネル</span>
      </v-btn>

      <v-btn to="panel/free">
        <span>フリーパネル</span>
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
