<template>
    <section class="container mx-auto py-12 px-4">
      <!-- Page Title -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800">Help & Support</h1>
        <p class="text-gray-600 mt-2">We're here to help you with any questions or issues you may have.</p>
      </div>
  
      <!-- FAQ Section -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-700 mb-6">Frequently Asked Questions</h2>
        <ul class="space-y-4">
          <li class="p-4 border border-gray-200 rounded-md">
            <h3 class="font-semibold text-lg">How do I enroll in a course?</h3>
            <p class="text-gray-600 mt-2">To enroll in a course, go to the course page and click the "Enroll" button. You will be prompted to log in or create an account if you haven't done so.</p>
          </li>
          <li class="p-4 border border-gray-200 rounded-md">
            <h3 class="font-semibold text-lg">Can I access my courses offline?</h3>
            <p class="text-gray-600 mt-2">Yes, some courses allow you to download materials for offline use. Check the course details to see if offline access is available.</p>
          </li>
          <li class="p-4 border border-gray-200 rounded-md">
            <h3 class="font-semibold text-lg">How can I reset my password?</h3>
            <p class="text-gray-600 mt-2">You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.</p>
          </li>
        </ul>
      </div>
  
      <!-- Contact Form -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-700 mb-6">Contact Support</h2>
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-gray-700">Your Name</label>
            <input
              id="name"
              type="text"
              class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">Your Email</label>
            <input
              id="email"
              type="email"
              class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700">Your Message</label>
            <textarea
              id="message"
              rows="5"
              class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we assist you?"
            ></textarea>
          </div>
          <div>
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
    // No additional logic is needed for this page
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>
  