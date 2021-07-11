<template>
  <article
    class="
      article
      prose
      sm:prose-sm
      lg:prose-lg
      dark:prose-dark
      text-left
      my-5
      md:my-20
    "
  >
    <header class="mb-20">
      <h1 class="article-title">{{ post.title }}</h1>
      <PostMeta :date="post.date" :reading-time="post.readingTime" />
    </header>
    <nuxt-content :document="post" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import CopyCode from '~/components/CopyCode.vue'
import PostMeta from '~/components/PostMeta.vue'

export default Vue.extend({
  components: {
    PostMeta,
  },
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

@screen sm {
  .article {
    margin-left: auto;
    margin-right: auto;
  }
}

@screen lg {
  .article {
    grid-column: main-start/main-end;
  }
}
</style>
