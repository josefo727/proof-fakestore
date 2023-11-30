<template>
  <Sidebar v-model:visible="visible" position="right">
    <div class="mt-3" v-for="(category, key) in categories" :key="key">
      <Checkbox :inputId="key" :value="category" @change="toggleCategory(category)" v-model="categoriesSelected" />
      <label severity="warning" class="ml-2 cursor-pointer" :for="key">{{ capitalizeFirstLetter(category) }}</label>
    </div>
    <div class="mt-6 absolute right-0 mr-5">
      <Button label="Limpiar filtros" severity="warning" @click="clearCategories" size="small" />
    </div>
  </Sidebar>
</template>

<script setup>
import { ref, watchEffect, watch, computed } from 'vue';
import { useStore } from 'vuex';
import Sidebar from 'primevue/sidebar';
import Checkbox from 'primevue/checkbox';
import { capitalizeFirstLetter } from '../helpers/strings.js';

const store = useStore();

const showFiltersValue = computed(() => store.state.showFilters);
const visible = ref(showFiltersValue.value);

watchEffect(() => {
  visible.value = showFiltersValue.value;
});

watch(visible, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    store.commit('toggleShowFilters', newValue);
  }
});

const categories = computed(() => store.getters.getCategories);
const categoriesSelected = computed(() => store.getters.getCategoriesSelected);

const toggleCategory = (category) => {
  store.commit('toggleCategorySelected', category);
};
const clearCategories = (category) => {
  store.commit('clearCategoriesSelected');
};


const isSelected = (category) => {
  return categoriesSelected.value.includes(category);
};

</script>
<style scoped>

</style>
