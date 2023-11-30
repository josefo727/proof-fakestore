<template>
	<div class="card">
		<Menubar :model="items">
			<template #start>
        <div class="logo mr-3">
          <img src="/logo.svg" alt="store" />
        </div>
			</template>
			<template #item="{ item, props }">
				<router-link :to="item.path" class="flex align-items-center" v-bind="props.action"
					exact-active-class="active">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.path === '/cart' && !!numberOfItemsInCart" severity="warning" class="ml-1" :value="numberOfItemsInCart" />
				</router-link>
			</template>
			<template #end>
				<div class="flex align-items-center gap-2">
          <div v-if="isHome" class="filters">
            <Button @click="toggleFilters" icon="pi pi-filter" size="small" severity="warning"></Button>
  					<InputText v-model="searchInput" placeholder="Buscar" type="text" class="w-10rem sm:w-auto" />
          </div>
					<Avatar :image="avatar" shape="circle" />
				</div>
			</template>
		</Menubar>
    <Toast />
	</div>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { useStore } from 'vuex';
import { useToast } from 'primevue/usetoast';
const store = useStore();
const toast = useToast();

const searchInput = ref('');

watch(searchInput, (newValue) => {
  store.commit('setSearch', newValue);
});

searchInput.value = store.state.search;

const visible = ref(false);
const items = ref([
	{
		label: 'Productos',
		icon: 'pi pi-home',
		path: '/'
	},
	{
		label: 'Mi Carrito',
		icon: 'pi pi-shopping-cart',
		path: '/cart'
	},
]);
const avatar = ref('https://static.vecteezy.com/system/resources/previews/021/893/817/non_2x/man-avatar-profile-male-face-silhouette-isolated-on-white-background-illustration-vector.jpg')

const isHome = computed(() => {
  return router.currentRoute.value.path === '/';
});

const toggleFilters = () => {
  store.commit('toggleShowFilters', true);
};

const numberOfItemsInCart = computed(() => store.getters.getNumberOfItemsInCart);

watch(numberOfItemsInCart, (newValue, oldValue) => {
  const added = newValue > oldValue;
  toast.add({
    severity: added ? 'success' : 'warn',
    summary: 'Carrito actualizado',
    detail: added ? 'Un nuevo ítem ha sido añadido.' : 'Ítem eliminado correctamente.',
    life: 4000
  });
});

</script>

<style scoped>
.logo img {
  height: 37px;
  margin-bottom: -3px;
}
.card {
	padding: 0;
}

.active {
	background: #ff780178;
	color: #000000d9;
	border-radius: 8px;
}

.filters {
  display: contents;
}
</style>
