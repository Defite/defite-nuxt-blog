<template>
  <div class="default grid grid-cols-main">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default Vue.extend({
  components: {
    Header,
    Footer,
  },
  head: {
    bodyAttrs: {
      class: 'bg-gray-50 dark:bg-gray-800',
    },
  },
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.nuxt-content-highlight {
  position: relative;
}

.default {
  min-height: 100vh;
}
</style>
