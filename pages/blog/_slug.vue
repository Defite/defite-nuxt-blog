<template>
  <article class="article prose text-left bg-white dark:bg-gray-800 my-20">
    <h1 class="article-title">{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  },
})
</script>

<style scoped>
.article {
  grid-column: wide-start/wide-end;
}
</style>
