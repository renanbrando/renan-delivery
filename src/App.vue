<template>
  <div id="app">
    <Toolbar/>
    <router-view/>
    <router-view name="footer">
      <Footer/>
    </router-view>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'

export default {
  components: {
    Toolbar,
    Footer
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
