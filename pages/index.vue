<template>
  <div class="flex min-h-screen">
    <div class="bg-dark-100 basis-1/4 border-r border-r-borderColor p-2 pb-0">
      <!-- Sidebar Header => Profile username -->
      <div class="flex items-center border-b border-b-borderColor pb-2">
        <Avatar :src="user.picture" :alt="user.username" :size="40" />
        <div class="flex-1 flex flex-col justify-center items-start ml-2">
          <span class="text-white text-lg">{{ user.username }}</span>
          <span
            class="cursor-pointer text-primary text-sm"
            @click="isProfileOpen = !isProfileOpen"
            >Profile</span
          >
        </div>
      </div>
    </div>
    <div class="bg-dark-200 flex-1">
      <Profile
        @close-profile="isProfileOpen = false"
        :user="user"
        v-if="isProfileOpen"
        :isOpen="isProfileOpen"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const user = ref({
  username: "itsYeAlpha",
  email: "achrafawzi2000@gmail.com",
  picture:
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/64A3/production/_128436752_gettyimages-1459166551.jpg",
});
const isProfileOpen = ref(false);
</script>
