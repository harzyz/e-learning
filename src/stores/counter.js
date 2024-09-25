import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const loading = ref(true)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function setLoading(load) {
    loading.value = load
  }

  return { count, doubleCount, increment, loading, setLoading }
})
