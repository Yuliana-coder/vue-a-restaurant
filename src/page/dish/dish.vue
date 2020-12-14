<template>
  <div v-if="dish" class="dish">
      <router-link class="breadcrumbs" to="/menu">
          Назад
      </router-link>
      <div class="dish-content">
          <div class="dish-content__description">
              <div v-if="dish.title" class="dish-content__description-title">
                  {{  dish.title }}
              </div>
              <div v-if="dish.description" class="dish-content__description-specification">
                  {{ dish.description }}
              </div>
          </div>
          <div class="dish-content__img">
              <img class="dish-content__img-dish" src="@/assets/img/salad.jpg" alt="dish">
          </div>
      </div>
  </div>
</template>

<script lang="js" src="./dish.js"></script>
<style src="./dish.css">
</style>