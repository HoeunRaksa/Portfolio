<template>
  <section id="skills" class="py-16 w-full h-full">
    <header class="text-center mb-12">
      <h1 class="lg:text-5xl text-3xl font-semibold">
        <span class="text-[#1da1ff]">Skills & Tech Stack</span>
      </h1>
      <p class="text-gray-600 mt-4 text-lg md:text-xl">
        Technologies I use to build mobile and backend applications
      </p>
    </header>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto justify-items-center items-center"
    >
      <!-- Mobile Development -->
      <SkillCard icon="logos:flutter" name="Flutter" />
      <SkillCard icon="logos:dart" name="Dart" />
      <SkillCard icon="mdi:state-machine" name="Provider" />

      <!-- Backend -->
      <SkillCard icon="logos:laravel" name="Laravel" />
      <SkillCard icon="simple-icons:dotnet" name="ASP.NET Core" />
      <SkillCard icon="devicon:csharp" name="C#" />
      <SkillCard icon="mdi:api" name="REST API" />

      <!-- Database -->
      <SkillCard icon="devicon:mysql" name="MySQL" />
      <SkillCard icon="devicon:microsoftsqlserver" name="SQL Server" />

      <!-- Tools -->
      <SkillCard icon="logos:git-icon" name="Git" />
      <SkillCard icon="logos:github-icon" name="GitHub" />
      <SkillCard icon="devicon:postman" name="Postman" />
      <SkillCard icon="logos:docker-icon" name="Docker" />
      <SkillCard icon="logos:visual-studio-code" name="VS Code" />
    </div>
  </section>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  components: { SkillCard },
};
</script>
