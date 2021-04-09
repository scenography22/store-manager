<template>
  <div>
    <v-app>
      <v-container grid-list-md class="outer-container">
        <v-layout row wrap justify-left>
          <v-flex mr-4 mb-5>
            <v-card>
              <v-layout row fluid justify-center class="card-image">
                <v-flex xs3 align-center class="back-up">
                  <v-img
                    src="https://res.cloudinary.com/cschroeder/image/upload/v1542293711/Icons/users.png"
                    height="80px"
                    width="80px"
                    class="elevation-3 d-1 d-image"
                  ></v-img>
                </v-flex>
                <v-flex xs3 class="back-up" ml-4>
                  <v-card-title primary-title align-right>
                    <div>
                      <span class="grey--text text-xs-right">결제완료</span>
                      <div class="headline text-xs-right">43</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>

              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">
                  User Registrations
                </div>
                <div class="subheading font-weight-light grey--text">
                  Last Campaign Performance
                </div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small> mdi-clock </v-icon>
                <span class="caption grey--text font-weight-light"
                  >last registration 26 minutes ago</span
                >
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex mr-4 mb-5>
            <v-card>
              <v-layout row fluid justify-center class="card-image">
                <v-flex xs3 align-center class="back-up">
                  <v-img
                    src="https://res.cloudinary.com/cschroeder/image/upload/v1542293711/Icons/users.png"
                    height="80px"
                    width="80px"
                    class="elevation-3 d-1 d-image"
                  ></v-img>
                </v-flex>
                <v-flex xs3 class="back-up" ml-4>
                  <v-card-title primary-title align-right>
                    <div>
                      <span class="grey--text text-xs-right">Customers</span>
                      <div class="headline text-xs-right">43</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
              <v-card-actions text-xs-center>
                <v-spacer></v-spacer>
                <v-btn flat small color="primary">View Customers</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex mr-4 mb-5>
            <v-card>
              <v-layout row fluid justify-center class="card-image">
                <v-flex xs3 align-center class="back-up">
                  <v-img
                    src="https://res.cloudinary.com/cschroeder/image/upload/v1542293711/Icons/users.png"
                    height="80px"
                    width="80px"
                    class="elevation-3 d-1 d-image"
                  ></v-img>
                </v-flex>
                <v-flex xs3 class="back-up" ml-4>
                  <v-card-title primary-title align-right>
                    <div>
                      <span class="grey--text text-xs-right">Customers</span>
                      <div class="headline text-xs-right">43</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
              <v-card-actions text-xs-center>
                <v-spacer></v-spacer>
                <v-btn flat small color="primary">View Customers</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex mb-5>
            <v-card>
              <v-layout row fluid justify-center class="card-image">
                <v-flex xs3 align-center class="back-up">
                  <v-img
                    src="https://res.cloudinary.com/cschroeder/image/upload/v1542293711/Icons/users.png"
                    height="80px"
                    width="80px"
                    class="elevation-3 d-1 d-image"
                  ></v-img>
                </v-flex>
                <v-flex xs3 class="back-up" ml-4>
                  <v-card-title primary-title align-right>
                    <div>
                      <span class="grey--text text-xs-right">Customers</span>
                      <div class="headline text-xs-right">43</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>

              <v-divider light></v-divider>
              <v-card-actions text-xs-center>
                <v-spacer></v-spacer>
                <v-btn flat small color="primary">View Customers</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>
<style>
.back-up {
  margin-top: -20px;
}

.outer-container {
  margin-top: 40px;
}

.d-image .v-image__image--cover {
  background-size: 70% 70%;
}

.d-1 {
  background-color: #6c5ce7;
  border-radius: 6px;
}

.order-status .ct-label {
  fill: #fff;
}

div.flex.max-79 {
  max-width: 79%;
}
</style>

<script>
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
  }),
};
</script>
