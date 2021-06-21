<template>
  <button
    role="Toggle dark/light mode"
    class="ml-auto dark:text-gray-300 dark:hover:text-white"
  >
    <IconLight
      v-if="$colorMode.value === 'dark'"
      @click="$colorMode.preference = 'light'"
    />
    <IconDark v-else @click="$colorMode.preference = 'dark'" />
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
