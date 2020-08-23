<template>
  <div>
    <v-row justify="center">
      <h1 class="display-1 font-weight-black padding">
        テーマパネル
      </h1>
    </v-row>
    <v-container fluid>
      <v-row>
        <v-card class="mx-auto" tile>
          <v-list dense two-line>
            <v-subheader>目次</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(w, i) in works"
                :key="i"
                :inactive="inactive"
              >
                <v-list-item-content>
                  <v-list-item-title v-html="w.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="w.grade"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col
          v-for="(w, i) in works"
          :key="i"
          class="d-flex child-flex"
          cols="6"
        >
          <Viewer :work="w" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import theme from '@/assets/theme/theme.json';
import Viewer from '@/components/viewer.vue';

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
      //   return `@/assets/theme/${url}`;
      return require(`@/assets/theme/${fileName}`);
      //   return '@/public/theme/スカートsample.jpg';
    },
  },
  computed: {
    shortenedContent: function() {
      let maxlength = 100;
      if (this.content.length <= maxlength) {
        return this.content;
      } else {
        return this.content.substr(0, maxlength - 10) + '...(続きを読む）';
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
