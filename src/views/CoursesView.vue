<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 gap-3 h-auto">
    <CourseCard :item="item" v-for="item in courses" />
  </div>
</template>

<script setup>
import CourseCard from '@/components/CourseCard.vue'
import Loader from '@/components/Loader.vue'
import { Courses } from '@/composables/constants'
import { onMounted, ref } from 'vue'
import { useCourseStore } from '@/stores/courses'
import { storeToRefs } from 'pinia'

const { getCourses } = useCourseStore()
const { courses } = storeToRefs(useCourseStore())

onMounted(() => {
  getCourses()
  console.log('>>>Mounted>>>')
})
</script>

<style scoped></style>
