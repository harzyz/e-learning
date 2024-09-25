<template>
  <div class="w-full grid md:grid-cols-3 grid-cols-1 md:p-8 pb-20 p-4">
    <div class="md:col-span-2 h-auto pb-3 md:p-5 flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <h1 class="capitalize text-2xl font-[600]">{{ courseDetail.label }}</h1>
        <div class="flex gap-2 items-center font-[600]">
          <StarIcon />
          <p>{{ courseDetail.rating }}</p>
          <TutorIcon />
          <p>{{ courseDetail.enrolledStudents }}</p>
          <PersonIcon />
          <p>{{ courseDetail.mentor }}</p>
        </div>
        <h3 class="text-[0.875rem] text-[grey] font-[500]">{{ courseDetail.description }}</h3>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-[600] text-[1.2rem]">Course Content</h3>
        <div class="flex gap-1 md:text-md text-xs">
          <p>{{ courseDetail?.courseContent?.length }} Modules</p>
          •
          <p>{{ selectedCourse }} Lessons</p>
          •
          <p>{{ courseDetail.duration }} Lessons</p>
        </div>
      </div>
      <div class="border border-[#C0C0C0] rounded-xl">
        <CourseContentCard />
      </div>
    </div>
    <CourseDetailCard :courseDetail="courseDetail" />
  </div>
</template>

<script setup>
import CourseContentCard from '@/components/CourseContentCard.vue'
import CourseDetailCard from '@/components/CourseDetailCard.vue'
import PersonIcon from '@/components/icons/PersonIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import TutorIcon from '@/components/icons/TutorIcon.vue'
import { useCourseStore } from '@/stores/courses'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

const { getCourseById } = useCourseStore()
const { courseDetail } = storeToRefs(useCourseStore())

const props = defineProps(['id'])
const selectedCourse = ref({})
const showLesson = ref(null)

const toggleShowLesson = (index) => {
  if (showLesson.value == index) {
    showLesson.value = null
  } else {
    showLesson.value = index
  }
}

watch(courseDetail, () => {
  selectedCourse.value = computed(() => {
    return courseDetail.value.courseContent.reduce((sum, module) => {
      return sum + module.lessons.length
    }, 0)
  })
})

onMounted(() => {
  getCourseById(props.id)
})
</script>

<style scoped></style>
