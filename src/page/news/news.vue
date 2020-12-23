<template>
  <div class="news">
    <h1 class="news__title">News</h1>
    <div v-if="newsList && newsList.length" class="news-wrapper">
        <div>
            <div class="news__item" v-for="(newItem, key) in newsList" :key="key">
                <div class="news__item-title">
                    {{ newItem.title }}
                </div>
                <div class="news__item-topic">
                   <span class="news__item-topic_sign">тема: </span> {{ newItem.articleTopic }}
                </div>
                <div class="news__item-description">
                    {{ newItem.description }}
                </div>
                <div class="news__item-date">
                    <div> {{ newItem.datePublication }} </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="js" src="./news.js"></script>
<style src="./news.css">
</style>