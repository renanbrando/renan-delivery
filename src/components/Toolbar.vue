<template>
    <div class="nav">
        <router-link tag="a" to="/">
            <font-awesome-icon :icon="['fas', 'beer']" size="2x"/>
            <span class="title">renan delivery</span>
        </router-link> 
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/material-colours.scss';

.nav {
    background-color: $material-teal;
    padding: 16px;

    a {
        text-decoration: none;
        color: $material-white; 

        &:hover {
            text-decoration: none;
        }

        .title {
            margin: 0 16px;
            text-transform: capitalize;
            font-weight: 600;
            font-size: 2em;
        }
    }
}

</style>
