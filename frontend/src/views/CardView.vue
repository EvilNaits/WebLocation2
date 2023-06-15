<template>
    <p class="name-card">{{product.name}}</p>
    <div class="container-card">
        <img :src="product.picture">
        <div class="container-description">
           <hr>
            <ul class="description">
                <li>
                    <span>Двигатель:</span>
                    <span> {{product.engine}} см³</span>
                </li>
                <li>
                    <span>Год выпуска:</span>
                    <span> {{product.year}} </span>
                </li>
                <li>
                    <span>Пробег:</span>
                    <span> {{product.meleage}} км</span>
                </li>
                <li>
                    <span>Мощность:</span>
                    <span> {{product.power}} л.с. </span>
                </li>
                <li>
                    <span>Цвет:</span>
                    <span> {{product.colour}}</span>
                </li>
            </ul>


            <p class="name-card">{{product.price}} ₽</p>

            <div class="card-pay">
            <button class="card-button-pay" @click="addToCard" v-show="!this.product.inCard">Купить</button>
                <button class="card-button-delete" @click="removeCard" v-show="this.product.inCard"> Добавлено в корзину</button>
            </div>
        </div>

    </div>
</template>

<script>

 import axios from "axios";
export default {
    name: "CardView",
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
    data() {
        return {
            product: {}
        }
    },
    created() {
        const id = this.$route.params.id
        axios.get('http://localhost/api/products/info/' + id)
            .then((response) => this.product = response.data)
    }
}
</script>

<style scoped>

</style>
