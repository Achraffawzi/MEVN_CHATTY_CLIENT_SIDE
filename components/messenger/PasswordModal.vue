<template>
  <Modal @close-password-modal="closePasswordModal">
    <form
      class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-3/4 bg-dark-200 w-1/3 p-6 m-auto"
    >
      <Alert
        v-if="alert"
        :message="alert.message"
        :type="alert.type"
        @close-alert="closeAlert($event)"
      />

      <FormInput
        autocomplete="off"
        label="Old Password"
        type="password"
        :value="passwords.oldPassword"
        @input-changed="inputChanged($event)"
        name="oldPassword"
      />

      <FormInput
        autocomplete="off"
        label="New Password"
        type="password"
        :value="passwords.newPassword"
        @input-changed="inputChanged($event)"
        name="newPassword"
      />

      <FormInput
        autocomplete="off"
        label="Confirm Password"
        type="password"
        :value="passwords.confirmPassword"
        @input-changed="inputChanged($event)"
        name="confirmPassword"
      />

      <BaseButton
        text="Save"
        @click="onSubmit"
        :isLoading="isLoading"
        :loaderSize="loaderSize"
      />
      <p class="text-textGray mt-2 cursor-pointer" @click="closePasswordModal">
        Discard
      </p>
    </form>
  </Modal>
</template>

<script setup>
const { $objHasAllValuesExcept, $api } = useNuxtApp();
const runTimeConfig = useRuntimeConfig();
const emit = defineEmits(["closePasswordModal"]);

const passwords = ref({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
});
const alert = ref(null);
const isLoading = ref(false);
const loaderSize = ref({
  width: 20,
  eight: 20,
});

const closePasswordModal = () => {
  passwords.value = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  emit("closePasswordModal");
};

const onSubmit = () => {
  isLoading.value = true;

  const isValid = $objHasAllValuesExcept(passwords.value);
  if (!isValid) {
    alert.value = {
      message: "Please fill all the required info",
      type: "error",
    };
    isLoading.value = false;
    return;
  }

  // Make API request
};

const inputChanged = (event) => {
  passwords.value = { ...passwords.value, [event.name]: event.value };
};

const closeAlert = (e) => {
  alert.value = null;
};
</script>
