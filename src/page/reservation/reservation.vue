<template>
  <div class="reservation">
    <div class="reservation-data-wrapper">
        <div class="reservation-data__item">
            <label class="reservation-data__item-label" for="name">
                На чье имя оформить бронь
            </label>
            <input v-model="formData.name" type="text" class="reservation-data__item-input" id="name"/>
        </div>
        <div class="reservation-data__item">
            <label class="reservation-data__item-label" for="time">
                Время брони
            </label>
            <input v-model="formData.reservationTime" type="time" min="11:00" max="23:00" class="reservation-data__item-input reservation-data__item-input_time" required id="time"/>
        </div>
        <div class="reservation-data__item">
            <label class="reservation-data__item-label" for="table-num">
                Номер столика
            </label>
            <select v-model="formData.tableNum">
                <option v-for="(num, key) in tables" :key="key" :value="num">{{num}}</option>
            </select>
            <div class="reservation-data__item-text">*В списке представлены доступные для брони столики</div>
        </div>
        <div class="reservation__skhema">
            <img class="reservation__skhema-img" src="@/assets/img/Skhema_stolov.png" alt="Схема столов" />
        </div>
        <div class="reservation__confirm">
            <button @click="confirmReservation" class="reservation__confirm-btn" 
            :class="{'reservation__confirm-btn_disabled': isNotAllData}"
             :disabled="isNotAllData">
                Оформить бронь 
            </button>
        </div>
    </div>
  </div>
</template>

<script lang="js" src="./reservation.js"></script>
<style src="./reservation.css">
</style>