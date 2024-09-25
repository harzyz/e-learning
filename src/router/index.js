import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import CourseDetails from '@/views/CourseDetails.vue'
import SupportView from '@/views/SupportView.vue'
import CertificatesView from '@/views/CertificatesView.vue'

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
      component: CoursesView
    },
    {
      path: "/course/:id",
      name: "course-details",
      component: CourseDetails,
      props: true,
    },
    {
      path: "/support",
      name: "support",
      component: SupportView,
      props: true,
    },
    {
      path: "/certificates",
      name: "certificates",
      component: CertificatesView,
      props: true,
    },
  ]
})

export default router
