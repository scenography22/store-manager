<template>
  <div>
    <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>상품 등록</span>
        <div style="color: red; font-size: 16px" class="ml-3">
          <v-icon style="color: red">mdi-circle-small</v-icon>
          <span>필수 항목</span>
        </div>
      </v-card-title>
    </v-card>

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
            v-model="images"
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

    <v-footer fixed padless app>
      <v-card
        flat
        tile
        height="80px"
        width="100%"
        color="#ECEDEF"
        style="border-top: solid 1px #dddddd"
      >
        <v-col class="text-right">
          <v-btn
            tile
            color="#00C73C"
            min-width="120"
            min-height="50"
            style="font-size: 16px; margin-right: 10px; margin-top: 4px"
            class="white--text"
            @click="regist()"
          >
            상품등록</v-btn
          >
          <v-btn
            tile
            color="white"
            min-width="120"
            min-height="50"
            style="font-size: 16px; margin-top: 4px"
            @click="goToProductList()"
          >
            취소
          </v-btn>
        </v-col>
      </v-card>
    </v-footer>
  </div>
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
import api from "../api/product";
export default {
  data: () => ({
    categories: ["육류", "반찬", "야채/과일"],
    category: "",
    name: "",
    code: "",
    price: "",
    quantity: "",
    shortDescription: "",
    description: "",
    images: [],
    products: [],
    rules: {
      required: (value) => !!value || "필수 항목입니다.",
      counter: (value) =>
        (!!value && value.length <= 250) || "최대 250자까지 가능합니다.",
      minimumPrice: (value) => value >= 10 || "최소 10원 이상 입력해주세요.",
    },
  }),
  methods: {
    async regist() {
      console.log("--shared--");
      const product = {
        // 입력박스가 v-model 연결되어 있음
        category: this.category,
        name: this.name,
        code: this.code,
        price: this.price,
        quantity: this.quantity,
        shortDescription: this.shortDescription,
        description: this.description,
      };
      if (
        this.category &&
        this.name &&
        this.price &&
        this.quantity &&
        this.images &&
        this.shortDescription &&
        this.description
      ) {
        const result = await api.post(product);
        if (result.status == 200) {
          // 서버에서 응답받은 객체
          const newProduct = result.data;
          newProduct.images = []; // 파일목록 초기화

          // this.images > image-input과 바인딩 되어있음
          // 파일객체 여러개가 저장되는 배열
          if (this.images && this.images.length > 0) {
            //파일 업로드를 하고
            for (let image of this.images) {
              const form = new FormData();
              form.append("data", image);
              const result = await api.uploadFile(newProduct.id, form);
              console.log(result.status);
              console.log(result.data);

              newProduct.images.push({
                ...result.data,
              });
            }
          }
          this.products.unshift(newProduct);
          // alert("상품이 등록되었습니다.");
          this.$router.push("/ProductList");
        }
      } else {
        alert("필수 항목을 모두 입력해주세요.");
      }
    },
    goToProductList() {
      this.$router.push("/ProductList");
    },
  },
};
</script>