<template>
  <!-- 카테고리 -->
  <v-card outlined class="rounded-0">
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >카테고리<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-select
          v-model="category"
          :items="categories"
          :rules="[rules.required]"
          label="카테고리를 선택하세요."
          style="width: 250px"
          outlined
          dense
          single-line
          color="#00C73C"
          class="rounded-0"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 상품명 -->
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >상품명<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-text-field
          v-model="name"
          :rules="[rules.required, rules.counter]"
          :counter="250"
          dense
          outlined
          clearable
          single-line
          color="#00C73C"
          label="예) 케라시스 티트리오일 샴푸, 1L"
          style="width: 500px"
          class="rounded-0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 상품코드 -->
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >상품코드</span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-text-field
          v-model="code"
          dense
          outlined
          clearable
          single-line
          color="#00C73C"
          style="width: 200px"
          class="rounded-0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 판매가 -->
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >판매가<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-text-field
          v-model="price"
          :rules="[rules.required, rules.minimumPrice]"
          dense
          outlined
          clearable
          single-line
          suffix="원"
          type="number"
          color="#00C73C"
          label="숫자만 입력"
          style="width: 200px"
          class="rounded-0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 재고수량 -->
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >재고수량<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-text-field
          v-model="quantity"
          :rules="[rules.required]"
          dense
          outlined
          clearable
          single-line
          suffix="개"
          type="number"
          color="#00C73C"
          label="숫자만 입력"
          style="width: 200px"
          class="rounded-0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 이미지 -->
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >이미지<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-file-input
          v-model="files"
          :rules="[rules.required]"
          label=""
          prepend-inner-icon="mdi-image-plus"
          prepend-icon=""
          outlined
          dense
          clearable
          counter
          multiple
          single-line
          accept="image/png, image/jpeg, image/bmp, video/mp4"
          style="width: 200px"
          class="rounded-0"
        ></v-file-input>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 요약설명 -->
    <v-row class="vrow">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >요약설명<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="vcol">
        <v-text-field
          v-model="shortDescription"
          :rules="[rules.required]"
          dense
          outlined
          clearable
          single-line
          color="#00C73C"
          style="width: 1000px"
          class="rounded-0"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- 상세설명 -->
    <v-row style="height: 280px">
      <v-col cols="1" class="my-auto">
        <span
          style="font-size: 18px; margin-left: 18px"
          class="font-weight-black"
          >상세설명<v-icon style="color: red">mdi-circle-small</v-icon></span
        >
      </v-col>
      <v-col cols="9" class="mt-14">
        <v-textarea
          v-model="description"
          :rules="[rules.required]"
          dense
          outlined
          clearable
          no-resize
          single-line
          color="#00C73C"
          style="width: 1000px"
          class="rounded-0"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-card>
</template>
<style lang="scss" scoped>
.vrow {
  min-height: 136px;
}
.vcol {
  margin-top: 36px;
}
</style>
<script>
export default {
  name: "product-register-form",
  data: () => ({
    categories: ["육류", "반찬", "야채/과일"],
    category: "",
    name: "",
    code: "",
    price: "",
    quantity: "",
    shortDescription: "",
    description: "",
    files: [],
    products: [],
    rules: {
      required: (value) => !!value || "필수 항목입니다.",
      counter: (value) =>
        (!!value && value.length <= 250) || "최대 250자까지 가능합니다.",
      minimumPrice: (value) => value >= 10 || "최소 10원 이상 입력해주세요.",
    },
  }),
};
</script>