export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
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
