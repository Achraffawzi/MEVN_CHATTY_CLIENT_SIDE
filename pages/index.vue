<template>
    messenger
</template>

<script>
import {ref} from "vue"
    export default {
        setup() {
            const welcome = ref('hello from index');

            return {
                welcome
            }
        }
    }
</script>