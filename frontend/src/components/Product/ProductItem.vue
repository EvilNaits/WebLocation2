<template>
        <div>
            <router-link to="#"><img :src="product.picture"></router-link>
        </div>
        <div class="Price-container">
            <div class="Price">{{ product.price }}</div>
            <div class="Old-Price">{{product.oldPrice}}</div>
        </div>
        <h5 class="Name-Car">{{ product.name }}</h5>
        <div class="mileage">{{product.meleage}}</div>
        <div class="Button-buy">
            <button class="card-icon" @click="addToCard" v-show="!this.product.inCard">Купить</button>
            <button class="card-icon-click" @click="addToCard" v-show="this.product.inCard">Добавлен в корзину</button>
        </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: ['product'],
    methods: {
        addToCard() {
            this.product.inCard = !this.product.inCard
        },

    },

}

</script>
