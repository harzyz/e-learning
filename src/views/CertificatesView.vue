<template>
  <section class="container mx-auto py-12 px-4">
    <!-- Page Title -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-gray-800">Certificates & Achievements</h1>
      <p class="text-gray-600 mt-2">
        View and download your certificates and track your achievements here.
      </p>
    </div>

    <!-- Certificates Section -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Your Certificates</h2>
      <ul class="space-y-4">
        <li
          v-for="(certificate, index) in certificates"
          :key="index"
          class="p-4 border border-gray-200 rounded-md"
        >
          <h3 class="font-semibold text-lg">{{ certificate.title }}</h3>
          <p class="text-gray-600 mt-2">Issued on: {{ certificate.date }}</p>
          <button
            class="btn "
            @click="downloadCertificate(certificate)"
          >
            Download Certificate
          </button>
        </li>
      </ul>
    </div>

    <!-- Achievements Section -->
    <div>
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Your Achievements</h2>
      <ul class="space-y-4">
        <li
          v-for="(achievement, index) in achievements"
          :key="index"
          class="p-4 border border-gray-200 rounded-md"
        >
          <h3 class="font-semibold text-lg">{{ achievement.title }}</h3>
          <p class="text-gray-600 mt-2">{{ achievement.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Sample data for certificates and achievements
const certificates = ref([
  { title: 'Frontend Development', date: 'July 2023' },
  { title: 'JavaScript Mastery', date: 'August 2023' }
])

const achievements = ref([
  { title: 'Top 1% in JavaScript Course', description: 'Completed with a top score of 98%' },
  {
    title: 'Course Completion Streak',
    description: 'Completed 3 courses in a row within 2 months.'
  }
])

// Mock function for certificate download
const downloadCertificate = (certificate) => {
  alert(`Downloading certificate: ${certificate.title}`)
}
</script>

<style scoped>
/* Optional scoped styles */
</style>
