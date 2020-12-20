<template>
    <div v-if="dish">
    <router-link :to="'/dish/' + dish.id">
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
    <div class="dish-quantity-wrapper">
        <button @click.self="setCurrentQuantaty(currentQuantity-1)" class="dish-quantity-btn dish-quantity-btn-subtract">-</button>
        <span> {{ currentQuantity}} </span>
        <button @click.self="setCurrentQuantaty(currentQuantity+1)" class="dish-quantity-btn dish-quantity-btn-add">+</button>
    </div>
</div>
</template>

<script lang="js" src="./dish-card.js"></script>
<style src="./dish-card.css">
</style>