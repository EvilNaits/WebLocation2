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

  export default {
    name: 'HomeView',
    components: {Slider, ProductItem},
    props: ['product'],
    data() {
        return {
          items: [
              {price: '12 105 000', picture:'/image/R8.jpg',name:'Audi R8',  meleage: '2017/14 999 км'},
              {price: '15 000 000', oldPrice:'9 500 000 ₽', picture:'/image/Aventador1.jpg', name:'Lamborghini Aventador',  meleage: '2020/3 000 км'},
              {price: '100 000 000', picture:'/image/Agera.jpg' ,name:'Koenigsegg Agera RS',  meleage: '2023/0 км'},
              {price: '17 999 999', picture:'/image/Ferrari.jpg',name:'Ferrari 488',  meleage: '2013/33 999 км'},
          ]
        }
    }

  }
</script>
