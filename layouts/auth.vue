<template>
    <div class="flex flex-col justify-start items-start flex-wrap min-h-screen bg-dark-100 text-white relative">
        <Container>
            <h2 class="my-2">
                <Logo variant="text" :size="logoSize" />
            </h2>
        </Container>
        <div class="flex flex-col justify-center items-center flex-wrap bg-dark-100 w-[100%] flex-1">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const logoSize = ref({
    width: "40px",
    height: "40px"
})
</script>