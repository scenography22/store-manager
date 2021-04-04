import axios from 'axios'
export default {
  post: (product) =>
    // POST http://localhost:8090/products
    // BODY {name, userId...}
    // HEADER content-type:application-json
    axios.post(`${process.env.VUE_APP_API_BASE}/products`, product),
  uploadFile: (productId, form) =>
    // POST http://localhost:8090/products/{id}/product-images
    // BODY multipart-data  ---sdfsdf---
    // HEADER multipart/form-data
    axios.post(`${process.env.VUE_APP_API_BASE}/products/${productId}/product-images`,
      form, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }),
  // GET http://localhost:8090/products                
  list: () => axios.get(`${process.env.VUE_APP_API_BASE}/products`),
  // DELETE http://localhost:8090/products/{id}
  del: (id) => axios.delete(`${process.env.VUE_APP_API_BASE}/products/${id}`),
  // PUT http://localhost:8090/products/{id}
  put: (id, code, category, name, price, quantity, shortDescription, description) => axios.put(`${process.env.VUE_APP_API_BASE}/products/${id}?code=${code}&category=${category}&name=${name}&price=${price}&quantity=${quantity}&shortDescription=${shortDescription}&description=${description}`)
}