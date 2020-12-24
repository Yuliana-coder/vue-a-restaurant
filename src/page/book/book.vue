<template>
  <div class="book">
    <div class="book__title">Здесь Вы можете оставить обращение к сотрудникам нашего ресторана.</div>
        <div class="book-form">
            <div class="book-form__item">
                <div class="book-form__item-label-wrapper"> <label class="book-form__item-label">Ваше имя*:</label> </div>
                    <input v-model="formData.clientName" class="book-form__item-input" type="text" />
            </div>
            <div class="book-form__item">
                <div class="book-form__item-label-wrapper"> <label class="book-form__item-label">Причина обращения*:</label> </div>
                <select v-model="formData.petitionReason" class="book-form__item-input">
                    <option v-for="(reason, key) in reasonsList" :key="key" :value="reason.id">{{ reason.description }} </option>
                </select>
            </div>
            <div v-if="formData.petitionReason === 6" class="book-form__item">
                <div class="book-form__item-label-wrapper"> <label class="book-form__item-label">Кратко назовите причину*:</label> </div>
                <input v-model="anotherReason" class="book-form__item-input" type="text" />
            </div>
            <div class="book-form__item">
                <div class="book-form__item-label-wrapper"> <label class="book-form__item-label">Описание*:</label> </div>
                    <textarea v-model="formData.description" class="book-form__item-input"  />
            </div>
            <div class="book-form__item-button-wrapper"> 
                 <button @click="isContact = !isContact" class="book-form__item-btn"> Связаться со мной </button>
            </div>
            <template v-if="isContact">
                <div class="book-form__item">
                    <div class="book-form__item-label-wrapper"> <label class="book-form__item-label">Номер телефона:</label> </div>
                    <input v-model="formData.phonenumber" class="book-form__item-input" type="text" />
                </div>
                <div class="book-form__item">
                    <div class="book-form__item-label-wrapper"> <label class="book-form__item-label">Email:</label> </div>
                    <input v-model="formData.email" class="book-form__item-input" type="text" />
                </div>
            </template>
        </div>
        <button class="book__btn-confirm" @click="confirmPetition" :class="{'book__btn-confirm_active': isValidFields }" :disabled="!isValidFields || isConfirm">Отправить</button>
        <div class="popup" v-if="isConfirm">
            <div>Благодарим Вас за обращение!</div>
            <div class="popup__btn-wrapper">
                <button class="popup__btn" @click="goToHomepage">Ок</button>
            </div>
        </div>
    </div>
</template>

<script lang="js" src="./book.js"></script>
<style src="./book.css">
</style>