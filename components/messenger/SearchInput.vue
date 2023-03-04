<template>
  <!-- Search input -->
  <div
    class="my-4 pl-3 flex items-center overflow-hidden rounded-sm text-textGray bg-inputBg"
  >
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <input
      type="text"
      class="flex-1 py-2 ml-3 bg-transparent outline-none border-none"
      placeholder="Search for a friend"
    />
  </div>
  <!-- Search result -->
  <div></div>
</template>

<script setup>
import { ref } from "vue";

const result = ref([{}]);
</script>
