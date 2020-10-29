<template>
  <v-container>
    <v-row justify="center">
      <h1 class="display-1 font-weight-black padding">フリーパネル</h1>
    </v-row>
    <v-container fluid>
      <v-row justify="center">
        <v-card class="mx-auto" tile>
          <v-list dense two-line min-width="350">
            <v-list-group color="primary">
              <template v-slot:activator>
                <v-list-item-title>目次</v-list-item-title>
              </template>
              <v-list-item
                href="#"
                v-for="(w, i) in works"
                :key="i"
                @click="scroll(w.id)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ w.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ w.penname }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row space-around justify="center">
        <v-col
          v-for="(w, i) in works"
          :key="i"
          cols="6"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          :id="w.id"
        >
          <Viewer :work="w" :workId="w.id" type="free" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import free from "@/assets/free/free.json";
import Viewer from "@/components/viewer.vue";

export default {
  data: () => ({
    dialog: false,
    works: free,
  }),
  components: {
    Viewer,
  },
  methods: {
    loadImg(fileName) {
      return require(`@/assets/free/${fileName}`);
    },
    scroll(num) {
      event.preventDefault();
      this.$SmoothScroll(document.getElementById(num), 1200, null, null, "y");
      setTimeout(
        () => {
          this.$store.commit("changeMenuSelection", num);
        },
        1000,
        "num"
      );
    },
  },
};
</script>
<style>
.padding {
  margin-bottom: 90px;
  margin-top: 90px;
}
</style>
