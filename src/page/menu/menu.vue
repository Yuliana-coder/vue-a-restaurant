<template>
  <div v-if="dishes && dishes.length" class="menu">
      <h1 class="menu__title">Меню</h1>
   <div class="menu-list-wrapper">
       <router-link class="menu-list__item" v-for="(dish, key) in dishes" :key="key" :to="'/dish/' + dish.id">
           <div class="menu-list__item-img">
               <img class="menu-list__item-img-dish" src="@/assets/img/salad.jpg" alt="dish">
           </div>
           <div class="menu-list__item-description">
               <div v-if="dish.title" class="menu-list__item-description-title">{{ dish.title }}</div>
               <div v-if="dish.weight || dish.price" class="menu-list__item-description-detail">
                   <div v-if="dish.weight" class="menu-list__item-description-detail-weight">
                       <span class="inscription">Вес:</span> <span class="inscription-inner"> {{ dish.weight }} гр.</span>
                   </div>
                   <div v-if="dish.price" class="menu-list__item-description-detail-price">
                       <span class="inscription">Цена:</span> <span class="inscription-inner inscription-inner_price"> {{ dish.price }} руб.</span>
                   </div>
               </div>
           </div>
       </router-link>
   </div>
  </div>
</template>

<script lang="js" src="./menu.js"></script>
<style src="./menu.css">
</style>