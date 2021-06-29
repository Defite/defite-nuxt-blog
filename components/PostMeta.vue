<template>
  <div class="bio flex -mt-6 items-center text-base">
    <span class="text-gray-500 dark:text-gray-400">
      {{ formatDate(date) }}<span> &middot; {{ readingTime }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface IDateOptions {
  year: 'numeric' | '2-digit'
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
  day: 'numeric' | '2-digit'
}

export default Vue.extend({
  props: ['date', 'readingTime'],
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