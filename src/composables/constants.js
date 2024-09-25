import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import { ref } from "vue";

export const sidebarItems = ref([
  {
    id: 1,
    label: 'Growth',
    url: '/',
    imgUrl: CategoryIcon
  },
  // {
  //   id: 2,
  //   label: 'Growth',
  //   url: '/courses',
  //   imgUrl: '/src/assets/coursestack.svg'
  // },
  // {
  //   id: 3,
  //   label: 'Growth',
  //   url: '/courses',
  //   imgUrl: '/src/assets/roadmap.svg'
  // },
  // {
  //   id: 4,
  //   label: 'Growth',
  //   url: '/courses',
  //   imgUrl: '/src/assets/chart.svg'
  // }
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
