<template>
  <button
    ref="copy"
    class="absolute bottom-3 right-3 text-gray-300 hover:text-white"
  >
    <CopyDoneIcon v-if="state === 'copied'" class="w-5 h-5" />
    <CopyIcon v-else class="w-5 h-5" />
  </button>
</template>

<script>
import Clipboard from 'clipboard'
import CopyIcon from '~/assets/icons/copy.svg?inline'
import CopyDoneIcon from '~/assets/icons/copy-done.svg?inline'
export default {
  components: {
    CopyIcon,
    CopyDoneIcon,
  },
  data() {
    return {
      state: 'init',
    }
  },
  mounted() {
    if (!this.$refs.copy) {
      return
    }

    const copyCode = new Clipboard(this.$refs.copy, {
      target(trigger) {
        return trigger.previousElementSibling
      },
    })
    copyCode.on('success', (event) => {
      event.clearSelection()
      this.state = 'copied'
      window.setTimeout(() => {
        this.state = 'init'
      }, 2000)
    })
  },
}
</script>
