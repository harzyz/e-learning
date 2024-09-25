<template>
  <div class="h-full flex flex-col gap-5 p-5 shadow-xl rounded-xl">
    <img
      class="w-full rounded-lg h-[300px] object-cover"
      :src="props.courseDetail.imgUrl"
      :alt="props.courseDetail.label"
    />
    <div>
      <div class="flex items-center gap-2">
        <h3 class="text-[1.8rem] font-[500]">${{ props.courseDetail.price }}.00</h3>
        <h3 class="text-[1.2rem] font-[400] text-[grey] line-through">
          ${{ props.courseDetail.oldprice }}.00
        </h3>
      </div>
    </div>
    <div class="flex gap-2 items-center">
      <button class="btn w-full">Buy Now</button>
      <div class="shadow-lg p-2 rounded-md"><HeartIcon /></div>
    </div>
    <div class="border-t-[1px] border-[grey]"></div>
    <div class="course-includes bg-white shadow rounded p-4">
      <ul>
        <li v-for="(item, index) in courseIncludes" :key="index" class="flex items-center mb-4">
          <span v-html="item.icon" class="w-6 h-6 mr-3 text-gray-600"></span>
          <span class="text-gray-800 text-base">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ArticlesIcon from '@/components/icons/ArticlesIcon.vue'
import HeartIcon from '@/components/icons/HeartIcon.vue'
import { ref } from 'vue'
const props = defineProps({
  courseDetail: Object
})

const courseIncludes = ref([
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
  <polygon points="10,8 16,12 10,16" fill="currentColor"></polygon>
</svg>
`,
    text: '65 hours on-demand video'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-2.664-7.147 5 5 0 019.9-2.198A3.5 3.5 0 0117.5 14H19a3 3 0 010 6H7a4 4 0 01-4-4z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12v6m0 0l-3-3m3 3l3-3" />
</svg>
`,
    text: '49 downloadable resources'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <rect x="7" y="2" width="10" height="20" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round"></rect>
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 18h2"></path>
</svg>
`,
    text: 'Access on mobile and TV'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
    <path
      d="M6 4h12c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v14h12V6H6zm2 3h8v2H8v-2zm0 3h8v2H8v-2zm0 3h8v2H8v-2z"
      fill="currentColor"
    />
  </svg>`,
    text: '86 articles'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17l-5-5 5-5M15 7l5 5-5 5" />
</svg>
`,
    text: '8 coding exercises'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <circle cx="12" cy="10" r="4" stroke-linecap="round" stroke-linejoin="round"></circle>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 14l-2 6h12l-2-6M12 14v7" />
</svg>`,
    text: 'Certificate of completion'
  }
])
</script>

<style lang="scss" scoped></style>
