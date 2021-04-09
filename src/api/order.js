import axios from 'axios'
export default {
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/purchase-orders`),
  put: (id, orderStatus) => axios.put(`${process.env.VUE_APP_API_BASE}/purchase-order/${id}?orderStatus=${orderStatus}`)
}