<template>
  <div class="rounded-full overflow-hidden" :style="getCSSSize">
    <img
      class="w-full h-full object-cover rounded-full"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
const { src, alt, size } = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Avatar",
  },
  size: {
    type: Number,
    default: 40, // small = 40 | medium = 50 | large = 55
  },
});

onMounted(() => console.log(size));

const getCSSSize = computed(() => {
  return {
    width: `${size}px`,
    height: `${size}px`,
  };
});
</script>
