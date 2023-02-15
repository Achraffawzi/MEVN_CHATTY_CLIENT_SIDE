<template>
  <button class="p-2.5 text-white flex justify-center items-center bg-primary border-none outline-none cursor-pointer w-full mt-7" :disabled="isLoading" @click.prevent="emit('onClick')">

      <Loader :size = "loaderSize" v-if= "isLoading" />
      <span v-else>{{text}}</span>

  </button>
</template>

<script setup>
const emit = defineEmits(['onClick']);
const {text, block, isLoading, loaderSize} = defineProps({
  text: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    default: "block"
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  loaderSize: {
    type: Object
  }
});
</script>