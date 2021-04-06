<template>
  <div>
    <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>주문 목록</span>
      </v-card-title>
    </v-card>
    <v-card outlined class="rounded-0">
      <v-card-title class="font-weight-black"> 주문 목록 </v-card-title>
      <v-card outlined class="mx-3 mb-3 rounded-0 text-center">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  <input type="checkbox" v-model="selectAll" />
                </th>
                <th class="text-center" style="font-size: 14px">상품명</th>
                <th class="text-center" style="font-size: 14px">상품코드</th>
                <th class="text-center" style="font-size: 14px">판매가</th>
                <th class="text-center" style="font-size: 14px">재고수량</th>
                <th class="text-center" style="font-size: 14px">카테고리</th>
                <th class="text-center" style="font-size: 14px">상품등록일</th>
                <th class="text-center" style="font-size: 14px">최종수정일</th>
                <th class="text-center" style="font-size: 14px">요약설명</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, i) in products" :key="i">
                <td>
                  <input
                    type="checkbox"
                    v-model="selected"
                    :value="product.id"
                  />
                </td>
                <v-menu tile bottom right offset-x>
                  <template v-slot:activator="{ on }">
                    <td>
                      <span v-on="on" style="text-decoration: underline">{{
                        product.name
                      }}</span>
                    </td>
                  </template>
                  <v-list>
                    <v-list-item
                      ><v-btn @click="deleteProducts(product)"
                        >Remove</v-btn
                      ></v-list-item
                    >
                    <v-list-item><v-btn text>Edit</v-btn></v-list-item>
                    <v-list-item
                      ><v-btn text>{{
                        product.description
                      }}</v-btn></v-list-item
                    >
                  </v-list>
                </v-menu>

                <td>{{ product.code }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.createdTime }}</td>
                <td>{{ product.modifiedTime }}</td>
                <td style="width: 300px">
                  {{ product.category }}
                  <br />
                  <v-menu
                    top
                    left
                    :close-on-content-click="closeOnContentClick"
                  >
                    <template v-slot:activator="{ on }"
                      ><v-btn
                        v-on="on"
                        outlined
                        depressed
                        min-width="72"
                        max-height="28"
                        style="font-size: 13px; margin-top: 10px"
                        class="pa-0 rounded-0"
                      >
                        상태변경
                      </v-btn>
                    </template>
                    <order-status> </order-status>
                  </v-menu>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-card>
  </div>
</template>
<style>
tbody tr {
  height: 80px;
}
</style>
<script>
import OrderStatus from "../components/OrderStatus.vue";
import api from "../api/product";
export default {
  components: {
    OrderStatus,
  },
  data: () => ({
    products: [],
    closeOnContentClick: false,
    selected: [],
  }),
  mounted() {
    // 목록조회 함수 호출
    this.getProducts();
  },
  computed: {
    selectAll: {
      get: function () {
        return this.products
          ? this.selected.length == this.products.length
          : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.products.forEach(function (product) {
            selected.push(product.id);
          });
        }

        this.selected = selected;
      },
    },
  },
  methods: {
    async getProducts() {
      const result = await api.list();
      console.log(result);
      console.log(result.data);
      console.log("------");
      if (result.status == 200) {
        this.products = result.data;
      }
    },
  },
};
</script>