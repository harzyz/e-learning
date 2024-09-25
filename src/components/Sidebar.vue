<template>
  <div
    class="md:w-[100px] md:min-w-[250px] md:relative absolute bottom-[0%] w-full bg-priBg debugger md:h-screen"
  >
    <ul class="grid md:grid-cols-1 grid-cols-4">
      <li :key="sidebarItem.id" v-for="sidebarItem in sidebarItems">
        <RouterLink
          class="debugger text-white flex items-center justify-center h-[100px]"
          :to="sidebarItem.url"
        >
          <component :is="sidebarItem.imgUrl" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { sidebarItems } from '@/composables/constants'
// import hdhd from "@/assets/category.svg"
</script>

<style scoped></style>
