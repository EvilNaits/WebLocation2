<template>
  <main>
    <Slider></Slider>
    <div class="container">
      <h3 class="header-name">Рекомендуем</h3>
      <div class="products">
          <div class="products-item" v-for="item in items">
            <ProductItem :product="item"></ProductItem>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
  import ProductItem from "@/components/Product/ProductItem"
  import Slider from "@/components/Slider/Slider";
  import axios from "axios";
  export default {
    name: 'HomeView',
    components: {Slider, ProductItem},
    data() {
        return {
          items: []
        }
    },
    created() {
        axios.get('http://localhost/api/products/top')
            .then((result)=> this.items = result.data)
    }

  }
</script>
