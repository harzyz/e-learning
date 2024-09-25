<template>
  <div
    class="md:min-w-[100px] md:w-[100px] z-20 md:relative absolute bottom-[0%] w-full bg-priBg md:h-screen"
  >
    <ul class="grid md:grid-cols-1 grid-cols-4">
      <li :key="sidebarItem.id" v-for="sidebarItem in sidebarItems">
        <RouterLink
          :class="{
            'text-primary flex items-center justify-center md:h-[100px] h-[60px]': true,
            'bg-priBg text-white': isActiveRoute(sidebarItem.url)
          }"
          :to="sidebarItem.url"
        >
          <component :is="sidebarItem.imgUrl" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router' // Import useRoute to access current route
import CategoryIcon from '@/components/icons/CategoryIcon.vue'
import ChartIcon from '@/components/icons/ChartIcon.vue'
import CourseStackIcon from '@/components/icons/CourseStackIcon.vue'
import RoadmapIcon from '@/components/icons/RoadmapIcon.vue'
import SupportIcon from '@/components/icons/SupportIcon.vue'

// Define sidebar items
const sidebarItems = ref([
  {
    id: 1,
    label: 'Growth',
    url: '/',
    imgUrl: CategoryIcon
  },
  {
    id: 2,
    label: 'Courses',
    url: '/courses',
    imgUrl: CourseStackIcon
  },
  {
    id: 3,
    label: 'Certificates',
    url: '/certificates',
    imgUrl: RoadmapIcon
  },
  {
    id: 4,
    label: 'Support',
    url: '/support',
    imgUrl: SupportIcon
  }
])

// Get the current route
const route = useRoute()

// Check if the current route matches the sidebar item's URL
const isActiveRoute = (path) => {
  if (path === '/') {
    // For the home route, only match exactly '/'
    return route.path === '/'
  }
  // For other routes, use startsWith to match nested paths
  return route.path.startsWith(path)
}
</script>

<style scoped></style>
