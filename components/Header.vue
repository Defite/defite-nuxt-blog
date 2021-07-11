<template>
  <header class="py-6 md:space-x-10 header" aria-label="Header with menu">
    <nav class="flex items-center w-full">
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <NuxtLink class="order-2 md:order-1" to="/">
            <img
              class="h-8 w-auto sm:h-10 z-50 relative"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            />
          </NuxtLink>
          <ColorMode class="order-1 md:hidden z-50" />
          <div class="-mr-2 order-3 md:order-2 flex items-center md:hidden">
            <button
              type="button"
              class="
                bg-white
                dark:bg-gray-700
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                dark:text-gray-300
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
                z-50
              "
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
              <!-- <span class="sr-only">Open main menu</span> -->
              <!-- Heroicon name: outline/menu -->
              <svg
                v-if="!showMenu"
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

              <svg
                v-else
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
                  d="M6 18L18 6M6 6l12 12"
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
      <ColorMode class="hidden md:inline-block md:ml-auto" />
      <!-- Mobile menu -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="showMenu"
          class="
            absolute
            top-0
            inset-x-0
            transition
            transform
            origin-center
            md:hidden
            z-10
          "
        >
          <div class="bg-white dark:bg-gray-800 grid grid-cols-main h-screen">
            <div class="menu">
              <div
                class="
                  space-y-10
                  h-screen
                  flex flex-col
                  items-center
                  justify-center
                "
              >
                <NuxtLink
                  to="/blog"
                  class="
                    text-4xl
                    font-bold
                    text-gray-900
                    hover:text-gray-700
                    dark:text-gray-300
                  "
                  @click.native="showMenu = false"
                >
                  Blog
                </NuxtLink>

                <NuxtLink
                  to="/work"
                  class="
                    text-4xl
                    font-bold
                    text-gray-900
                    hover:text-gray-700
                    dark:text-gray-300
                  "
                  @click.native="showMenu = false"
                >
                  Work
                </NuxtLink>

                <NuxtLink
                  to="/about"
                  class="
                    text-4xl
                    font-bold
                    text-gray-900
                    hover:text-gray-700
                    dark:text-gray-300
                  "
                  @click.native="showMenu = false"
                >
                  About
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </transition>
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
      showMenu: false,
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

.menu {
  grid-column: wide-start/wide-end;
}
</style>
