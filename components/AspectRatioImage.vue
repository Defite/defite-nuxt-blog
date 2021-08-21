<template>
  <figure class="aspect-ratio-figure">
    <nuxt-picture class="picture" :src="src" :sizes="sizes" />
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['src', 'sizes'],
})
</script>

<style>
.aspect-ratio-figure {
  position: relative;
}

.aspect-ratio-figure::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: calc((9 / 16) * 100%);
}

.aspect-ratio-figure .picture {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.aspect-ratio-figure img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
