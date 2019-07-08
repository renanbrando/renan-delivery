<template>
  <div class="home">
    <div class="heading">
      <h1>Bebida gelada, rápida a preço baixo</h1>
      <h3>Pra curtir qualquer momento</h3>
    </div>
    <div class="input-container">
      <vue-google-autocomplete id="from_address" placeholder="Nos diga seu endereço" v-on:placechanged="getAddress" v-on:error="handleError"></vue-google-autocomplete>
      <label class="label" for="from_address">Endereço</label>
    </div>
    <Loader :loading="loading"/>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import Loader from '../components/Loader'
import axios from 'axios'
import queries from '../queries/'

export default {
  name: 'home',
  components: {
    VueGoogleAutocomplete,
    Loader
  },
  data: () => {
    return {
      address: {},
      loading: false      
    }
  },
  methods: {
    //getAddress(address, placeResultData, id) {
    getAddress(address) {
      let data = { 
        query: queries.places,
        variables: {
          algorithm: "NEAREST",
          lat: address.latitude.toString(),
          long: address.longitude.toString(),
          now: new Date().toISOString()
        }
      } 

      this.loading = true

      axios.post('https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql', data).then((response)=>{
        this.$store.commit('setPoc', response.data.data.pocSearch[0])
        this.$router.push({name: 'list'})
      }).finally(() => {
        this.loading = false
      })
      
    },
    handleError(error) {
      alert(error)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/material-colours.scss';

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin: 0 16px;

  .heading {
    margin: 16px;

    h1, h3 {
      color: $material-teal-200;
    }
  }

}
</style>

