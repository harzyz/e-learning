import axios from 'axios'
import { defineStore } from 'pinia'

export const useCourseStore = defineStore({
  id: 'courses',
  state: () => ({
    courses: [],
    courseDetail: '',
    loading: false
  }),
  actions: {
    async getCourses() {
      try {
        this.loading = true
        const response = await axios.get('http://localhost:3000/course')
        this.courses = response.data
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 2000)
      }
    },
    async getCourseById(id) {
      try {
        this.loading = true
        const response = await axios.get(`http://localhost:3000/course/${id}`)
        this.courseDetail = response.data
      } catch (error) {
        console.error('Error fetching course:', error)
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 2000)
      }
    },
    setLoading(load) {
      this.loading = load
    }
  }
})
