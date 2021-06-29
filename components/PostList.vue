<template>
  <section class="post-list w-full text-left my-20 flex flex-wrap flex-row">
    <div v-for="post in posts" :key="post.slug" class="mb-10 post-card">
      <div class="text-base text-gray-500 dark:text-gray-400 mb-2">
        {{ formatDate(post.createdAt) }}
      </div>
      <h2 class="font-bold text-2xl mb-3">
        <NuxtLink
          class="dark:text-gray-300 dark:hover:text-white"
          :to="post.path"
          >{{ post.title }}</NuxtLink
        >
      </h2>
      <p class="text-lg text-gray-500 dark:text-gray-400">
        {{ post.description }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

interface IDateOptions {
  year: 'numeric' | '2-digit'
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
  day: 'numeric' | '2-digit'
}

export default Vue.extend({
  props: ['posts'],
  methods: {
    formatDate(date: string) {
      const options: IDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>

<style scoped>
.post-list {
  grid-column: wide-start/wide-end;
}

.post-card {
  flex: 0 50%;
  padding-right: 20px;
}
</style>
