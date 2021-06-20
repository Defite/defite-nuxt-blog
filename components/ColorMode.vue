<template>
  <button
    role="Toggle dark/light mode"
    class="ml-auto dark:text-gray-300 dark:hover:text-white"
  >
    <IconDark
      v-if="$colorMode.preference === 'light'"
      @click="$colorMode.preference = 'dark'"
    />
    <IconLight v-else @click="$colorMode.preference = 'light'" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import IconLight from '~/assets/icons/light.svg?inline'
import IconDark from '~/assets/icons/dark.svg?inline'

export default Vue.extend({
  components: {
    IconLight,
    IconDark,
  },
})
</script>
