<template>
  <div class="login page">
    <div class="login-fields">
      <div class="login-fields__title" v-if="isLogin">Вход</div>
      <div class="login-fields__title" v-else-if="isRegistration">Регистрация</div>
      <div class="login-fields__item" v-if="isLogin">
        <div class="login-field__item-wrapper">
          <div class="login-fields__item-label-wrapper">
            <label class="login-fields__item-label" for="username">Имя пользователя</label>
          </div>
          <input v-model="loginFormData.username" class="login-fields__item-input" type="text" name="username" />
        </div>
        <div class="login-field__item-wrapper">
          <div class="login-fields__item-label-wrapper">
            <label class="login-fields__item-label" for="password">Пароль</label>
          </div>
          <input v-model="loginFormData.password" class="login-fields__item-input" type="password" name="password" />
        </div>
        <div v-if="isErrorLogin" class="login-fields__error">Неверное имя пользователя или пароль</div>
      </div>
      
      <div v-else-if="isRegistration">    
        <div class="login-field__item-wrapper">
          <div class="login-fields__item-label-wrapper">
            <label class="login-fields__item-label" for="regemail"> Адрес электронной почты </label>
          </div>
          <input v-model="registrationFormData.email" class="login-fields__item-input" type="text" name="regemail" />
        </div>
        <div class="login-field__item-wrapper">
          <div class="login-fields__item-label-wrapper">
            <label class="login-fields__item-label" for="regusername"> Имя пользователя </label>
          </div>
          <input v-model="registrationFormData.username" class="login-fields__item-input" type="text" name="regusername" />
        </div>
        <div class="login-field__item-wrapper">
          <div class="login-fields__item-label-wrapper">
            <label class="login-fields__item-label" for="regpassword"> Пароль </label>
          </div>
          <input v-model="registrationFormData.password" class="login-fields__item-input" type="text" name="regpassword" />
        </div>
        <div v-if="isErrorRegistration" class="registration-fields__error">
          Пароль не должен быть слишком похож на другую вашу личную информацию.
          Ваш пароль должен содержать как минимум 8 символов.
          Пароль не может состоять только из цифр.</div>
      </div>

      <div class="login-fields__toggle">
        <button class="login-fields__btn" @click="toggleLogin">
          <template v-if="isLogin"> Регистрация </template> 
          <template v-else-if="isRegistration"> Вход </template> 
          </button>
        <button v-if="isLogin" class="login-fields__btn" @click="goToLogin">Войти</button>
        <button v-else-if="isRegistration" class="login-fields__btn" @click="goToRegistration"> Зарегистрироваться </button>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./login.js"></script>
<style src="./login.css">
</style>