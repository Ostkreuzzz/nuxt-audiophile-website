<template>
  <div
    class="z-10 flex items-center justify-between border-b-[1px] border-white border-opacity-20 bg-black-soft py-32"
  >
    <a>
      <img src="../public/logo.svg" alt="logo" />
    </a>
    <nav>
      <ul class="flex justify-between gap-32">
        <li
          v-for="link in links"
          :key="link"
          class="text-sm font-bold uppercase tracking-wide text-white hover:text-orange"
        >
          <button>{{ link }}</button>
        </li>
      </ul>
    </nav>
    <button
      class="pi pi-shopping-cart text-white hover:text-orange-soft"
      style="font-size: 1.5rem"
    />
  </div>
</template>

<script setup lang="ts">
import { ProductType } from '~/enums/Products';

const links = computed(() => Object.values(ProductType));
</script>

<style></style>
