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
              <div v-if="dish.weight || dish.price" class="menu-list__item-description-detail">
                   <div v-if="dish.weight" class="menu-list__item-description-detail-weight">
                       <span class="inscription">Вес:</span> <span class="inscription-inner"> {{ dish.weight }} гр.</span>
                   </div>
                   <div v-if="dish.price" class="menu-list__item-description-detail-price">
                       <span class="inscription">Цена:</span> <span class="inscription-inner inscription-inner_price"> {{ dish.price }} руб.</span>
                    </div>
              </div>
          </div>
          <div class="dish-content__img">
              <img class="dish-content__img-dish" src="@/assets/img/salad.jpg" alt="dish">
          </div>
      </div>

      <div class="dish-comment">
          <div class="dish-comment__title">Оставьте комментарий об этом блюде, чтобы мы могли сделать наше меню еще лучше!</div>
          <div class="dish-comment-inputs">
              <div class="dish-comment-inputs__label">
                <label class="dish-comment-inputs__label-name" for="clientName">Ваше имя</label> 
                <input v-model="currentComment.clientName" class="dish-comment-inputs__label-input" name="clientName" type="text" />
              </div>
                 <div>
                     <div class="dish-comment-inputs__label">
                            <label for="text">Комментарий</label>
                     </div>
                   <textarea v-model="currentComment.content" rows="10" cols="45" name="text"></textarea>
                   <button @click="sendComment" class="dish-comment-inputs__btn">Отправить</button>
                </div>
          </div>
          <div v-if="isCommentError" class="dish-comment__error"> Пожалуйста, заполните все поля, чтобы оставить комментарий </div>
          <div class="dish-comment-wrapper">
              <div class="dish-comment__item" v-for="(comment, key) in comments" :key="key">
                  <div v-if="comment.clientName" class="dish-comment__item-title"> {{ comment.clientName }} </div>
                  <div v-if="comment.content" class="dish-comment__item-description"> {{ comment.content }} </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="js" src="./dish.js"></script>
<style src="./dish.css">
</style>