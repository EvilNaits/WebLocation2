<template>
  <main>

    <div class="container">
      <h3 class="header-name"><router-link to="#">Грузовые автомобили</router-link></h3>
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
    name: "GruzView",
    components: {ProductItem},
    props: ['product'],
    data() {
        return {
            items: [
                {price: '12 300 000 ₽ ',  picture:'/image/Volvo.jpg',name:'Volvo track',  meleage: '2018/58 700 км'},
                {price: '10 150 950 ₽ ', oldPrice: '10 300 000 ₽', picture:'/image/iveco.jpg',name:'Iveco track',  meleage: '2019/106 300 км'},
                {price: '11 300 599 ₽ ',  picture:'/image/Mersedes.jpg',name:'Mercedes Actros',  meleage: '2020/43 000 км'},
                {price: '14 120 000 ₽ ', oldPrice: '14 900 000 ₽', picture:'/image/ScaniaR500.jpg',name:'Scania R500',  meleage: '2018/98 300 км'},
                {price: '8 300 000 ₽ ',  picture:'/image/ScaniaG400.jpg',name:'Daf XF 106',  meleage: '2015/110 300 км'},
                {price: '10 100 000 ₽  ', oldPrice: '10 550 000 ₽', picture:'/image/Daf%20XF%20106.jpg',name:'Scania R500',  meleage: '2018/98 300 км'},
                {price: '9 000 000 ₽ ', oldPrice: '10 550 000 ₽', picture:'/image/DafXF105.jpg', name:'Daf XF 105',  meleage: '2014/150 000 км'},
            ]
        }
    }

  }
</script>