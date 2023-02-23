<template>
  <div class="opacity-0 animate-pulse">
    <Logo variant="rounded" :size="size" />
  </div>
</template>

<script setup>
const props = defineProps({
  size: {
    type: Object,
  },
});
</script>
