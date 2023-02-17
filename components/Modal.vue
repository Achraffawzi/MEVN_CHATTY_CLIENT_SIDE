<template>
  <Teleport to="body">
    <div
      class="p-4 bg-dark-300 bg-opacity-70 text-textGray fixed top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center"
      @click.self="closePasswordModal"
    >
      <slot />
    </div>
  </Teleport>
</template>

<script setup>
const emit = defineEmits(["closePasswordModal"]);
const { isOpen } = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const closePasswordModal = () => {
  emit("closePasswordModal");
};
</script>
