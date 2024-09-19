// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/eslint",
  ],
  colorMode: {
    preference: "primary",
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
