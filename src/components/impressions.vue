<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="white" v-bind="attrs" v-on="on">
        <v-icon x-large color="orange">mdi-comment-text-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ type }}に関する感想</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row justify="center">
            <v-radio-group name="entry.777886392_sentinel" row>
              <v-radio label="男" value="radio-1"></v-radio>
              <v-radio label="女" value="radio-2"></v-radio>
            </v-radio-group>
            <v-col cols="12">
              <v-select :items="items" label="年齢" dense></v-select>
            </v-col>
            <div class="font-weight-black text-center text-subtitle-2">
              展示会の印象をお答えください.
            </div>
            <v-col cols="12">
              <div class="text-center">
                <v-rating
                  name="entry.933654273_sentinel"
                  background-color="orange lighten-3"
                  color="orange"
                  large
                ></v-rating>
              </div>
            </v-col>
            <div class="font-weight-black text-center text-subtitle-2">
              その他展示に関するご意見、ご感想などございましたらご自由にお書きください
            </div>
            <v-col cols="12">
              <v-textarea
                name="entry.190625869"
                label=""
                value=""
                hint="Hint text"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          閉じる
        </v-btn>
        <v-btn color="blue darken-1" text type="submit" @click="dialog = false">
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
    items: ["~19", "20~", "30~", "40~", "50~"],
  }),
  props: {
    type: String,
  },
  methods: {},
};
</script>
<style scoped></style>
