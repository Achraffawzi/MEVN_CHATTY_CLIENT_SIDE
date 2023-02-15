<template>
  <div v-if="!isMobile">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

  <div
    v-else
    class="min-h-screen bg-dark-200 flex flex-col justify-center items-center"
  >
    <img class="w-1/2 mb-6" :src="AccessDenied" alt="access denied" />
    <h1 class="text-white">Use a laptop or a larger device to get access.</h1>
  </div>
</template>

<script setup>
import { isMobile } from "mobile-device-detect";
import AccessDenied from "./assets/images/svg/access-denied.svg";
</script>
