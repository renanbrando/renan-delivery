<template>
  <div class="list">
    <div class="input-container">
      <input type="text" placeholder="Filtrar produtos" v-model="search">
      <button class="inside-input"><font-awesome-icon :icon="['fas', 'search']" size="2x" @click="getProducts(category, search)"/></button>
    </div>
    <div class="select-container">
      <select v-model="category" @change="getProducts(category)">
        <option disabled selected :value="{}">Escolha uma categoria</option>
        <option :value="0">Todos</option>
        <option v-for="c in categories" :key="c.id" :value="c.id">{{c.title}}</option>
      </select>
    </div>
    <div v-if="products.length <= 0">
      <h1 class="not-found">Não foram encontrados produtos</h1>
    </div>
    <div v-else class="products-container">
      <div class="card" v-for="(p, index) in products" :key="index">
        <img :src="p.productVariants[0].imageUrl" alt="Product">
        <div class="container">
          <h4>{{p.productVariants[0].title}}</h4>
          <p>R$ {{p.productVariants[0].price}}</p>
          <div class="actions">
            <div>
              <button class="btn remove" @click="remove(p.productVariants[0])">-</button>
            </div>
            <div>
              <input type="text" class="input" :value="p.productVariants[0].qtd" disabled>
            </div>
            <div>
              <button class="btn add" @click="add(p.productVariants[0])">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Espaço de overlay do fixed footer-->
    <div class="spacer"></div>
  </div>
</template>

<script>
import axios from '../api/ze'
import queries from '../queries/'

export default {
  name: 'list', 
  data(){
    return {
      products: [],
      search: '',
      categories: [],
      category: 0,
      basket: []
    }
  },
  created(){
    let data = {
      query: queries.categories
    }

    axios.post('/', data).then((response) => {
      this.categories = response.data.data.allCategory
    }).catch((error) => {
      console.log(error)
    })

    this.getProducts()
  },
  methods: {
    getProducts(category = 0, search = ""){
      let data = {
        query: queries.products,
        variables: {
          id: this.$store.getters.poc.id,
          search: search,
          categoryId: category
        }
      }

      axios.post('/', data).then((response) => {
        if (response.data.data.poc.products.length > 0) {
          this.products = response.data.data.poc.products
          for (let p of this.products){
            p.productVariants[0].qtd = 0;
            // deve buscar se ja existe algo na basket
            this.fillFromBasket(p.productVariants[0])
          }
        } else {
          this.products = []
        }
      })
    },
    add(item){
      this.$store.commit('addToBasket', item)
      item.qtd++
      this.$forceUpdate()
    },
    remove(item){
      this.$store.commit('removeFromBasket', item)
      item.qtd -= item.qtd <= 0 ? 0 : 1
      this.$forceUpdate()
    },
    fillFromBasket(item){
      let basket = this.$store.getters.basket
      for (const b of basket){
        if (b.title == item.title){
          item.qtd ++
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/material-colours.scss';

.products-container {
  margin: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.not-found {
  text-align: center;
  color: $material-grey;
}

.inside-input {
  margin-left: -50px;
  background-color: transparent;
  color: $material-teal;

  &:active,
  &:focus,
  &:hover {
    outline: none;
  }

  /* ripple effect */
  &:active {
    background: transparent;
    color: $material-teal-500;
  }

  &:hover {
    background-color: transparent;
    background-size: 100%;
    color: $material-teal-200;
    transition: background 0s;
  }
}

.spacer{
  height: 6vh;
}
</style>


