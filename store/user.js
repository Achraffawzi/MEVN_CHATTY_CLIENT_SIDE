import { defineStore } from "pinia";
import { watch } from "vue";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    // user: useStorage("user", null),
    user:
      localStorage.getItem("userStore") !== null
        ? JSON.parse(localStorage.getItem("userStore"))
        : nulln,
  }),

  getters: {},

  actions: {
    setUser(user) {
      this.user = user;
    },
  },

  persist: {
    storage: persistedState.localStorage,
  },
});

/**
 * 
 * import { defineStore } from "pinia";
import { watch } from "vue";
import { useStorage } from "@vueuse/core";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    // user: useStorage("user", null),
    user:
      window.localStorage.getItem("user") !== null
        ? JSON.parse(window.localStorage.getItem("user"))
        : null,
  }),

  getters: {},

  actions: {
    setUser(user) {
      this.user = user;
      window.localStorage.setItem("user", user);
    },
  },
});

 */
