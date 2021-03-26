<template>
  <div>
    <v-container class="writeContainer">
      <v-row>
        <v-col>
          <div class="field">
            <v-text-field
              label="제목을 입력하세요"
              v-model="title"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              label="닉네임을 입력하세요"
              v-model="nickname"
              outlined
              dense
            ></v-text-field>
            <v-btn @click="check">중복체크</v-btn>
            <v-text-field
              label="비밀번호를 입력하세요"
              v-model="password"
              outlined
              dense
            ></v-text-field>
          </div>

          <div style="text-align: center">
            <textarea
              cols="100"
              rows="20"
              style="border: 1px solid black"
              v-model="post"
            ></textarea>
          </div>
          <div class="field">
            <v-file-input
              v-model="files"
              prepend-icon="mdi-camera"
              label="pick photos or videos"
              accept="image/png, image/jpeg, image/bmp, video/mp4"
              multiple
            >
            </v-file-input>
          </div>

          <div style="text-align: center">
            <v-btn small color="primary" @click="moveToMain()">목록</v-btn>
            <v-btn
              small
              color="primary"
              @click="share()"
              style="text-align: center"
              >저장</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.writeContainer {
  width: 1000px;
  margin-top: 10px;
  background-color: pink;
}
.field {
  width: 300px;
  margin: 0 auto;
}
</style>

<script>
import api from "../api/review";

export default {
  data: () => ({
    title: "",
    nickname: "",
    password: "",
    contents: "",
    files: [],
    post: [],
    reviews: [],
    checkname: true,
  }),

  methods: {
    async share() {
      if (this.checkname == "중복아님") {
        if (this.title && this.nickname && this.password) {
          const review = {
            title: this.title,
            nickname: this.nickname,
            password: this.password,
            content: this.post,
          };
          console.log("-------");
          console.log(review);
          console.log("-------");
          const result = await api.post(review);

          console.log(result);

          console.log(result.status);

          console.log(result.data);

          if (result.status == 200) {
            const newReview = result.data;
            newReview.files = [];

            if (this.files && this.files.length > 0) {
              for (let file of this.files) {
                const form = new FormData();
                form.append("data", file);
                const result = await api.uploadFile(newReview.id, form);
                console.log(result.status);
                console.log(result.data);
                newReview.files.push({
                  ...result.data,
                });
              }
            }

            this.reviews.unshift(newReview);
            this.$router.push("/ReviewMain");
          }
        } else {
          alert("빈칸이 있습니다.");
        }
      } else {
        console.log("응?");
        alert("중복체크를 다시하시오");
      }
    },
    async check() {
      const resultL = await api.list();

      for (let get of resultL.data) {
        if (get.nickname == this.nickname) {
          alert("중복입니다.");
          break;
        }
        this.checkname = false;
      }

      if (this.checkname == true || this.checkname == false) {
        alert("중복아님");
      }
    },
    moveToMain() {
      this.$router.push("/ReviewMain");
    },
  },
};
</script>