<template>
  <div class="flex flex-col justify-start items-start flex-wrap mt-8 w-full">
    <label>{{ label }}</label>
    <input
      class="bg-inputBg p-2.5 text-white border-none outline-none mt-1 w-full main-rounded rounded-sm"
      :type="type"
      @input="onInputChanged"
      :value="value"
      :name="name"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["inputChanged"]);
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: "text",
    validator(value) {
      return ["text", "password", "email"].includes(value);
    },
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
});

const onInputChanged = (e) => {
  emit("inputChanged", { name: e.target.name, value: e.target.value });
};
</script>
