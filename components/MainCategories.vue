<template>
  <ul class="flex gap-32">
    <li
      v-for="category in categories"
      :key="category"
      class="flex h-[204px] w-[350px] flex-col items-center justify-center rounded-lg bg-[#F1F1F1]"
    >
      <h6 class="mt-[116px]">
        {{ category }}
      </h6>
      <button class="btn-small mt-16">Shop</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ProductType } from '~/enums/Products';

const categories = computed(() =>
  Object.values(ProductType).slice(1, Object.values(ProductType).length)
);
</script>

<style></style>
