import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: null,
    test: "test val",
  }),

  getters: {},

  actions: {
    setUser(user) {
      console.log("setUser action fired");
      console.log(user);
    },
  },
});
