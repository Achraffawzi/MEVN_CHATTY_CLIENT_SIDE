export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
  axios: {
    timeout: 100000, // Set a 30s timeout
  },
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    {
      path: "~/components/",
      // path: "~/components/layout",
      pathPrefix: false,
    },
  ],
});
