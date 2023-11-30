<template>
  <div class="grid mx-1 md:mx-8">
    <div class="col-12 text-center">
      <h1>{{ product.title }}</h1>
    </div>
    <div class="col-12 md:col-5 lg:col-4">
      <div class="p-col-12 p-md-6 product-image-container px-2 md:px-8">
        <img :src="product.image" :alt="product.title" class="product-detail-image" />
      </div>
    </div>
    <div class="col-12 md:col-6 lg:col-8">
      <div class="p-col-12 p-md-6 product-detail-info">
        <div class="mx-2 mt-2 flex justify-content-between">
          <p class="product-price">Precio: ${{ product.price }}</p>
          <Button style="height: fit-content;" icon="pi pi-plus" label="Añadir" severity="warning" size="small" @click="addProductToCart(product.id)" />
        </div>
        <div class="product-rating">
          <i class="pi pi-star-fill star-icon"></i>
          <span class="rating ml-2">Calificación: {{ product.rating.rate }}</span>
          <span class="reviews ml-2">({{ product.rating.count }} reseñas)</span>
        </div>
        <p class="product-category">Categoría: {{ capitalizeFirstLetter(product.category) }}</p>
        <p class="product-description">Descripción: {{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { capitalizeFirstLetter } from "./../helpers/strings.js";

const store = useStore();
const product = computed(() => store.getters.getProduct);

const addProductToCart = (productId) => {
  store.commit('addToCart', productId);
};
</script>

<style scoped>
.product-detail-container {
}
.product-detail-image {
  width: 100%;
}
.product-detail-info {
}
.product-price {
  font-size: 20px;
  font-weight: 600;
}
.star-icon {
  color: gold;
}
</style>
