<template>
  <v-card outlined class="rounded-0 text-center">
    <v-card-title class="font-weight-black"> 상품 수정 </v-card-title>
    <v-divider></v-divider>
    <v-card outlined class="ma-3 rounded-0">
      <v-simple-table>
        <template>
          <thead>
            <tr class="font-weight-black">
              <th class="text-center" style="width: 300px">대표이미지</th>
              <th class="text-center" style="width: 200px">카테고리</th>
              <th class="text-center" style="width: 300px">상품명</th>
              <th class="text-center" style="width: 200px">상품코드</th>
              <th class="text-center" style="width: 100px">판매가</th>
              <th class="text-center" style="width: 100px">재고수량</th>
            </tr>
          </thead>
          <tbody>
            <tr style="height: 150px">
              <td rowspan="3">
                <img
                  v-if="product.images.length > 0"
                  :src="product.images[0].dataUrl"
                  width="100%"
                />
                <img
                  v-if="product.images.length == 0"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"
                  width="100%"
                />
                <v-file-input
                  v-model="product.images"
                  label=""
                  prepend-inner-icon="mdi-image-plus"
                  prepend-icon=""
                  dense
                  clearable
                  counter
                  multiple
                  single-line
                  accept="image/png, image/jpeg, image/bmp, video/mp4"
                  style="width: 200px"
                  class="rounded-0"
                ></v-file-input>
              </td>
              <td>
                <v-select
                  v-model="product.category"
                  :items="categories"
                  outlined
                  dense
                  single-line
                  style="width: 200px"
                  class="rounded-0 mt-7"
                  >{{
                }}</v-select>
              </td>
              <td>
                <v-text-field
                  v-model="product.name"
                  dense
                  outlined
                  single-line
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="product.code"
                  dense
                  outlined
                  single-line
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="product.price"
                  dense
                  outlined
                  single-line
                  suffix="원"
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="product.quantity"
                  dense
                  outlined
                  single-line
                  suffix="개"
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th class="text-center" style="width: 200px">요약설명</th>
              <th class="text-center" style="width: 200px" colspan="2">
                상세설명
              </th>
              <th class="text-center" style="width: 200px">상품등록일</th>
              <th class="text-center" style="width: 200px">상품수정일</th>
            </tr>
            <tr style="height: 150px">
              <td>
                <v-text-field
                  v-model="product.shortDescription"
                  dense
                  outlined
                  single-line
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
              <td colspan="2">
                <v-text-field
                  v-model="product.description"
                  dense
                  outlined
                  single-line
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="product.createdTime"
                  dense
                  outlined
                  single-line
                  readonly
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
              <td>
                <v-text-field
                  v-model="product.modifiedTime"
                  dense
                  outlined
                  single-line
                  readonly
                  color="#00C73C"
                  class="centered-input rounded-0 mt-7"
                  height="60px"
                ></v-text-field>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-card
      flat
      tile
      style="background-color: #ecedef; border-top: solid 1px #dddddd"
    >
      <v-col class="d-flex">
        <v-btn
          depressed
          color="#7C7E8C"
          min-width="80"
          min-height="36"
          style="font-size: 14px; margin-top: 4px"
          class="pa-0 rounded-0 white--text my-0"
          @click="del(product)"
        >
          상품삭제
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          color="#00C73C"
          min-width="80"
          min-height="36"
          style="font-size: 14px; margin-top: 4px"
          class="pa-0 rounded-0 white--text my-0"
          @click="put(product)"
        >
          상품수정</v-btn
        >
        <v-btn
          depressed
          tile
          color="white"
          min-width="80"
          min-height="36"
          style="font-size: 14px; margin-top: 4px"
          class="pa-0 rounded-0 ml-3 my-0"
          @click="cancel()"
        >
          취소
        </v-btn>
      </v-col>
    </v-card>
  </v-card>
</template>
<style>
.centered-input input {
  text-align: right;
}
</style>

<script>
export default {
  name: "product-detail",
  props: ["product"],
  data: () => ({
    categories: ["육류", "반찬", "야채/과일"],
  }),
  methods: {
    del() {
      // feed-item 컴포넌트에 del 커스텀 이벤트를 작동시킴
      // <feed-item @del="delFeed">
      // this.$emit("del", this.index);
      this.$emit("del", this.product);
    },
    put() {
      this.$emit("put", this.product);
    },
    cancel() {},
  },
};
</script>