<template>
  <div class="w-full grid grid-cols-3 p-8">
    <div class="col-span-2 p-5 flex flex-col gap-5">
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
        <div class="flex gap-1 ">
          <p>{{ courseDetail?.courseContent?.length }} Modules</p> •
          <p>{{ selectedCourse }} Lessons</p> •
          <p>{{ courseDetail.duration }} Lessons</p>
        </div>
      </div>
      <div class="border border-[grey] rounded-xl">
        <div v-for="modules in courseDetail?.courseContent" class="border border-[grey] flex flex-col gap-1 pl-3 min-h-[60px] h-auto">
          <div class="flex items-center gap-1">
            <p>Module {{ modules.module }}</p> - <p>{{ courseDetail.level }}</p> - <p>{{ modules.title }}</p>
          </div>

          <div v-for="lesson in modules.lessons">
            {{ lesson.lessonTitle }}
          </div>
        </div>

      </div>
    </div>
    <div class="h-full flex flex-col gap-5 p-5 shadow-xl rounded-xl">
      <img
        class="w-full rounded-lg h-[300px] object-cover"
        :src="courseDetail.imgUrl"
        :alt="courseDetail.label"
      />
      <div>
        <div class="flex items-center gap-2">
          <h3 class="text-[1.8rem] font-[500]">${{ courseDetail.price }}.00</h3>
          <h3 class="text-[1.2rem] font-[400] text-[grey] line-through">
            ${{ courseDetail.oldprice }}.00
          </h3>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <button class="btn w-full">Buy Now</button> <div class="shadow-lg p-2 rounded-md "><HeartIcon /> </div>
      </div>
      <div class="border-t-[1px] border-[grey]"></div>
      <div>
        <h4>This course includes</h4>
        <p class="text-[red]"><ArticlesIcon /></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArticlesIcon from '@/components/icons/ArticlesIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import PersonIcon from '@/components/icons/PersonIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
import TutorIcon from '@/components/icons/TutorIcon.vue'
import Loader from '@/components/Loader.vue'
import { Courses } from '@/composables/constants'
import { useCourseStore } from '@/stores/courses'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'

const { getCourseById } = useCourseStore()
const { courseDetail } = storeToRefs(useCourseStore())

const props = defineProps(['id'])
const selectedCourse = ref({})
const best = ref('')

const totalLessons = computed(() => {
  return courseDetail.value.courseContent.reduce((sum, module) => {
    return sum + module.lessons.length
  }, 0)
})

watch(courseDetail, () => {
  selectedCourse.value = computed(() => {
    return courseDetail.value.courseContent.reduce((sum, module) => {
      return sum + module.lessons.length
    }, 0)
  })
})

// const gggg = () => {
//     console.log(Courses.value.find((course) => course.id == props.id))
//     console.log((Array.isArray(Courses.value)))
// }

onMounted(() => {
  // selectedCourse.value = Courses.value.find((course) => course.id == props.id)
  getCourseById(props.id)
})
</script>

<style scoped></style>
