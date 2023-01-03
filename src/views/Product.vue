<template>
  <div>
    <nav class="nav">
      <a class="nav-link" href="#">Produtos</a>
    </nav>
    <api-button class="btn-adicionar" @input="openModalForm">Adicionar produto +</api-button>
    <modal-direction
    name-modal="form"
    title-modal="Adicione um produto"
    icon-modal-close="fa-solid fa-xmark"
    ></modal-direction>
    <div class="container">
      <div v-for="product in products" :key="product.id" class="card">
        <div class="content">
          <div class="img-content">
            <img :src="product.thumbnail"/>
          </div>
          <div class="content-text-title">
            {{ product.title }}
          </div>
          <div class="content-text-desc">
            {{ product.description }}
          </div>
          <div class="footer">
            <api-button class="btn" @input="openModal(product)"> + </api-button>
          </div>
        </div>
      </div>

    </div>

    
    <modal-direction 
    icon-modal-info="fa-solid fa-info" 
    title-modal="Informações sobre o produto" 
    name-modal="info"
    icon-modal-close="fa-solid fa-xmark">
    <template  #body>
    <ul class="list">
      <li><i class="fa-solid fa-check"></i>Preço: {{setProduct.price}}</li>
      <li><i class="fa-solid fa-check"></i>Desconto: {{setProduct.discountPercentage}}</li>
      <li><i class="fa-solid fa-check"></i>Avaliação: {{setProduct.rating}}</li>
      <li><i class="fa-solid fa-check"></i>Em estoque: {{setProduct.stock}}</li>
      <li><i class="fa-solid fa-check"></i>Marca: {{setProduct.brand}}</li>
      <li><i class="fa-solid fa-check"></i>Categoria: {{setProduct.category}}</li>
    </ul>
    </template>
    <template #footer>
        <div class="btn-footer">
          <api-button class="btn-footer-fo"  design="caution md-3" @input="edit(setProduct)">Editar</api-button>
          <api-button class="btn-footer-fo"  design="danger md-3" @input="del(setProduct.id)">Apagar</api-button>
      </div>
    </template>
  </modal-direction>
  </div>
</template>

<script>
import ModalDirection from "@/components/modal";
import ApiButton from '@/components/button'
import {product} from '@/services'

export default {
  name: 'Product',
  components: {
    ModalDirection,
    ApiButton
  },
  data(){
    return {
      products: null,
      setProduct:null,
      id:null,
      form: {
        price: null,
        rating: null,
        discountPercentage: null,
        stock:null
      }
    }
  },
  mounted () {
      this.list()   
      this.update()
  },
  methods:{
   openModal(product) {
    this.setProduct = product
      this.$root.$emit('open-modal-info')
    },
    openModalForm(){
      this.$root.$emit('open-modal-form')
    },
    edit(payload) {
      this.id = payload.id
      this.form = {
        price: payload.price,
        rating: payload.rating,
        discountPercentage: payload.discountPercentage,
        stock: payload.stock
      }
      
      this.$router.push({name:'edit', params: {form: this.form, id:this.id}})

    },
    list() {
      product.getProduct().then(res => {
      this.products = res.data.products
    })
    },
    del(id) {
      this.setProduct = product
      product.deleteProduct(id).then(() => this.products.splice(this.id,1))
    },
    update(){
     this.setProduct = product
     this.form = this.$route.params.formEdit
     this.id = this.$route.params.idEdit
     product.uptadeProduct(this.id, this.form).then((res) => this.openModal(res.data) )
      
    }
    }
}


</script>
<style lang="stylus" scoped>
  .nav
    background: #277BC0
    text-align: center
    font-size: 22px
    
    font-family:'Poppins', sans-serif;
    cursor pointer
    &-link
      text-decoration: none
      color: #fff
  .btn
    margin-left:30px
    &-adicionar
      margin-top: 10px
      display: flex
      justify-content: center
  .list
    display: flex
    flex-direction: column
    margin-bottom: 5px
    list-style: none
    color: #6B728E
    justify-content: center
    
  .list-container
    display: flex
    align-items: center
  .btn-list
    margin-left: 10px
  
  .container
    width: 100%
    height: 100vh
    display: flex
    flex-wrap: wrap
    justify-content: center
  .card
    width: 400px
    height: 300px
    padding: 10px
    
  .img-content
    position: relative
    width: 100%
    height: 200px
    object-fit: contain
    overflow: hidden
  img 
    width: inherit
    height: inherit
  .content-text-title
    padding: 3px 5px
    font-weight: bold
  .footer
    text-align: end
    padding-right: 10px
  .btn-footer
    display: flex
    align-items: center
    margin-left: 20px
  .btn-footer-fo 
    cursor: pointer
</style>