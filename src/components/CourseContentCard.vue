<template>
  <div
    v-for="(modules, index) in courseDetail?.courseContent"
    :class="showLesson == index ? 'slide_down' : 'slide_up'"
  >
    <div @click="toggleShowLesson(index)" class="flex md:text-md text-xs items-center gap-1">
      <p>Module {{ modules.module }}</p>
      
      <p class="sm:block hidden"> - {{ courseDetail.level }}</p>
      -
      <p>{{ modules.title }}</p>
    </div>

    <div class="pl-5 md:text-md text-xs" v-if="showLesson == index " v-for="lesson in modules.lessons">
      {{ lesson.lessonTitle }}
    </div>
  </div>
</template>

<script setup>
import { useCourseStore } from '@/stores/courses';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { courseDetail } = storeToRefs(useCourseStore())


const showLesson = ref(null)

const toggleShowLesson = (index) =>  {
  if(showLesson.value == index) {
    showLesson.value = null
  } else {
    showLesson.value = index
  } 
}
</script>

<style scoped>
.slide_up {
    @apply border border-b-[#C0C0C0]  flex flex-col gap-1 pb-[15px] pl-3 pt-[15px] min-h-[60px] h-[60px] transition-all duration-500 ease-in-out
}
.slide_down {
    @apply border border-b-[#C0C0C0] flex flex-col gap-1 pl-3 pb-[15px] pt-[15px] min-h-[60px] h-auto transition-all duration-500 ease-in-out
}
</style>
