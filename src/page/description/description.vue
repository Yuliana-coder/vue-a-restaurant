<template>
  <div v-if="information" class="description page">
    <div class="description-info-wrapper">
      <h1 v-if="information.title" class="description__title"> {{ information.title }} </h1>
      <div v-if="information.description" class="description__description"> {{ information.description }} </div>
      <div v-if="information.address" class="description__address"> <span>адрес:</span> {{ information.address }} </div>
    </div>
  </div>
</template>

<script lang="js" src="./description.js"></script>
<style src="./description.css">
</style>