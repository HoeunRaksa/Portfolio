<template>
  <div
    id="contact"
    class="w-full h-full flex flex-col justify-center items-center py-16"
  >
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Let’s chat</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        You can reach me through email or connect with me on social platforms
      </p>
    </header>

    <!-- Contact Icons -->
    <div class="flex justify-center gap-8 text-4xl">
      <!-- Email -->
      <a
        href="mailto:hoeunraksa012@gmail.com"
        class="text-gray-600 hover:text-red-500 transition"
        target="_blank"
      >
        <Icon icon="mdi:email" />
      </a>

      <!-- Facebook -->
      <a
        href="https://www.facebook.com/hoeun.raksa.426443"
        class="text-gray-600 hover:text-blue-600 transition"
        target="_blank"
      >
        <Icon icon="mdi:facebook" />
      </a>

      <!-- Telegram -->
      <a
        href="https://t.me/hoeunraksa"
        class="text-gray-600 hover:text-sky-400 transition"
        target="_blank"
      >
        <Icon icon="mdi:telegram" />
      </a>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: { Icon },
};
</script>
