<template>
  <div class="card mx-0 md:mx-4 lg:mx-8">
    <DataTable :value="itemsInCart">
      <Column header="Acciones">
        <template #body="slotProps">
          <Button icon="pi pi-times" class="p-button-warning" @click="removeFromCart(slotProps.data.id)" />
        </template>
      </Column>
      <Column header="Imagen">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-6rem shadow-2 border-round" />
        </template>
      </Column>
      <Column field="title" header="Nombre"></Column>
      <Column field="category" header="Categoría">
        <template #body="slotProps">
          {{ capitalizeFirstLetter(slotProps.data.category) }}
        </template>
      </Column>
      <Column field="price" header="Precio">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
    </DataTable>
    <div class="total text-right mr-4 mt-4">
      <h2>Total: {{formatCurrency(totalPrice)}}</h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { capitalizeFirstLetter } from './../helpers/strings';
import { formatCurrency } from './../helpers/currency';

const store = useStore();

const itemsInCart = computed(() => store.getters.getItemsInCart);

const totalPrice = computed(() => {
  return itemsInCart.value.reduce((total, product) => {
    return total + product.price;
  }, 0);
});

const removeFromCart = (productId) => {
  store.commit('removeFromCart', productId);
};

</script>

<style scoped>
/* Tus estilos personalizados aquí */
</style>
