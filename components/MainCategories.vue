<template>
  <a href="#">
    <ul class="flex gap-32">
      <li v-for="category in categories" :key="category" class="group">
        <div
          class="relative flex h-[204px] w-[350px] flex-col items-center justify-end rounded-lg border-[1px] border-white-soft bg-white-soft p-[30px] hover:border-orange hover:shadow-xl group-hover:scale-105"
        >
          <img
            :alt="`category ${category}`"
            loading="lazy"
            decoding="async"
            class="absolute -translate-y-[100px] group-hover:scale-105"
            :src="`/images/categories/image-${category.toLowerCase()}.png`"
          />

          <h6>
            {{ category }}
          </h6>
          <button class="btn-small mt-16">Shop</button>
        </div>
      </li>
    </ul>
  </a>
</template>

<script setup lang="ts">
import { ProductType } from '~/enums/Products';

const categories = computed(() =>
  Object.values(ProductType).slice(1, Object.values(ProductType).length)
);
</script>

<style></style>
