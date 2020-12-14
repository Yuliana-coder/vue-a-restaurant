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
      </div>
      <div class="login-fields__toggle">
        <button @click="toggleLogin">Регистрация</button>
        <button @click="goToLogin">Войти</button>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./login.js"></script>
<style src="./login.css">
</style>