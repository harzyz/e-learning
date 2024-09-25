<template>
  <div
    @click="
      $router.push({
        name: 'course-details',
        params: { id: props.item.id }
      })
    "
    class="h-[250px] relative rounded-lg"
  >
    <img class="w-full h-full object-cover rounded-lg" :src="props.item.imgUrl" alt="" />
    <div
      class="p-3 absolute text-white flex flex-col justify-end debugger top-0 rounded-lg w-full h-full bg-[#00000080]"
    >
      <h3 class="text-[2rem]">{{ props.item.label }}</h3>
      <h3 class="text-[1rem]">With {{ props.item.mentor }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

<style lang="scss" scoped></style>
