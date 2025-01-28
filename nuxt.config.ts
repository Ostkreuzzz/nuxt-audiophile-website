// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@primevue/nuxt-module'],
  css: ['./assets/css/main.css', 'primeicons/primeicons.css'],
  compatibilityDate: '2024-11-01',
  imports: {
    autoImport: true
  },
  devtools: { enabled: true },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura
      }
    }
  }
});
