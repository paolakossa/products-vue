import axios from './confg'
import Service from './service'

export default class Product extends Service { 
    constructor() {
        super('products')
    }
    getProduct() {
        return axios.get('products')
    }
    async createProduct(payload) {
        return await axios.post('products', payload)
    }
    uptadeProduct(id, payload) {
        return axios.put(`products/${id}`, payload)
    }
    async deleteProduct(id) {
        return await axios.delete(`products/${id}`)
    }
}