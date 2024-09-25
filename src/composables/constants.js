import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import ChartIcon from "@/components/icons/ChartIcon.vue";
import CourseStackIcon from "@/components/icons/CourseStackIcon.vue";
import RoadmapIcon from "@/components/icons/RoadmapIcon.vue";
import { ref } from "vue";

export const sidebarItems = ref([
  {
    id: 1,
    label: 'Growth',
    url: '/',
    imgUrl: CategoryIcon
  },
  {
    id: 2,
    label: 'Growth',
    url: '/courses',
    imgUrl: CourseStackIcon
  },
  {
    id: 3,
    label: 'Growth',
    url: '/courses',
    imgUrl: RoadmapIcon
  },
  {
    id: 4,
    label: 'Growth',
    url: '/courses',
    imgUrl: ChartIcon
  }
])
export const Courses = ref([
  {
    id: 1,
    label: 'Growth',
    mentor: 'Ankash',
    imgUrl: '/src/assets/course1.jpg'
  },
  {
    id: 2,
    label: 'Growth',
    mentor: 'Ankash',
    imgUrl: '/src/assets/course2.jpg'
  },
  {
    id: 3,
    label: 'Growth',
    mentor: 'Ankash',
    imgUrl: '/src/assets/course3.webp'
  },
  {
    id: 4,
    label: 'Growth',
    mentor: 'Ankash',
    imgUrl: '/src/assets/course4.png'
  }
])
