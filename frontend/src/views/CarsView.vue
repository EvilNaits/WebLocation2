<template>
  <main>

    <div class="container">
      <h3 class="header-name"><router-link to="#">Легковые автомобили</router-link></h3>
      <div class="products">
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/Gtr.jpeg"></router-link>
          </div>
          <div class="Price-container">
            <div class="Price">2 400 000 ₽ </div>
          </div>
          <h5 class="Name-Car">Nissan gtr Nismo</h5>

          <div class="mileage">2019/4 300 км</div>
          <div class="Button-buy">
            <button class="card-icon" >Купить</button>
          </div>

        </div>
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/Porshe_911..jpg"></router-link>
          </div>
          <div class = "Price-container">
            <div class="Price">12 250 000 ₽ </div>
            <div class="Old-Price"> 13 000 000 ₽</div>
          </div>

          <h5 class="Name-Car">Porshe 911</h5>
          <div class="mileage">2021/8 400 км</div>
          <div class="Button-buy">
            <button class="card-icon">Купить</button>
          </div>
        </div>
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/Urus.jpg"></router-link>
          </div>
          <div class="Price-container">
            <div class="Price">15 900 000 ₽ </div>
          </div>
          <h5 class="Name-Car">Lamborghini Urus</h5>
          <div class="mileage">2018/13 000 км</div>
          <div class="Button-buy">
            <button class="card-icon">Купить</button>
          </div>
        </div>
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/Aston.jpg"></router-link>
          </div>
          <div class = "Price-container">
            <div class="Price">10 400 000 ₽ </div>
            <div class="Old-Price"> 12 149 000 ₽</div>
          </div>
          <h5 class="Name-Car">Aston Martin</h5>
          <div class="mileage">2022/5 000 км</div>
          <div class="Button-buy">
            <button class="card-icon">Купить</button>
          </div>
        </div>
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/MersedesAMG.jpg"></router-link>
          </div>
          <div class="Price-container">
            <div class="Price">13 000 000 ₽ </div>
            <div class="Old-Price"> 14 300 000 ₽</div>
          </div>

          <h5 class="Name-Car">Mercedes-AMG GT 4</h5>
          <div class="mileage">2018/210 000 км</div>
          <div class="Button-buy">
            <button class="card-icon">Купить</button>
          </div>
        </div>
      </div>


    </div>

  </main>
</template>

<script>
export default {
  name: "CarsView"
}
</script>
