<template>
  <div class="footer">
      <div class="footer__item footer__inscription">
          <div class="footer__item-text">все права защищены © 2020</div>
      </div>
       <div class="footer__item footer__sections">
           <div class="footer__item-title">Разделы:</div>
           <router-link :to="'/'" class="footer__item-field">
               О нас
           </router-link>
           <router-link :to="'/'" class="footer__item-field">
               Забронировать столик
           </router-link>
           <router-link :to="'/'" class="footer__item-field">
               Полистать меню
           </router-link>
      </div>
       <div class="footer__item footer__contacts">
           <a href="tel:+1234567890"> +1234567890 </a>
           <a href="mailto:antipina.yuliana@mail.ru">antipina.yuliana@mail.ru</a>
           <div class="footer__item-text">Спроектировано и разработано компанией "Успешные ребята"</div>
      </div>
  </div>
</template>

<script lang="js" src="./footer.js"></script>
<style src="./footer.css">
</style>