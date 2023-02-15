<template>
  <div class="relative imagePickeWrapper">
    <div class="w-28 h-28 rounded-full border border-solid border-textGray overflow-hidden imagePickerWrapper__imagePlaceholder">
      <img v-if="src" :src="src" alt="profile picture" class="w-full h-full object-cover" />
    </div>
    <div class="cursor-pointer absolute bottom-0 -right-1 text-xl  imagePickerWrapper__selectIcon">
      <font-awesome-icon icon="fa-solid fa-camera" @click="onFileClicked" />
      <input :name="name" type="file" hidden="true" ref="imagePickerFileRef" accept="image/*" @change="onFileChanged">
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
const emit = defineEmits(['inputChanged'])
const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});

const src = ref(null);
const imagePickerFileRef = ref(null)

const onFileClicked = () => {
  imagePickerFileRef.value.click();
}

const onFileChanged = (e) => {
  // revike the previous BLOB for memory free
  if (src) URL.revokeObjectURL(src);

  src.value = URL.createObjectURL(e.target.files[0]);
  emit("inputChanged", { name: e.target.name, value: e.target.files[0] });
}
</script>