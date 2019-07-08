<template>
    <div v-if="loading" class="loader"></div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/material-colours.scss';

.loader {
  margin: 32px auto;
  border: 16px solid $material-teal-100;
  border-radius: 50%;
  border-top: 16px solid $material-teal;
  width: 64px;
  height: 64px;
  -webkit-animation: spin 2s linear infinite; 
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>

