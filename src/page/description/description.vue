<template>
  <div v-if="information" class="description">
    <div class="description-info-wrapper">
      <h1 v-if="information.title" class="description__title"> {{ information.title }} </h1>
      <div v-if="information.description" class="description__description"> {{ information.description }} </div>
      <div v-if="information.address" class="description__address"> <span>адрес:</span> {{ information.address }} </div>
    </div>

    <div class="vacancies">
      <div class="vacancies__title">
        Если Вас интересует работа в нашем ресторане, обратите внимание на раздел 
        <router-link to="/" class="vacancies__title-link"><span>Вакансии</span></router-link>
      </div>
      <div class="vacancies-form">
        <div class="vacancies-form__title">
          Также, Вы можете заполнить форму для отправки заявки на работу. Мы обязательно свяжемся с Вами в течение 3-х рабочих дней!
        </div>
        <div class="vacancies-form-inputs">

          <div class="vacancies-form-inputs__item">
            <div class="vacancies-form-inputs__item-label-wrapper"> 
              <label for="name" class="vacancies-form-inputs__item-label">Имя*</label> 
            </div>
            <input v-model="application.name" name="name" class="vacancies-form-inputs__item-input" type="text"  />
          </div>

          <div class="vacancies-form-inputs__item">
            <div class="vacancies-form-inputs__item-label-wrapper"> 
              <label for="surname" class="vacancies-form-inputs__item-label">Фамилия*</label> 
            </div>
            <input v-model="application.surname" name="surname" class="vacancies-form-inputs__item-input" type="text"  />
          </div>

          <div class="vacancies-form-inputs__item">
            <div class="vacancies-form-inputs__item-label-wrapper"> 
              <label for="patronymic" class="vacancies-form-inputs__item-label">Отчество*</label> 
            </div>
            <input v-model="application.patronymic" name="patronymic" class="vacancies-form-inputs__item-input" type="text"  />
          </div>

           <div class="vacancies-form-inputs__item">
            <div class="vacancies-form-inputs__item-label-wrapper"> 
              <label for="email" class="vacancies-form-inputs__item-label">Email&nbsp;</label> 
            </div>
            <input v-model="application.email" name="email" class="vacancies-form-inputs__item-input" type="email"  />
          </div>

           <div class="vacancies-form-inputs__item">
            <div class="vacancies-form-inputs__item-label-wrapper"> 
              <label for="phonenumber" class="vacancies-form-inputs__item-label">Телефон*</label> 
            </div>
            <input v-model="application.phonenumber" name="phonenumber" class="vacancies-form-inputs__item-input" type="text"  />
          </div>

          <div class="vacancies-form-inputs__item">
            <div class="vacancies-form-inputs__item-label-wrapper"> 
              <label for="phonenumber" class="vacancies-form-inputs__item-label">Вакансия*</label> 
            </div>
            <select class="vacancies-form-inputs__item-input" v-model="application.vacancy">
              <option v-for="(vacancy, key) in vacancies" :key="key" :value="vacancy.id">
                {{vacancy.name}}
              </option>
            </select>
            <button @click="sendVacanacy">Отправить</button>
          </div>
          <div class="vacancy-error" v-if="vacancyError">
            Пожалуста, введите все обязательные поля.
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script lang="js" src="./description.js"></script>
<style src="./description.css">
</style>