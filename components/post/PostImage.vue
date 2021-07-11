<template>
  <figure :class="{ 'full-image': mode === 'full' }">
    <div class="picture">
      <nuxt-picture
        :src="src"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
    </div>
    <figcaption v-if="caption" class="figcaption">{{ caption }}</figcaption>
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['src', 'caption', 'mode'],
})
</script>

<style>
.full-image {
  position: relative;
  left: 50%;
  width: 100vw;
  margin-left: -50vw;
}

.picture {
  position: relative;
}

.picture::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: calc((9 / 16) * 100%);
}

.picture > picture {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.picture > picture img {
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.figcaption {
  text-align: center;
}
</style>
