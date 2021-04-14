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
                :options="chartOptions1"
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
                ref="chart2"
                type="bar"
                width="700"
                height="350"
                :options="chartOptions2"
                :series="series2"
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
const moment = require("moment");
const week = [];

for (let i = 0; i < 7; i++) {
  week[6 - i] = moment().add(-i, "days").format("YYYY-MM-DD");
}
export default {
  data: () => ({
    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0,
    payA: 0,
    payB: 0,
    payC: 0,
    payD: 0,
    payE: 0,
    payF: 0,
    payG: 0,
    data: [],
    chartLoading: false,
    series: [],
    series2: [],
    chartOptions1: {
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
      // xaxis: {
      //   categories: "week",
      // },
      colors: ["#00C73C"],
    },
    chartOptions2: {
      chart: {
        height: 350,
        type: "bar",
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
        text: "일별 결제건수",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: week,
      },
      colors: ["#00C73C"],
    },
  }),
  components: {
    apexchart: VueApexCharts,
  },
  mounted() {
    this.getOrders();
    this.uChart1();
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
    uChart1() {
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

          // for (let i = 0; i < response.data.length; i++) {
          //   this.$refs.chart1.updateSeries.data = [
          //     response.data[i].x,
          //     response.data[i].y,
          //   ];
          // }
          // console.log("나는야원근맨");
          // console.log(this.$refs.chart1.updateSeries.data);
          // console.log("나는야원근맨");
          // console.log(response.data[0].x);
        });

      // console.log(this.$refs.chart1);
    },
    uChart() {
      axios.get("http://localhost:8090/purchase-orders").then((response) => {
        this.orders = response.data;
        console.log(this.orders);

        for (let i = 0; i < this.orders.length; i++) {
          switch (this.orders[i].orderDay) {
            case moment(new Date()).format("YYYY-MM-DD"):
              this.payA++;
              break;
            case moment(new Date()).subtract(1, "days").format("YYYY-MM-DD"):
              this.payB++;
              break;
            case moment(new Date()).subtract(2, "days").format("YYYY-MM-DD"):
              this.payC++;
              break;
            case moment(new Date()).subtract(3, "days").format("YYYY-MM-DD"):
              this.payD++;
              break;
            case moment(new Date()).subtract(4, "days").format("YYYY-MM-DD"):
              this.payE++;
              break;
            case moment(new Date()).subtract(5, "days").format("YYYY-MM-DD"):
              this.payF++;
              break;
            case moment(new Date()).subtract(6, "days").format("YYYY-MM-DD"):
              this.payG++;
              break;
          }
        }

        this.$refs.chart2.updateSeries([
          {
            name: "결제건수",
            data: [
              this.payG,
              this.payF,
              this.payE,
              this.payD,
              this.payC,
              this.payB,
              this.payA,
            ],
          },
        ]);
        console.log(
          moment(new Date()).format("YYYY-MM-DD") + " : " + this.payA
        );
        console.log(
          moment(new Date()).subtract(1, "days").format("YYYY-MM-DD") +
            " : " +
            this.payB
        );
        console.log(
          moment(new Date()).subtract(2, "days").format("YYYY-MM-DD") +
            " : " +
            this.payC
        );
        console.log(
          moment(new Date()).subtract(3, "days").format("YYYY-MM-DD") +
            " : " +
            this.payD
        );
        console.log(
          moment(new Date()).subtract(4, "days").format("YYYY-MM-DD") +
            " : " +
            this.payE
        );
        console.log(
          moment(new Date()).subtract(5, "days").format("YYYY-MM-DD") +
            " : " +
            this.payF
        );
        console.log(
          moment(new Date()).subtract(6, "days").format("YYYY-MM-DD") +
            " : " +
            this.payG
        );
      });
    },
  },
};
</script>
