import axios from 'axios'
export default {
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/purchase-orders`),
  put: (id, purchaseState) => axios.put(`${process.env.VUE_APP_API_BASE}/purchase-order/${id}?purchaseState=${purchaseState}`)
}