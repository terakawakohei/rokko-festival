<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="white" v-bind="attrs" v-on="on">
        <v-icon large color="orange">mdi-comment-text-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline"></span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row justify="center">
            <div class="font-weight-black text-center text-subtitle-2">
              ご意見、ご感想などをお願いします
            </div>
            <v-col cols="12">
              <v-textarea v-model="comment" label=""></v-textarea>
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
</template>
<script>
// @ is an alias to /src

export default {
  data: () => ({
    dialog: false,
    comment: "",
  }),
  props: {
    type: String,
  },
  methods: {
    send() {
      if (this.comment != "") {
        this.axios.post(
          `https://rokko-festival-server.herokuapp.com/impression/${this.type}/${this.comment}`
        );
        this.$store.dispatch("setMessage", "送信しました");
        this.$store.dispatch("snackOn");
        this.comment = "";
      }
      this.dialog = false;
    },
  },
};
</script>
<style scoped></style>
