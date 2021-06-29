<template>
  <figure :class="{ 'full-image': mode === 'full' }">
    <nuxt-picture :src="src" />
    <figcaption class="figcaption" v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['src', 'caption', 'mode'],
})
</script>

<style scoped>
.full-image {
  position: relative;
  left: 50%;
  width: 100vw;
  margin-left: -50vw;
}

.figcaption {
  text-align: center;
}
</style>