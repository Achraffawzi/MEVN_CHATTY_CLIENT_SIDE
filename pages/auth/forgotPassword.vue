<template>
    <NuxtLayout name="auth">
        <form class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12">
            <Alert v-if="alert" :message="alert.message" :type="alert.type" @close-alert="closeAlert($event)" />

            <FormInput autocomplete="off" label="Email" type="email" :value="email" @input-changed="inputChanged($event)"
                name="email" />

            <BaseButton text="Submit" :isLoading="isLoading" :loaderSize="loaderSize" @click="onSubmit" />
            <h5 class="text-textGray font-normal m-1.5">Oops...just remembered it! <span><nuxt-link to="/auth/login" class="text-primary">Login</nuxt-link></span></h5>
        </form>
    </NuxtLayout>
</template>

<script setup>
import { ref } from "vue"
const { $api } = useNuxtApp();
const runTimeConfig = useRuntimeConfig();


const email = ref('')
const alert = ref(null)
const isLoading = ref(false);
const loaderSize = ref({
    width: 20,
    eight: 20
})
const onSubmit = async (e) => {

    isLoading.value = true;
    if (!email.value) {
        alert.value = {
            message: "Email is required",
            type: "error",
        }
        isLoading.value = false;
        return;
    }

    // Make API request
    try {
        const { data } = await $api.post(`${runTimeConfig.public.API_URL}/auth/forgot-password`, { email: email.value }, {
            Headers: {
                "Content-Type": "application/json"
            }
        })

        isLoading.value = false;
        alert.value = {
            message: data?.message,
            type: "success",
        };

        // this.$router.push({ path: '/messenger' })
    } catch (error) {
        if (error.response) {
            alert.value = {
                message: error.response.data.message,
                type: "error"
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
}

</script>
