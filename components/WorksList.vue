<template>
  <section>
    <h2
      class="
        text-3xl
        mb-10
        tracking-tight
        font-extrabold
        text-gray-900
        dark:text-gray-300
      "
    >
      Projects
    </h2>
    <section class="">
      <WorkCard
        v-for="project in items"
        :key="project.slug"
        :cover="project.coverImage"
        :title="project.title"
        :path="project.path"
        :description="project.description"
      />
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import WorkCard from '~/components/WorkCard.vue'
export default Vue.extend({
  components: {
    WorkCard,
  },
  props: ['items'],
})
</script>
