<!-- <template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 gap-3 h-auto">
    <CourseCard :item="item" v-for="item in courses" />
  </div>
</template> -->

<template>
  <div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-5 gap-3 h-auto" v-if="courses.length > 0">
      <CourseCard v-for="item in courses" :key="item.id" :item="item" />
    </div>
    <div v-else>
      <div class="flex flex-col w-full items-center text-center justify-center h-screen">
        <p class="text-priText font-[500] text-2xl">
          No courses available at the moment. <br> Please check back later.
        </p>
      </div>
    </div>
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
