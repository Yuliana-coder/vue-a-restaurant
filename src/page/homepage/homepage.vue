<template>
  <div class="homepage page">
    <section class="homepage-sections">
      <router-link to="/news" class="homepage__news-wrapper">
        <div class="homepage__news">
          <div>Н</div>
          <div>О</div>
          <div>В</div>
          <div>О</div>
          <div>С</div>
          <div>Т</div>
          <div>И</div>
        </div>
      </router-link>
      <router-link :to="'/description'" class="homepage__section homepage__section-description">
        О ресторане
      </router-link>
        <router-link :to="'/reservation'" class="homepage__section homepage__section-reservation">
          Забронировать столик
        </router-link>
      <router-link :to="'/menu'" class="homepage__section homepage__section-menu">
        Полистать меню
      </router-link>
    </section>
  </div>
</template>

<script lang="js" src="./homepage.js"></script>
<style src="./homepage.css">
</style>