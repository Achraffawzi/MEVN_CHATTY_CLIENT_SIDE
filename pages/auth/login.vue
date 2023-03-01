<template>
  <NuxtLayout name="auth">
    <form
      class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12"
      method="POST"
    >
      <Alert
        v-if="alert"
        :message="alert.message"
        :type="alert.type"
        @close-alert="closeAlert($event)"
      />

      <FormInput
        autocomplete="off"
        label="Email"
        type="text"
        :value="user.email"
        @input-changed="inputChanged($event)"
        name="email"
      />

      <FormInput
        autocomplete="off"
        label="Password"
        type="password"
        :value="user.password"
        @input-changed="inputChanged($event)"
        name="password"
      />

      <BaseButton
        text="Log in"
        @click="onSubmit"
        :isLoading="isLoading"
        :loaderSize="loaderSize"
      />
    </form>
    <h6 class="text-textGray font-normal mx-1.5 mt-1.5">
      Don't have have an account?
      <span
        ><nuxt-link class="text-primary" to="/auth/signup"
          >Sign up</nuxt-link
        ></span
      >
    </h6>
    <h6 class="text-textGray font-normal mx-1.5">
      Or forgot password?
      <span
        ><nuxt-link class="text-primary" to="/auth/forgotPassword"
          >Reset it</nuxt-link
        ></span
      >
    </h6>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~~/store/user";
const { $objHasAllValuesExcept, $api } = useNuxtApp();
const runTimeConfig = useRuntimeConfig();
const store = useUserStore();
const userFromStore = store.user;

const user = ref({
  email: "",
  password: "",
});
const alert = ref(null);
const isLoading = ref(false);
const loaderSize = ref({
  width: 20,
  eight: 20,
});

const onSubmit = async () => {
  try {
    isLoading.value = true;
    const isValid = $objHasAllValuesExcept(user.value);

    if (!isValid) {
      alert.value = {
        message: "Please fill all the required info",
        type: "error",
      };
      return;
    }

    // Make API request
    const { data } = await $api.post(
      `${runTimeConfig.public.API_URL}/auth/login`,
      { ...user.value },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // save user state to pinia store
    store.setUser(data);
    console.log(userFromStore);
    console.log(localStorage.getItem("user"));

    isLoading.value = false;
    await navigateTo("/");
  } catch (error) {
    console.log(error);
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
  user.value = { ...user.value, [event.name]: event.value };
};

const closeAlert = (e) => {
  alert.value = null;
};
</script>
