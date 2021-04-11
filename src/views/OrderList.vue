<template>
  <div>
    <v-card outlined class="mb-3 rounded-0">
      <v-card-title class="font-weight-black">
        <span>주문 목록</span>
      </v-card-title>
    </v-card>
    <v-card outlined class="rounded-0">
      <v-card-title style="font-size: 14px">
        [검색 결과<span style="color: red">{{ orders.length }}</span
        >건]
      </v-card-title>
      <v-card outlined class="mx-3 mb-3 rounded-0 text-center">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center" style="font-size: 14px">주문일자</th>
                <th class="text-center" style="font-size: 14px">주문번호</th>
                <th class="text-center" style="font-size: 14px">주문자</th>
                <th class="text-center" style="font-size: 14px">상품명</th>
                <th class="text-center" style="font-size: 14px">수량</th>
                <th class="text-center" style="font-size: 14px">결제금액</th>
                <th class="text-center" style="font-size: 14px">최종수정일</th>
                <th class="text-center" style="font-size: 14px">주문상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(order, i) in orders" :key="i">
                <td style="width: 240px">{{ order.orderDate }}</td>
                <td>{{ order.orderNumber }}</td>
                <td>{{ order.userName }}</td>
                <td>{{ order.productName }}</td>
                <td style="width: 100px">{{ order.quantity }}</td>
                <td style="width: 160px">{{ order.price }}</td>
                <td style="width: 240px">{{ order.modifiedTime }}</td>
                <td style="width: 160px">
                  {{ order.purchaseState }}
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
                    <order-status :order="order" @put="modifyStatus">
                    </order-status>
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
<style scoped>
tbody tr {
  height: 80px;
}
td {
  border-right: 1px solid #cccccc;
}
th {
  border-right: 1px solid #cccccc;
  background-color: #f8f9fd;
}
</style>
<script>
import OrderStatus from "../components/OrderStatus.vue";
import api from "../api/order";
export default {
  components: {
    OrderStatus,
  },
  data: () => ({
    // orderDate: "",
    // code: "",
    // userName: "",
    // productName: "",
    // quantity: "",
    // price: "",
    // modifiedTime: "",
    orders: [],
    closeOnContentClick: false,
    selected: [],
  }),
  mounted() {
    // 목록조회 함수 호출
    this.getOrders();
  },
  computed: {
    selectAll: {
      get: function () {
        return this.orders ? this.selected.length == this.orders.length : false;
      },
      set: function (value) {
        var selected = [];

        if (value) {
          this.orders.forEach(function (order) {
            selected.push(order.id);
          });
        }

        this.selected = selected;
      },
    },
  },
  methods: {
    async getOrders() {
      const result = await api.list();
      console.log(result);
      console.log(result.data);
      console.log("------");
      if (result.status == 200) {
        this.orders = result.data;
        for (let i = 0; i < this.orders.length; i++) {
          console.log(this.orders[i].purchaseState);
        }
      }
    },
    async modifyStatus(order) {
      console.log("order.id : " + order.id);
      const result = await api.put(order.id, order.purchaseState);
      console.log(result);
      console.log(result.data);

      // if (result.status == 200) {
      //   this.orders = result.data;
      // this.$router.go(0);
      //}
    },
  },
};
</script>