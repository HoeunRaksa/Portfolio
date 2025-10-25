<template>
  <div id="certificates" class="w-full h-full flex flex-col justify-center items-center py-16">
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Certificates</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        Certificates and achievements that demonstrate my skills
      </p>
    </header>

    <!-- Certificates Grid -->
    <div class="flex flex-col gap-8 mx-auto w-full max-w-4xl">
      <!-- Certificate Card -->
      <div class="glass rounded-xl shadow-md overflow-hidden w-full">
        <img src="../assets/image/Net.png" alt="Certificate Image" class="w-full h-full object-cover rounded-[30px] p-5" />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-1">
            CCNA: Switching, Routing, and Wireless Essentials – Royal University of Phnom Penh
          </h2>
          <p class="text-gray-700 mb-4 line-clamp-4">
            I earned the <strong>CCNA: Switching, Routing, and Wireless Essentials</strong> certificate from
            the <strong>Royal University of Phnom Penh</strong> through the <strong>Cisco Networking Academy</strong>
            program.
            This certification recognizes my knowledge of networking fundamentals, including routing, switching,
            and wireless configuration, and demonstrates my ability to apply these skills in practical network
            environments.
          </p>
          <a href="/Portfolio/CCNA3-certification.pdf" target="_blank"
            class="text-[#1da1ff] font-semibold hover:underline">
            View Certificate
          </a>
        </div>
      </div>
      <!-- Add more certificates below if needed -->
      <!-- Each will be full-width row -->
    </div>
  </div>
</template>
