<template>
  <div>
    <v-row justify="center">
      <h1 class="display-1 font-weight-black padding">テーマパネル</h1>
    </v-row>
    <v-container fluid>
      <v-row>
        <v-card class="mx-auto" tile>
          <v-list dense two-line>
            <v-subheader>目次</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                href="#"
                v-for="(w, i) in works"
                :key="i"
                @click="Scroll(w.id)"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ w.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ w.penname }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
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
        >
          <Viewer :work="w" :workId="w.id" type="theme" :id="w.id" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import theme from "@/assets/theme/theme.json";
import Viewer from "@/components/viewer.vue";

export default {
  data: () => ({
    dialog: false,
    works: theme,
  }),
  components: {
    Viewer,
  },
  methods: {
    loadImg(fileName) {
      return require(`@/assets/theme/${fileName}`);
    },
    Scroll(num) {
      event.preventDefault();
      this.$SmoothScroll(document.getElementById(num), 1200, null, null, "y");
    },
  },
  computed: {
    shortenedContent: function () {
      let maxlength = 100;
      if (this.content.length <= maxlength) {
        return this.content;
      } else {
        return this.content.substr(0, maxlength - 10) + "...(続きを読む）";
      }
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
