export function storeLocalStorage(store) {
    const savedState = localStorage.getItem('storeState');
    if (savedState) {
        store.replaceState(Object.assign(store.state, JSON.parse(savedState)));
    }

    store.subscribe((mutation, state) => {
        const persistedData = {
            categories: state.categories,
            categoriesSelected: state.categoriesSelected,
            products: state.products,
            productsSelected: state.productsSelected,
            filters: state.filters,
            productId: state.productId,
            search: state.search,
        };
        localStorage.setItem('storeState', JSON.stringify(persistedData));
    });
}
