<template>
  <div class="opacity-0 animate-pulse">
  <Logo variant="rounded" :size="size" />
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: Object,
    }
  })
</script>

<style lang="scss" scoped>
/* .loaderWrapper {
  opacity: 0;
  animation: spin 1s linear infinite ;
} */
/* 
@keyframes spin {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
} */


</style>
