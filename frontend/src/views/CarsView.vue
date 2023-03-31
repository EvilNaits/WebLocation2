<template>
  <main>

    <div class="container">
      <h3 class="header-name"><router-link to="#">Легковые автомобили</router-link></h3>
      <div class="products">
        <div class="products-item" v-for="item in items">
          <ProductItem :product="item"></ProductItem>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductItem from "@/components/Product/ProductItem.vue";

export default {
  name: "CarsView",
  components: {ProductItem},
  props: ['product'],
  data() {
      return {
          items: [
              {price: '2 400 000 ₽', picture:'/image/Gtr.jpeg',name:'Nissan gtr Nismo',  meleage: '2019/4 300 км'},
              {price: '12 250 000 ₽', oldPrice:'13 000 000 ₽', picture:'/image/Porshe_911..jpg', name:'Porshe 911',  meleage: '2021/8 400 км'},
              {price: '15 900 000 ₽ ', picture:'/image/Urus.jpg' ,name:'Lamborghini Urus',  meleage: '2018/13 000 км'},
              {price: '10 400 000 ₽ ', oldPrice: '12 149 000 ₽', picture:'/image/Aston.jpg',name:'Aston Martin',  meleage: '2022/5 000 км'},
              {price: '13 000 000 ₽ ', oldPrice: '14 300 000 ₽', picture:'/image/MersedesAMG.jpg',name:'Mercedes-AMG GT 4',  meleage: '2018/21 000 км'},
          ]
      }
  }
}
</script>
