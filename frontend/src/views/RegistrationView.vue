<template>
  <main>
    <section class="registration">
      <h4 class="Name-registration">Регистрация</h4>
      <form @submit="formRegistration">
        <div class="input-form">
          <input type="text" name="name" placeholder="Введите имя" v-model="Name">
            <div class="error">{{nameError}}</div>
        </div>
        <div class="input-form">
          <input type="text" name="surname" placeholder="Введите фамилию" v-model="surname">
            <div class="error">{{surnameError}}</div>
        </div>
        <div class="input-form">
          <input type="tel" name="phone" placeholder="Введите номер телефона" v-model="phone">
            <div class="error">{{phoneError}}</div>
        </div>
        <div class="input-form">
          <input type="text" name="login" placeholder="Введите Email" v-model="email">
            <div class="error">{{emailError}}</div>
        </div>
        <div class="input-form">
          <input type="password" name="password" placeholder="Введите пароль" v-model="password">
            <div class="error">{{passwordError}}</div>
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
import axios from "axios";

export default {
  name: "RegistrationView",
  data(){
      return {
          Name: '',
          nameError: '',
          surname: '',
          surnameError: '',
          phone: '',
          phoneError: '',
          email: '',
          emailError: '',
          password: '',
          passwordError: ''
      }
  },
  methods: {
      formRegistration(event) {
          this.nameError = '',
          this.surnameError = '',
          this.phoneError = '',
          this.emailError = '',
          this.passwordError = ''
          if (this.email.trim() === '' )
          {
              this.emailError = 'Заполните Email!'
          }
          else if (this.email.length < 5)
          {
              this.emailError = 'Введите корректный Email!'
          }
          if (this.password.trim() === '') {
              this.passwordError = 'Заполните пароль!'
          }
          else if (this.password.length < 8) {
              this.passwordError = 'Пароль должен иметь не менее 8 символов!'
          }
          if (this.phone.trim() === '') {
              this.phoneError = 'Заполните номер телефона!'
          }
          else if (this.phone.length < 8) {
              this.phoneError = 'Номер телефона должен иметь не менее 10 символов!'
          }
          if (this.Name.trim() === '') {
              this.nameError = 'Введите имя!'
          }

          if (this.surname.trim() === '') {
              this.surnameError = 'Заполните фамилию!'
          }
          if (!this.emailError && !this.passwordError && !this.nameError && !this.surnameError && !this.phoneError) {
              const request = {
                  email: this.email,
                  password: this.password,
                  name: this.Name,
                  surname: this.surname,
                  phone: this.phone
              }
              axios.post('http://localhost/api/user/registration', request)
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
