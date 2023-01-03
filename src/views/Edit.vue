<template>
    <div>
        <nav class="nav">
          <a class="nav-link" href="#">Editar Produtos</a>
        </nav>
   
        <form class="form">

            <div class="input-container">

                <label for="preco">Preço: </label>
                <input type="text" id="preco" v-model="form.price" placeholder="Informe o preço">

            </div> 

            <div class="input-container">

            <label for="desconto">Desconto: </label>
            <input type="text" id="desconto" v-model="form.discountPercentage" placeholder="Informe o desconto">

            </div> 

            <div class="input-container">

            <label for="avaliacao">Avaliação: </label>
            <input type="text" id="avaliacao" v-model="form.rating" placeholder="Informe a nota de avaliação do produto">

            </div> 

            <div class="input-container">

            <label for="estoque">Em estoque: </label>
            <input type="text" id="estoque" v-model="form.stock" placeholder="Informe a quantidade em estoque">

            </div> 

            <div class="input-container">

                

            </div> 

        </form>
        <api-button design="success md-1" @input="save()">Salvar</api-button>
    </div>      
</template>

<script>
import ApiButton from '@/components/button'

export default {
    name:'Edit',
    components: {
        ApiButton,
    },
    data (){
        return {
            form: {
                price:null,
                discountPercentage:null,
                rating: null,
                stock: null
            },
            id:null  
            
        }
    },
    mounted () {
        this.form = this.$route.params.form
        this.id = this.$route.params.id
    },
    methods: {
    save() {  
        this.$router.push({name:'home', params: {formEdit: this.form, idEdit: this.id}})
      }

        
        
        }
}

</script>

<style lang="stylus" scoped>

.form{
    width: 300px;
    margin:15px auto;
}
.input-container{ 
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #3F7FFB;
}
input {
    padding: 5px 10px;
    width: 300px;
}
.nav
    background: #277BC0
    text-align: center
    font-size: 22px
    
    font-family:'Poppins', sans-serif;
    cursor pointer
    &-link
      text-decoration: none
      color: #fff

</style>