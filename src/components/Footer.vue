<template>
    <div class="footer">
        <div class="summary">
            <p class="total">Total R$ {{total}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order-summary',
    computed:{
        total(){
            let basket = this.$store.getters.basket
            if (basket.length > 0){
                let total = 0
                for (const b of basket){
                    total += b.price
                }
                return total.toFixed(2)
            } else {
                return 0
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/material-colours.scss';

.footer {
    background-color: $material-teal;
    padding: 16px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 5vh;

    .summary {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .total {
            margin: 0;
            font-size: 2em;
            font-weight: 700;
            text-transform: uppercase;
            color: $material-white;
        }
    }
}

</style>
