<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import './index.css'
import Loader from './components/Loader.vue';
import { useCounterStore } from './stores/counter';
import { storeToRefs } from 'pinia';
import { useCourseStore } from './stores/courses';

const { loading } = storeToRefs(useCourseStore())
</script>

<template>
  <div class="flex relative h-screen flex-col-reverse md:flex-row">
    <Sidebar />
    <div class="flex-grow h-full overflow-y-scroll">
      <Loader v-if="loading" />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
