<template>
  <main>
    <section class="registration">
      <h4 class="Name-registration">Регистрация</h4>
      <form id="form-registration">
        <div class="input-form">
          <input type="text" name="name" placeholder="Введите имя">
        </div>
        <div class="input-form">
          <input type="text" name="surname" placeholder="Введите фамилию">
        </div>
        <div class="input-form">
          <input type="tel" name="phone" placeholder="Введите номер телефона">
        </div>
        <div class="input-form">
          <input type="text" name="login" placeholder="Введите Email">
        </div>
        <div class="input-form">
          <input type="password" name="password" placeholder="Введите пароль">
        </div>
        <div id="error"></div>
        <div class="Button">

          <div class="Button-reg">
            <button class="Button-card" type="submit">Зарегистрироваться</button>
          </div>

        </div>
      </form>
    </section>

  </main>
</template>

<script>
export default {
  name: "RegistrationView"
}
</script>
