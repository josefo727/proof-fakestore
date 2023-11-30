<template>
  <div class="field col-12 md:col-6 lg:col-3 px-4">
    <Card class="product-card">
      <template #header>
        <div class="actions mx-2 mt-2 flex justify-content-between">
          <Button icon="pi pi-plus" label="Añadir" severity="warning" size="small" @click="addProductToCart(product.id)" />
          <Button icon="pi pi-eye" label="Ver" severity="success" size="small" @click="view" />
        </div>
        <img :src="product.image" :alt="product.title" class="product-image" />
      </template>
      <template #title> {{ product.title }}</template>
      <template #content>
        <p class="product-price">Precio: {{ formatCurrency(product.price) }}</p>
        <p class="product-category">Categoría: {{ product.category }}</p>
        <div class="product-rating">
          <i class="pi pi-star-fill star-icon"></i>
          <span class="rating ml-2">Calificación: {{ product.rating.rate }}</span>
          <span class="reviews ml-2">({{ product.rating.count }} reviews)</span>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import { slugify } from "./../helpers/strings.js";
import { useRouter } from 'vue-router';
import { formatCurrency } from './../helpers/currency.js';

const store = useStore();
const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const view = () => {
  store.commit('setProductId', props.product.id);
  const path = `/product/${slugify(props?.product?.title ?? '')}`;
  router.push({ path });
};

const addProductToCart = (productId) => {
  store.commit('addToCart', productId);
};

</script>

<style scoped>
.product-card {
  height: 100%;
}

.product-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: contain;
  object-position: center;
  margin-top: -20px;
}

.product-price {
  color: #1f1f1f;
}

.actions {
  position: relative;
}
.star-icon {
  color: gold;
}
</style>
