<template>
  <PostList :posts="blog" />
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '~/components/PostList.vue'

export default Vue.extend({
  components: {
    PostList,
  },
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug)
      .sortBy('date', 'desc')
      .fetch()

    return {
      blog,
    }
  },
  head: {
    title: 'Nikita Makhov',
    titleTemplate: 'Blog – %s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Blog about web staff, games, music and life around',
      },
    ],
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
