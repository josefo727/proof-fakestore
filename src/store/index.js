import { createStore } from 'vuex';
import { httpService } from './../services/httpService';
import { storeLocalStorage } from './storeLocalStorage';

export default createStore({
    state: {
        showFilters: false,
        categories: [],
        categoriesSelected: [],
        products: [],
        productsSelected: [],
        filters: [],
        productId: null,
        search: ''
    },
    mutations: {
        toggleShowFilters(state, value) {
            state.showFilters = value;
        },
        setCategories(state, value) {
            state.categories = value;
        },
        setProducts(state, value) {
            state.products = value;
        },
        setProductId(state, value) {
            state.productId = value;
        },
        toggleCategorySelected(state, category) {
            const index = state.categoriesSelected.indexOf(category);
            if (index >= 0) {
                state.categoriesSelected.splice(index, 1);
            } else {
                state.categoriesSelected.push(category);
            }
        },
        clearCategoriesSelected(state) {
            state.categoriesSelected = [];
        },
        setSearch(state, value) {
            state.search = value;
        },
        addToCart(state, productId) {
            const productExists = state.productsSelected.includes(productId);
            if (!productExists) {
                state.productsSelected.push(productId);
            }
        },
        removeFromCart(state, productId) {
            const index = state.productsSelected.indexOf(productId);
            if (index !== -1) {
                state.productsSelected.splice(index, 1);
            }
        }
    },
    actions: {
        async fetchCategories({ commit }) {
            try {
                const data = await httpService.request({ url: '/products/categories' });
                commit('setCategories', data);
            } catch (error) {
                console.error('Error al obtener categorías:', error);
            }
        },
        async fetchProducts({ commit }) {
            try {
                const data = await httpService.request({ url: '/products' });
                commit('setProducts', data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        },
    },
    getters: {
        getCategories: (state) => state.categories,
        getCategoriesSelected: (state) => state.categoriesSelected,
        getFilteredProducts: (state) => {
            let filteredByCategory = state.categoriesSelected.length === 0
                ? state.products
                : state.products.filter(product =>
                    state.categoriesSelected.includes(product.category)
                );
            if (state.search.trim() !== '') {
                return filteredByCategory.filter(product =>
                    product.title.toLowerCase().includes(state.search.toLowerCase())
                );
            }
            return filteredByCategory;
        },
        getProduct: (state) => !!state.productId
            ? state.products.find(product => product.id === state.productId)
            : {},
        getNumberOfItemsInCart: (state) => state.productsSelected.length,
        getItemsInCart: (state) => state.products.filter(product => state.productsSelected.includes(product.id))
    },
    plugins: [storeLocalStorage]
});
