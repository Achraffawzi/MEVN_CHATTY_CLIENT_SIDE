<template>
  <NuxtLayout name="auth">
    <Alert
      v-if="alert"
      :message="alert.message"
      :type="alert.type"
      @close-alert="closeAlert($event)"
    />
    <form
      class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12"
    >
      <FormInput
        autocomplete="off"
        label="Email"
        type="email"
        :value="email"
        @input-changed="inputChanged($event)"
        name="email"
      />

      <BaseButton
        text="Submit"
        :isLoading="isLoading"
        :loaderSize="loaderSize"
        @click="onSubmit"
      />
    </form>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
const { $api } = useNuxtApp();
const { query } = useRoute();
const runTimeConfig = useRuntimeConfig();

const email = ref("");
const alert = ref(null);
const isLoading = ref(false);
const loaderSize = ref({
  width: 20,
  eight: 20,
});

const onSubmit = async (e) => {
  isLoading.value = true;
  if (!password.value || !confirmPassword.value) {
    alert.value = {
      message: "Please fill all the required info",
      type: "error",
    };
    isLoading.value = false;
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert.value = {
      message: "Passwords don't match",
      type: "error",
    };
    isLoading.value = false;
    return;
  }

  // Make API request
  try {
    await $api.put(
      `${runTimeConfig.public.API_URL}/auth/change-email/${query.id}`,
      { email: email.value }
    );

    isLoading.value = false;
    await navigateTo("/auth/login");
  } catch (error) {
    if (error.response) {
      alert.value = {
        message: error.response.data.message,
        type: "error",
      };
    }
    isLoading.value = false;
  }
};

const inputChanged = (event) => {
  email.value = event.value;
};

const closeAlert = (e) => {
  alert.value = null;
};
</script>
