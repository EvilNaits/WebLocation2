<template>
  <main>
    <div class="container">
      <h3 class="header-name">Каталог</h3>
      <div class="products">
        <div class="products-item" v-for ="item in items" >
        <ProductItem :product="item"></ProductItem>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductItem from "@/components/Product/ProductItem.vue";
import axios from "axios";

export default {
  name: "CatalogView",
  components: {ProductItem},
  data() {
      return {
          items: []
      }
  },
   created() {
      axios.get('http://localhost/api/products/list')
          .then((result)=> this.items = result.data)
   }

}
</script>
