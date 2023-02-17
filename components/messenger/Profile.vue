<template>
  <div
    ref="profileWrapper"
    :class="[
      'bg-dark-100 min-h-screen p-2 flex flex-col justify-start h-full fixed z-10 top-0 right-0 overflow-x-hidden transition  ease-linear',
      isOpen ? 'w-3/12' : 'w-0',
    ]"
  >
    <h1
      class="text-3xl cursor-pointer text-textGray contents"
      @click="closeProfile"
    >
      &times;
    </h1>
    <div
      class="flex flex-col justify-start items-center text-center flex-1 pt-5 mt-5"
    >
      <div class="flex-1">
        <div class="flex justify-center items-center mb-3">
          <Avatar :src="user.picture" :alt="user.username" :size="100" />
        </div>
        <div>
          <h1 class="text-textGray">{{ user.username }}</h1>
          <h2 class="text-textGray">{{ user.email }}</h2>
          <!-- Add date of account creation => user.createdAt -->
        </div>
      </div>
      <div>
        <h2 @click="openPasswordModal" class="text-textGray cursor-pointer">
          Change Password
        </h2>
        <h2 class="text-red-600 cursor-pointer">Logout</h2>
      </div>
    </div>
  </div>

  <!-- Change password Modal -->
  <PasswordModal
    v-if="isPasswordModalOpen"
    @close-password-modal="closePasswordModal"
  />
</template>

<script setup>
const { user } = defineProps({
  user: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["closeProfile", "openModal"]);

// Profile
const profileWrapper = ref(null);
const closeProfile = () => {
  emit("closeProfile");
};

// Change Password
const isPasswordModalOpen = ref(false);
const openPasswordModal = () => {
  isPasswordModalOpen.value = true;
};
const closePasswordModal = () => {
  isPasswordModalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
