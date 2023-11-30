<template>
  <div class="product-list grid">
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const products = ref([]);

const store = useStore();

const filteredProducts = computed(() => store.getters.getFilteredProducts);

</script>

<style scoped>
  .product-list {

  }
</style>
