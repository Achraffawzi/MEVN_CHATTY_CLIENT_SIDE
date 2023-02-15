<template>
    <NuxtLayout name="auth">
        <Alert v-if="alert" :message="alert.message" :type="alert.type" @close-alert="closeAlert($event)" />
        <form class="flex flex-col justify-start items-center flex-wrap mx-auto max-w-xs w-11/12">
            <ImagePicker @input-changed="inputChanged($event)" name="picture" />
        
            <FormInput autocomplete="off" label="Username" type="text" :value="user.username"
                @input-changed="inputChanged($event)" name="username" />
        
            <FormInput autocomplete="off" label="Email" type="email" :value="user.email" @input-changed="inputChanged($event)"
                name="email" />
        
            <FormInput autocomplete="off" label="Password" type="password" :value="user.password"
                @input-changed="inputChanged($event)" name="password" />
        
            <BaseButton text="Signup" :isLoading="isLoading" :loaderSize="loaderSize"  @click="onSubmit" />
        </form>
        <h5 class="text-textGray font-normal m-1.5">
            Already have an account?
             <span>
                <nuxt-link class="text-primary" to="/auth/login">Login</nuxt-link>
            </span>
        </h5>
    </NuxtLayout>
</template>

<script setup>
import {ref} from "vue"
const { $objHasAllValuesExcept, $api } = useNuxtApp();
const runTimeConfig = useRuntimeConfig();

const user = ref({
    username: "",
    email: "",
    password: "",
    picture: null,
})
const alert = ref(null)
const isLoading = ref(false);
const loaderSize = ref({
    width: 20,
    eight: 20
})

const onSubmit = async () => {
    try {
        isLoading.value = true;
        const isValid = $objHasAllValuesExcept(user.value, 'picture');
        if (!isValid) {
            alert.value = {
                message: "Please fill all the required info",
                type: "error",
            }
            isLoading.value = false;
            return;
        }

        // Make API request

        const formData = new FormData()
        formData.append('username', user.value.username);
        formData.append('email', user.value.email);
        formData.append('picture', user.value.picture);
        formData.append('password', user.value.password);
        const res = await $api.post(`${runTimeConfig.public.API_URL}/auth/signup`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        isLoading.value = false;
        alert.value = {
            message: res.data.message,
            type: "success",
            isHTML: true,
        };
    } catch (error) {
        if(error.response) {
            alert.value = {
                message: error.response.data.message,
                type: "error"
            };
        }
        isLoading.value = false;
    }
}

const inputChanged = (event) => {
    user.value = { ...user.value, [event.name]: event.value }
    console.log(user.value)
};

const closeAlert = (e) => {
    alert.value = null;
}
</script>