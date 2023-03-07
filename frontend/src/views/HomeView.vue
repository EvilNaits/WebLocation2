<template>
  <main>
    <section class="slider">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/image/Banner.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/image/Banner2.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <div class="container">
      <h3 class="header-name">Рекомендуем</h3>
      <div class="products">
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/Agera.jpg"></router-link>
          </div>
          <div class="Price-container">
            <div class="Price">100 400 000 ₽ </div>
          </div>

          <h5 class="Name-Car">Koenigsegg Agera RS</h5>
          <div class="mileage">2023/2 000 км</div>
          <div class="Button-buy">
            <button class="card-icon">Купить</button>
          </div>

        </div>
        <div class="products-item">
          <div>
            <router-link to="#"><img src="/image/Aventador.jpg"></router-link>
          </div>
          <div class="Price-container">
            <div class="Price">17 670 000 ₽ </div>
          </div>

          <h5 class="Name-Car">Lamborghini Aventador</h5>
          <div class="mileage">2022/5 300 км</div>
          <div class="Button-buy">
            <button class="card-icon">Купить</button>
          </div>
        </div>
        <div class="products-item">
          <div>
            <router-link to ="#"><img src="/image/M4.jpg"></router-link>
          </div>
          <div class="Price-container">
            <div class="Price">8 300 000 ₽ </div>
          </div>

          <h5 class="Name-Car">BMW M4</h5>
          <div class="mileage">2021/10 570 км</div>
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
    name: 'HomeView',

  }
</script>
