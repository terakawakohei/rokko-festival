<template>
  <v-container>
    <v-sheet class="py-10 px-8 my-16" color="grey lighten-3">
      <v-row justify="center">
        <v-col cols="9">
          <div class="font-weight-black text-center text-h4 mb-7">
            フリーパネル
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12" md="5">
          <v-sheet
            class="pa-10"
            color="white lighten-3"
            rounded="xl"
            height="240"
          >
            <div></div>
            <v-sheet rounded="xl" class="mx-auto" height="100" width="100">
              <v-row align="center" justify="space-around">
                <v-col cols="5" md="5">
                  <v-icon x-large color="orange">mdi-vote</v-icon>
                </v-col>
                <v-col cols="5" md="5">
                  <v-icon x-large color="orange"
                    >mdi-comment-multiple-outline</v-icon
                  >
                </v-col>
              </v-row></v-sheet
            >

            <div></div>
            <p class=" font-weight-black text-center mt-2">
              気に入った作品には投票＆コメントをお願いします！
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
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
    <Questionnaire />
  </v-container>
</template>

<script>
// @ is an alias to /src
import free from "@/assets/free/free.json";
import Viewer from "@/components/viewer.vue";
import Questionnaire from "@/components/questionnaire.vue";

export default {
  data: () => ({
    dialog: false,
    works: free,
  }),
  components: {
    Viewer,
    Questionnaire,
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
