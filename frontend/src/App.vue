<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">

          <router-link to="/"><img src="/image/1.jpg"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/catalog" class="nav-link">Каталог</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cars" class="nav-link">Легковые</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/gruz" class="nav-link">Грузовые</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link"> Мото</router-link>

              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link"> О нас</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link"> Корзина</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/authorization" class="nav-link">Войти</router-link>
              </li>


            </ul>
            <form class="d-flex px-5" role="search">
              <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
              <button class="btn btn-outline-success" type="submit">Поиск</button>
            </form>
            <form class="d-flex " role="search">
              <button class="btn btn-outline-success btn:hover: #501987" type="submit">Разместить объявление</button>
            </form>




          </div>

        </div>
      </nav>

    </div>

  </header>
  <router-view/>
  <footer>
    <div class="container">
      <div>
        © 2023 ООО "AutoBar"
      </div>
      <div>
        Наши контакты: +7 999 888 7777
        <br> г. Белгород
      </div>
    </div>

  </footer>
</template>


