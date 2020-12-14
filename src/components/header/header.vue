<template>
  <div class="header">
      <router-link :to="'/'" class="header__title" title="Главная"> Ресторан </router-link>
      <a href="tel:+1234567890"> Звоните нам бесплатно! +1234567890 </a>
      <router-link v-if="!isAuthorized" to="/login" class="header__log-btn" title="Вход или регистрация">Вход</router-link>
      <button v-else class="header__log-btn" @click="logoutUser" title="Выйти">Выйти</button>
  </div>
</template>

<script lang="js" src="./header.js"></script>
<style src="./header.css">
</style>