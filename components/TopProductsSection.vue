<template>
  <div class="mb-220 flex w-full flex-col gap-48">
    <ZX9SpeakerBanner class="hover:scale-105 hover:shadow-2xl" />
    <ZX7SpeakerBanner class="hover:scale-105 hover:shadow-2xl" />
    <YX1EarphonesBanner />
  </div>
</template>

<script setup lang="ts">
import ZX9SpeakerBanner from './Banners/ZX9SpeakerBanner.vue';
import ZX7SpeakerBanner from './Banners/ZX7SpeakerBanner.vue';
import YX1EarphonesBanner from './Banners/YX1EarphonesBanner.vue';
</script>

<style scoped></style>
