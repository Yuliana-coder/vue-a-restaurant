<template>
  <div v-if="vacancies && vacancies.length" class="vacancies">
      <div class="vacancies-list">
          <div class="vacancies-list__item" v-for="(vacancy, key) in vacancies" :key="key">
              <div v-if="vacancy.name" class="vacancies-list__item-name"> {{ vacancy.name }} </div>
              <div v-if="vacancy.description" class="vacancies-list__item-description"> {{ vacancy.description }} </div>
              <div v-if="vacancy.duties" class="vacancies-list__item-duties">
                  <span class="vacancy-inscription"> Обязанности: </span> {{ vacancy.duties }} </div>
              <div v-if="vacancy.demands" class="vacancies-list__item-demands"> 
                  <span class="vacancy-inscription"> Требования: </span> {{ vacancy.demands }} </div>
              <div v-if="vacancy.salary" class="vacancies-list__item-salary"> {{ vacancy.salary }} руб. </div>
          </div>
      </div>
  </div>
</template>

<script lang="js" src="./vacancies.js"></script>
<style src="./vacancies.css">
</style>