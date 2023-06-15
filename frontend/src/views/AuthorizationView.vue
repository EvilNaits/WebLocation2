<template>
  <main>
    <section class="login">

      <h4 class ="Name-login">Авторизация </h4>

      <form @submit="loginForm">
        <div class="input-form">
          <input type="text" name="login" placeholder="Введите Email" v-model="email">
            <div class="error">{{emailError}}</div>
        </div>

        <div class="input-form">
          <input type="password" name="password" placeholder="Введите пароль" v-model="password">
            <div class="error">{{passwordError}}</div>
        </div>

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
import axios from "axios";
export default {
  name: "AuthorizationView",
  data() {
      return {
          email: '',
          password: '',
          emailError: '',
          passwordError: ''
      }
  },
  methods: {
      loginForm(event) {
        this.emailError = ''
        this.passwordError = ''

        if (this.email.trim() === '') {
            this.emailError = 'Заполните Email!'
        }
        else  if (this.email.length < 5) {
              this.emailError = "Введите корректный Email!"
          }
        if (this.password.trim() === '') {
            this.passwordError = 'Заполните пароль!'
        }
        else if (this.password.length < 8) {
            this.passwordError = 'Пароль должен иметь не менее 8 символов!'
        }
        if (!this.emailError && !this.passwordError) {
            const request = {
                email: this.email,
                password: this.password

            }
            axios.post('http://localhost/api/user/login', request)
                .then((response) => {})
                .catch((error) => {
                    alert(error.message)
                })
        }

        event.preventDefault()
      }

  }
}
</script>
