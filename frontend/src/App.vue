<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid m-4">
            <div class="Brand">
              <router-link to="/"><img src="/image/1.jpg"></router-link>
            </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-4 mb-2 mb-lg-0">
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
                <router-link to="/aboutcompany" class="nav-link"> О нас</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/basket" class="nav-link"> Корзина</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/authorization" class="nav-link">Войти</router-link>
              </li>
              <li class="nav-item">

              </li>
            </ul>
              <div class="navigation">
                  <router-link to="#"><img src="/image/2.jpg"></router-link>
                  <router-link to="#"><img src="/image/car.jpg"></router-link>
                  <h6 v-show="this.$store.getters.getCount>0">{{this.$store.getters.getCount}}</h6>
                  <router-link to="#"><img src="/image/sms.png"></router-link>
              </div>
          </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn-outline-success" type="submit">Поиск</button>
            </form>
        </div>
      </nav>

    </div>

  </header>
  <router-view/>

  <footer>
    <div class="container">
      <div>
        <p>По всем вопросам пишите:
            <span class="color-text">oleg01092002.3@mail.ru</span>
        </p>
        <p>Следите за нами в социальных сетях:</p>
        <div class="contacts">
            <img src="/image/vk.png">
            <img src="/image/telega.png">
            <img src="/image/insta.png">
        </div>
      </div>
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
    <div class = "container">
        <p class="footer-description">Обращаем ваше внимание на то, что данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации. Для получения подробной информации о стоимости автомобилей Audi, BAIC, BMW, Chery, Chrysler, Evolute, Exeed, Ford, Genesis, Hyundai, Jaguar, Jeep, KAIYI, Kia, Land Rover, Lexus, Mazda, Mercedes-Benz, Mitsubishi, Nissan, OMODA, Porsche, Renault, SKODA, Sollers, Toyota, Volkswagen, Voyah, Москвич обращайтесь к менеджерам по продажам в автоцентры AutoBar. Для получения информации о приобретении автомобилей в кредит, страховании, техническом обслуживании и ремонте автомобилей, запасных частях, дополнительном оборудовании, аксессуарах также обращайтесь в сервисные центры и автосалоны AutoBar.</p>
    </div>
    <div class = "container">
        <div class = "footer-button">
        <button class="button">Мобильное приложение</button>
        <button class="button">
            <img src="/image/APPLE_icon-icons.com_65545.png">Для IPhone
        </button>
        <button class="button">
            <img src="/image/ANDROID_icon-icons.com_65547.png">Для Android
        </button>
        </div>
    </div>
  </footer>
</template>


<script setup>
</script>
