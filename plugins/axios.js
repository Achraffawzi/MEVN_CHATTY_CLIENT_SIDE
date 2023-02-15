import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  let api = axios.create({
    baseUrl: runtimeConfig.public.API_URL,
  });
  console.log(runtimeConfig.public.API_URL);
  return {
    provide: {
      api: api,
    },
  };
});
