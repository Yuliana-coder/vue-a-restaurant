<template>
  <div id="app">
    <Header/>
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script>

import Header from "@/components/header/header.vue"
import Footer from "@/components/footer/footer.vue"


export default {
    name: 'MainLayout',   
    components: {
      Header,
      Footer
    }
}
</script>

<style src="@/assets/css/normalize.css">

</style>

<style>

.main {
  min-height: calc(100vh - 176px);
  position: relative;
}
.page {
    height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
}
</style>