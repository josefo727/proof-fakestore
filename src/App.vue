<template>
	<div>
		<nav-bar />
    <category-filters />
		<router-view></router-view>
	</div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import { useStore } from 'vuex';
import CategoryFilters from "./components/CategoryFilters.vue";

const store = useStore();

const loadCategories = async () => {
  await store.dispatch('fetchCategories');
};

loadCategories();

const loadProducts = async () => {
  await store.dispatch('fetchProducts');
};

loadProducts();

</script>

<style scoped>
/* Tus estilos personalizados aquí */
</style>
