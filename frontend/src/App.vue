<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="Brand">
              <router-link to="/"><img src="/image/1.jpg"></router-link>
            </div>
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
        <p>По всем вопросам пишите:
            <span class="color-text">mail@mail.ru</span>
        </p>
        <p>Следите за нами в социальных сетях:</p>
        <div class="contacts">
            <img src="/image/vk.png">
            <img src="/image/telega.png">
            <img src="/image/insta.png">
        </div>
      </div>
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/4/belgorod/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Белгород</a><a href="https://yandex.ru/maps/4/belgorod/?ll=36.608638%2C50.618401&mode=routes&rtext=~50.618552%2C36.609700&rtt=pd&ruri=~&utm_medium=mapframe&utm_source=maps&z=14.54" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=36.608638%2C50.618401&mode=routes&rtext=~50.618552%2C36.609700&rtt=pd&ruri=~&z=14.54" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
      <div>
          <p>Наши контакты:
              <span class="color-text">+7 999 888 7777</span>
          </p>
          <p>Мы принимаем:</p>
         <div class="pay-system">
             <img src="/image/visa.png">
             <img src="/image/mir.png">
             <img src="/image/mastercard.png">
         </div>
          <hr>
          <p>© 2023 ООО "AutoBar" г.Белгород</p>
          <p>ул. Студенческая д.8</p>

      </div>

    </div>

  </footer>
</template>


<script setup>
</script>