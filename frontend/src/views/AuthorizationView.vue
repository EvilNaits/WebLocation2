<template>
  <main>
    <section class="login">

      <h4 class ="Name-login">Авторизация </h4>

      <form id="form-authorization">
        <div class="input-form">
          <input type="text" name="login" placeholder="Введите Email">
        </div>
        <div class="input-form">
          <input type="password" name="password" placeholder="Введите пароль">
        </div>
        <div id="error"></div>
        <div class="Button">
          <div class="Button-input">
            <button class="Button-card" type="submit">Войти</button>
          </div>
          <div class="Button-reg">
            <button class="Button-card" type="submit"><router-link to="/registration">Зарегистрироваться</router-link></button>
          </div>

        </div>

      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "AuthorizationView"
}
</script>
