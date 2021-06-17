<template>
  <nav
    class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 header"
    aria-label="Global"
  >
    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
      <div class="flex items-center justify-between w-full md:w-auto">
        <NuxtLink to="/">
          <span class="sr-only">Workflow</span>
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
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-indigo-500
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
      <NuxtLink
        to="/blog"
        class="text-lg font-medium text-gray-500 hover:text-gray-900"
        >Blog</NuxtLink
      >

      <NuxtLink
        to="/work"
        class="text-lg font-medium text-gray-500 hover:text-gray-900"
        >Work</NuxtLink
      >

      <NuxtLink
        to="/about"
        class="text-lg font-medium text-gray-500 hover:text-gray-900"
        >About me</NuxtLink
      >
    </div>
  </nav>
</template>

<style scoped>
.header {
  grid-column: wide-start/wide-end;
}

a.nuxt-link-exact-active {
  color: rgba(17, 24, 39, 1);
  font-weight: bold;
}
</style>
