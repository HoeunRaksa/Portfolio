<template>
  <div id="projects" class="w-full h-full flex flex-col justify-center items-center py-16">
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Projects</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        A selection of web applications I've built using various technologies
      </p>
    </header>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      <!-- Project Card -->
      <div
        class="glass rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md transform transition-transform duration-300 lg:hover:scale-105">
        <img src="../assets/image/Smartregistraion.png" alt="Project 1" class="w-full h-56 object-fill rounded-[30px] p-5" />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">
            Smart Registration System
          </h2>
          <p class="text-gray-700 mb-4 line-clamp-5">
            Smart Registration System — a full-stack web application developed to manage
            student enrollment, staff information, and payment transactions efficiently.
            The system integrates with ABA Payway for online payments, using ASP.NET Core
            for the backend and SQL Server as the database. React.js is implemented for
            an interactive and modern user interface.
          </p>


          <!-- <a -->
          <!-- href="https://github.com/VathanaProgrammer/Intern_pos_project" -->
          <!-- class="text-[#1da1ff] font-semibold hover:underline" -->
          <!-- > -->
          <!-- View Project -->
          <!-- </a> -->
        </div>
      </div>
      <div
        class="glass rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full max-w-md transform transition-transform duration-300 lg:hover:scale-105">
        <img src="../assets/image/Inventory.png" alt="Project 1" class="w-full h-56 p-5  object-fill rounded-[30px]" />
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-2">Inventory Data Management</h2>
          <p class="text-gray-700 mb-4 line-clamp-5">
            Inventory Data Management — A desktop application built with C# and .NET to
            manage products, transactions, and stock records. Supports full CRUD
            operations, search, reporting, and real-time inventory tracking for stock
            in and out activities.
          </p>
        </div>
      </div>
    </div>

    <!-- See More Button -->
    <div class="mt-10">
      <a href="https://github.com/HoeunRaksa?tab=repositories" target="_blank"
        class="bg-[#1da1ff] px-4 md:text-[18px] py-3 inline-flex items-center text-white rounded-lg shadow-md hover:bg-[#0d8de3] transition">
        See More on GitHub
        <span>
          <Icon icon="ic:round-navigate-next" class="w-8 h-8" />
        </span>
      </a>
    </div>
  </div>
</template>
