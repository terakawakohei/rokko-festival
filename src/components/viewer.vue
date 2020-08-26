<template>
  <div>
    <v-card @click.stop="dialog = true">
      <v-img
        :src="loadImg(work.fileName)"
        aspect-ratio="1"
        class="grey lighten-2"
      >
      </v-img>

      <v-card-text>
        {{ work.title }}
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" scrollable max-width="80%">
      <v-card>
        <v-img :src="loadImg(work.fileName)" class="grey lighten-2"> </v-img>
        <v-row justify="center">
          <v-card-title>{{ work.title }}</v-card-title>
        </v-row>
        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <v-row justify="center">
            {{ work.grade }}回生 {{ work.penname }}
          </v-row>
          <v-row justify="center">
            {{ work.tool }}
          </v-row>
          <v-row justify="center">
            {{ work.caption }}
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import theme from '@/assets/theme/theme.json';

export default {
  data: () => ({
    dialog: false,
    works: theme,
  }),
  props: {
    work: Object,
    type: String,
  },
  methods: {
    loadImg(fileName) {
      return require(`@/assets/${this.type}/${fileName}`);
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
<style></style>
