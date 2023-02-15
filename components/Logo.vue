<template>
  <LogoText :size="size" v-if="variant === 'text'" />
  <LogoRounded :size="size" v-else-if="variant === 'rounded'" />
</template>

<script setup>
const { variant, size } = defineProps({
  variant: {
    type: String,
    required: true
  },
  size: {
    type: Object,
  }
})
</script>

<style scoped>

</style>
