<template>
  <header class="py-6 md:space-x-10 header" aria-label="Header with menu">
    <nav class="flex items-center w-full">
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <NuxtLink to="/">
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            />
          </NuxtLink>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
              "
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <span v-for="item in nav" :key="item.href">
          <NuxtLink
            :to="item.href"
            class="
              text-lg
              font-medium
              text-gray-500
              dark:text-gray-300
              hover:text-gray-900
              dark:hover:text-white
            "
            >{{ item.title }}</NuxtLink
          >
        </span>
      </div>
      <ColorMode />
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import ColorMode from '~/components/ColorMode.vue'

export default Vue.extend({
  components: {
    ColorMode,
  },
  data() {
    return {
      nav: [
        {
          href: '/blog',
          title: 'Blog',
        },
        {
          href: '/work',
          title: 'Work',
        },
        {
          href: '/about',
          title: 'About',
        },
      ],
    }
  },
})
</script>

<style scoped>
.header {
  grid-column: wide-start/wide-end;
}

.light a.nuxt-link-exact-active {
  color: black;
  font-weight: bold;
}

.dark a.nuxt-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
