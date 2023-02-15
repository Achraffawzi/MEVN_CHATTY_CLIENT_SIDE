<template>
  <div :class="['py-5 px-2.5 flex justify-between items-center flex-nowrap absolute rounded-sm right-12 top-2.5 z-50 w-80 max-w-xs', type]">
    <p v-if="!isHTML">{{ message }}</p>
    <p v-else v-html="message"></p>
    <span @click="emit('closeAlert')" class="text-xl cursor-pointer">&times;</span>
  </div>
</template>

<script setup>
  const emit = defineEmits(["closeAlert"]);
  const {message, type, isHTML } = defineProps({
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validate(value) {
        return ['error', 'info', 'success'].includes(value)
      }
    },
    isHTML: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
.error {
  background-color: rgba(255, 0, 0, 0.9);
}

.info {
  background-color: rgba(30, 144, 255, .9);
}

.success {
  background-color: rgba(0, 136, 0, .9);
}

@keyframes slideLeft {
  from {
transform: translateX(150%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
