<template>
  <div class="flex min-h-screen">
    <div class="bg-dark-100 basis-1/4 border-r border-r-borderColor p-2 pb-0">
      <!-- Sidebar Header => Profile username -->
      <div class="flex items-center border-b border-b-borderColor pb-2">
        <Avatar
          :src="user.picture.pictureURL"
          :alt="user.username"
          :size="40"
        />
        <div class="flex-1 flex flex-col justify-center items-start ml-2">
          <span class="text-white text-lg">{{ user.username }}</span>
          <span
            class="cursor-pointer text-primary text-sm"
            @click="isProfileOpen = !isProfileOpen"
            >Profile</span
          >
        </div>
      </div>

      <!-- Search component -->
      <SearchInput />
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
import { useUserStore } from "../store/user";
// definePageMeta({
//   middleware: "auth",
// });
const userStore = useUserStore();
const user = userStore.user;

const isProfileOpen = ref(false);
</script>
