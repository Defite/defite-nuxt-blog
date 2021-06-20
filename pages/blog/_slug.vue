<template>
  <article class="article prose prose-lg dark:prose-dark text-left my-20">
    <h1 class="article-title">{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import CopyCode from '~/components/CopyCode.vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return { post }
  },
  mounted() {
    setTimeout(() => {
      const blocks = Array.from(
        document.getElementsByClassName('nuxt-content-highlight')
      )

      for (const block of blocks) {
        const CopyButton = Vue.extend(CopyCode)
        const component = new CopyButton().$mount()
        block.appendChild(component.$el)
      }
    }, 100)
  },
})
</script>

<style scoped>
.article {
  grid-column: wide-start/wide-end;
}
</style>
