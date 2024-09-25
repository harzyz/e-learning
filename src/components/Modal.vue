<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    @click="onClose"
  >
    <div class="md:w-auto w-[80%] bg-white rounded-lg p-4" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['customChange'])

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
})

const onClose = () => {
  emit('closeModal', false)
}

// Toggle body overflow based on the modal state
const toggleBodyOverflow = (open) => {
  const body = document.body
  if (body) {
    body.style.overflow = open ? 'hidden' : 'unset'
  }
}

// Watch for changes in isOpen prop
watch(
  () => props.isOpen,
  (newVal) => {
    toggleBodyOverflow(newVal)
    console.log(props.isOpen, 'hello')
  }
)

// Cleanup overflow style when component unmounts
onBeforeUnmount(() => {
  toggleBodyOverflow(false)
})
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
