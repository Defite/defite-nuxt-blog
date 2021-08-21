<template>
  <div class="rounded-xl overflow-hidden relative">
    <AspectRatioImage :src="cover" sizes="md:100vw lg:600px" />
    <div
      class="
        absolute
        inset-0
        z-10
        p-4
        bg-gradient-to-t
        from-black
        flex flex-col
      "
    >
      <h2
        class="
          mt-auto
          mb-2
          text-2xl
          tracking-tight
          font-extrabold
          text-gray-900
          dark:text-gray-300
        "
      >
        <NuxtLink :to="path">{{ title }}</NuxtLink>
      </h2>
      <p class="text-base text-gray-900 dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AspectRatioImage from '~/components/AspectRatioImage.vue'
export default Vue.extend({
  components: {
    AspectRatioImage,
  },
  props: ['cover', 'title', 'path', 'description'],
})
</script>
