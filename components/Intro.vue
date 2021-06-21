<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative overflow-hidden intro">
    <div
      class="
        relative
        z-10
        pb-8
        sm:pb-16
        md:pb-20
        lg:max-w-2xl lg:w-full lg:pb-28
        xl:pb-32
      "
    >
      <main class="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-5xl
              md:text-6xl
            "
          >
            <span class="block dark:text-gray-300">Hi! I'm Nikita Makhov,</span>
            <span class="block text-indigo-600 dark:text-indigo-300"
              >front-end engineer</span
            >
          </h1>
          <p
            class="
              mt-3
              text-base text-gray-500
              dark:text-gray-400
              sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
              md:mt-5 md:text-xl
              lg:mx-0
            "
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.intro {
  grid-column: wide-start/wide-end;
}
</style>
