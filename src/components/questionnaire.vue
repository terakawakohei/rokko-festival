<template>
  <v-sheet class="py-10 px-8 my-16" color="grey lighten-3">
    <v-row justify="center">
      <v-col cols="11">
        <p class=" font-weight-black text-center text-h6">
          Web展示に関するアンケートにご協力ください
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="orange" dark v-bind="attrs" v-on="on">
            アンケートに回答
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline text-subtitle-1"
              >Web展示会についてのアンケート</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <div class="font-weight-black text-center text-subtitle-2">
                性別
              </div>
              <v-row justify="center">
                <v-radio-group v-model="gender" row>
                  <v-radio label="男" value="male"></v-radio>
                  <v-radio label="女" value="female"></v-radio>
                </v-radio-group>
                <v-col cols="12">
                  <v-divider class="my-7"></v-divider>
                  <div class="font-weight-black text-center text-subtitle-2">
                    年齢
                  </div>
                  <v-select
                    :items="ages"
                    v-model="age"
                    label=""
                    dense
                  ></v-select>
                </v-col>
                <v-divider class="my-7"></v-divider>
                <div class="font-weight-black text-center text-subtitle-2">
                  展示会の印象をお答えください.
                </div>
                <v-col cols="12">
                  <div class="text-center">
                    <v-rating
                      v-model="rate"
                      background-color="orange lighten-3"
                      color="orange"
                      large
                    ></v-rating>
                  </div>
                  <v-divider class="my-7"></v-divider>
                </v-col>
                <div class="font-weight-black text-center text-subtitle-2">
                  その他展示に関するご意見、ご感想などございましたらご自由にお書きください
                </div>
                <v-col cols="12">
                  <v-textarea v-model="opinion" label=""></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              閉じる
            </v-btn>
            <v-btn color="blue darken-1" text type="submit" @click="send()">
              送信
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-sheet>
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    dialog: false,
    ages: ["~19", "20~29", "30~39", "40~49", "50~"],
    age: "",
    gender: "",
    rate: Number,
    opinion: "",
  }),
  methods: {
    send() {
      if (this.opinion != "") {
        this.axios.post(
          `https://rokko-festival-server.herokuapp.com/questionnaire/${this.age}/${this.gender}/${this.rate}/${this.opinion}`
        );
        this.$store.dispatch("setMessage", "送信しました");
        this.$store.dispatch("snackOn");
        this.opinion = "";
        this.rate = 0;
        (this.gender = ""), (this.age = "");
      }
      this.dialog = false;
    },
  },
};
</script>
<style scoped></style>
