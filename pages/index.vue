<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex w-full justify-center bg-black-soft">
      <div class="relative z-10 w-full max-w-[1100px]">
        <MainHeader />

        <div class="pb-152 pt-128">
          <MainProductBanner />
        </div>
      </div>
    </div>
    <div>
      <main class="w-full max-w-[1100px]">
        <div class="mt-[200px]">
          <MainCategories />
        </div>
        <div class="mt-[168px]">
          <TopProductsSection />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
