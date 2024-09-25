import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import CourseDetails from '@/views/CourseDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses',
      name: 'courses',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CoursesView
    },
    {
      path: "/course/:id",
      name: "course-details",
      component: CourseDetails,
      props: true,
    },
  ]
})

export default router
