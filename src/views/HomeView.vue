<script setup>
</script>

<template>
  <!-- Landing Section -->
  <section class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to EduDash</h1>
      <p class="text-lg text-gray-600 mb-6">
        Learn at your own pace with the best online courses designed just for you.
      </p>
      <router-link to="/courses">
        <button class="btn text-white">
          Explore Courses
        </button>
      </router-link>
    </div>
  </section>
</template>
