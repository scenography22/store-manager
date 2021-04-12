<template>
  <div>
    <!--반응형 grid layout 컨테이너-->
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark
                      >mdi-credit-card-check-outline</v-icon
                    >
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text
                  style="font-size: 36px; font-weight: bold"
                  class="statement"
                  @click="goToOrderList()"
                  >{{ countA }}</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >결제완료</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark>mdi-truck</v-icon>
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text
                  style="font-size: 36px; font-weight: bold"
                  class="statement"
                  @click="goToOrderList()"
                  >{{ countB }}</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >배송대기</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark>mdi-truck-fast</v-icon>
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text
                  style="font-size: 36px; font-weight: bold"
                  class="statement"
                  @click="goToOrderList()"
                  >{{ countC }}</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >배송중</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card
            outlined
            tile
            style="height: 150px; margin-top: 16px"
            elevation="3"
          >
            <v-row align="center">
              <v-col class="display-3" cols="6">
                <v-sheet
                  class="v-sheet--offset mx-auto text-center"
                  style="margin-left: -50px"
                  color="#"
                  elevation="3"
                  width="140"
                >
                  <v-avatar color="#00C73C" size="140" tile>
                    <v-icon size="64" dark>mdi-truck-check</v-icon>
                  </v-avatar>
                </v-sheet>
              </v-col>
              <v-col cols="6" class="text-right">
                <v-card-text
                  style="font-size: 36px; font-weight: bold"
                  class="statement"
                  @click="goToOrderList()"
                  >{{ countD }}</v-card-text
                >
                <v-card-text style="font-size: 18px; color: #00c73c"
                  >배송완료</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card outlined height="500" tile elevation="3"
            ><v-card-title
              style="font-size: 16px; font-weight: bold; height: 60px"
            >
              스토어 결제금액 통계
            </v-card-title>
            <v-divider></v-divider>
            <div id="chart" class="pa-10">
              <apexchart
                ref="chart1"
                type="line"
                width="700"
                height="350"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card outlined height="500" tile elevation="3"
            ><v-card-title
              style="font-size: 16px; font-weight: bold; height: 60px"
            >
              스토어 결제건수 통계
            </v-card-title>
            <v-divider></v-divider>
            <div id="chart" class="pa-10">
              <apexchart
                type="line"
                width="700"
                height="350"
                :options="chartOptions"
                :series="series"
              ></apexchart></div
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.v-sheet--offset {
  top: -18px;
  position: relative;
}
.statement:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
import api from "../api/order";
export default {
  data: () => ({
    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0,
    series: [],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "일별 결제금액",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      colors: ["#00C73C"],
    },
  }),
  components: {
    apexchart: VueApexCharts,
  },
  mounted() {
    this.getOrders();
    this.uChart();
  },
  methods: {
    async getOrders() {
      const result = await api.list();
      if (result.status == 200) {
        this.orders = result.data;
        for (let i = 0; i < this.orders.length; i++) {
          switch (this.orders[i].purchaseState) {
            case "결제완료":
              this.countA++;
              break;
            case "배송대기":
              this.countB++;
              break;
            case "배송중":
              this.countC++;
              break;
            case "배송완료":
              this.countD++;
              break;
          }
        }
      }
    },
    goToOrderList() {
      this.$router.push("/orderlist");
    },
    uChart() {
      axios
        .get(
          "http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly"
        )
        .then((response) => {
          this.$refs.chart1.updateSeries([
            {
              name: "결제금액",
              data: response.data,
            },
          ]);
          console.log(response.data);
          console.log(response.data[0].x);
        });

      // console.log(this.$refs.chart1);
    },
  },
};
</script>
