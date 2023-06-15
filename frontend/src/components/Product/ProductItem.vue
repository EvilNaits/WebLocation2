<template>
        <div>
            <img :src="product.picture">
        </div>
        <div class="Price-container">
            <div class="Price">{{ product.price }} ₽</div>
            <div class="Old-Price">{{product.oldPrice}}</div>
        </div>
        <h5 class="Name-Car">
            <router-link :to="{name:'catalogCard', params: {id: this.product.id}}">
                {{ product.name }}</router-link></h5>
        <div class="mileage">{{product.year}}/{{product.meleage}} км</div>
        <div class="Button-buy">
            <button class="card-icon" @click="addToCard" v-show="!this.product.inCard">Купить</button>
            <button class="card-icon-click" @click="removeCard" v-show="this.product.inCard">Добавлено</button>
        </div>

</template>
<script>

export default {
    name: "ProductItem",
    props: ['product'],
    methods: {
        addToCard() {
            this.product.inCard = !this.product.inCard
            this.$store.commit('add',this.product.id)

        },

        removeCard() {
            this.product.inCard = !this.product.inCard
            this.$store.commit('remove',this.product.id)
        }
    },

}

</script>
