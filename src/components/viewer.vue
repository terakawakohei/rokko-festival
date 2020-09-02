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

    <v-dialog v-model="dialog" max-width="100%">
      <v-card>
        <v-img
          max-height="500"
          contain
          :src="loadImg(work.fileName)"
          class="grey lighten-2"
        >
        </v-img>
        <v-row justify="center">
          <v-card-title>{{ work.title }}</v-card-title>
        </v-row>
        <v-divider class="mx-4 mb-2"></v-divider>
        <v-card-text class="pb-0">
          <v-row justify="center">
            {{ work.grade }}回生 {{ work.penname }}
          </v-row>
          <v-row justify="center">
            {{ work.tool }}
          </v-row>
          <v-divider class=" mb-4 my-2"></v-divider>
          <v-row class="ml-2">
            {{ work.caption }}
          </v-row>
          <v-divider class="mt-4"></v-divider>
          <v-row justify="center">
            <v-btn
              @click="vote()"
              :disabled="voteDisabled"
              icon
              color="deep-orange"
            >
              <v-icon>mdi-vote</v-icon>
              投票する
            </v-btn>
          </v-row>
          <v-snackbar v-model="snackbar" :timeout="timeout">
            投票しました

            <template v-slot:action="{attrs}">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                閉じる
              </v-btn>
            </template>
          </v-snackbar>
        </v-card-text>
        <v-divider></v-divider>
        <v-textarea
          class="pt-2 mx-2"
          filled
          auto-grow
          label="コメント"
          rows="2"
          row-height="20"
          v-model="comment"
        ></v-textarea>
        <v-row justify="center">
          <v-btn
            @click="sendComment()"
            :disabled="sendDisabled"
            icon
            color="deep-orange"
          >
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-row>
        <v-snackbar v-model="snackbar2" :timeout="timeout">
          送信しました

          <template v-slot:action="{attrs}">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar2 = false">
              閉じる
            </v-btn>
          </template>
        </v-snackbar>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @click="dialog = false" text
            >閉じる</v-btn
          >

          <!-- <v-btn text small disabled>
            コメントする
          </v-btn> -->
        </v-card-actions>
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
    snackbar: false,
    snackbar2: false,
    voteDisabled: false,
    sendDisabled: false,
    timeout: 3000,
    works: theme,
    comment: '',
  }),
  props: {
    work: Object,
    workId: Number,
    type: String,
  },
  methods: {
    loadImg(fileName) {
      return require(`@/assets/${this.type}/${fileName}`);
    },
    vote() {
      this.snackbar = true;
      this.voteDisabled = true;
    },
    sendComment() {
      if (this.comment != '') {
        this.axios.post(
          `https://rokko-festival-server.herokuapp.com/comment/${this.workId}/${this.comment}`
        );
        this.snackbar2 = true;
        this.sendDisabled = true;
        this.comment = '';
      }
    },
  },
  mounted: function() {
    console.log('見えて欲しい');
    this.axios
      .get('https://rokko-festival-server.herokuapp.com/products')
      .then((response) => console.log(response))
      .catch((response) => console.log(response));
  },
  // async comment(words) {
  // 	await this.$axios.put('/api/v1/student/' + this.data.StudentID, {
  // 		DeletedAt: null,
  // 	});
  // 	this.$notify({
  // 		type: 'success',
  // 		title: '成功しました',
  // 	});
  // 	this.showing = false;
  // 	this.$store.dispatch('downloadResource', 'Student');
  // 	this.$eventBus.$emit('reload');
  // },
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
<style scoped>
.v-data-table td {
  white-space: pre-line;
}
</style>
