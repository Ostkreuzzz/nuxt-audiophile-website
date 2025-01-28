<template>
  <header class="flex">
    <div class="flex w-[370px] flex-col items-start justify-center gap-40">
      <div class="flex flex-col gap-24">
        <p class="tracking-[10px] text-white opacity-50">NEW PRODUCT</p>
        <h1 class="text-white">XX99 Mark II Headphones</h1>
        <p class="text-white opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
      <button class="btn btn-primary">See Product</button>
    </div>
    <picture
      ><source
        media="(min-width: 1024px)"
        srcset="/images/home/desktop/image-hero.jpg"
      />
      <source
        media="(min-width: 768px)"
        srcset="/images/home/tablet/image-header.jpg"
      />
      <source
        media="(min-width: 320px)"
        srcset="/images/home/mobile/image-header.jpg"
      />
      <img
        alt="header image"
        loading="lazy"
        decoding="async"
        class="absolute right-[10px] top-64 -z-10 scale-125"
        style="color: transparent"
      />

      /></picture
    >
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
