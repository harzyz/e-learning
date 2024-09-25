<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div :style="borderStyle" class="loader"></div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useCourseStore } from '@/stores/courses';


const { setLoading } = useCounterStore()

const props = defineProps({
  size: {
    type: String,
    default: 'sm'
  },
  color: {
    type: String,
    default: '#F0F2F5'
  },
  foregroundColor: {
    type: String,
    default: '#A36EB8'
  }
})

const { loading } = storeToRefs(useCourseStore())

const sizes = {
  size: {
    xs: '18px',
    sm: '32px',
    md: '48px',
    lg: '56px',
    xl: '64px'
  },
  width: {
    xs: '1.5px',
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px'
  }
}

const loaderSize = computed(() => sizes.size[props.size] || sizes.size.sm)
const loaderWidth = computed(() => sizes.width[props.size] || sizes.width.sm)

const borderStyle = computed(() => ({
  border: `${loaderWidth.value} solid ${props.foregroundColor}`,
  borderTop: `${loaderWidth.value} solid ${props.color}`,
  borderRight: `${loaderWidth.value} solid ${props.color}`,
  borderBottom: `${loaderWidth.value} solid ${props.color}`,
  width: loaderSize.value,
  height: loaderSize.value
}))


</script>

<style scoped>
.loader {
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
