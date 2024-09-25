import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import ChartIcon from "@/components/icons/ChartIcon.vue";
import CourseStackIcon from "@/components/icons/CourseStackIcon.vue";
import RoadmapIcon from "@/components/icons/RoadmapIcon.vue";
import SupportIcon from "@/components/icons/SupportIcon.vue";
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
