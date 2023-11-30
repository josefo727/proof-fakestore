import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import store from './store';
import App from "./App.vue";
import router from "./router/index";
import PrimeVue from "primevue/config";
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import ConfirmationService from 'primevue/confirmationservice';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DialogService from 'primevue/dialogservice'
import Image from 'primevue/image';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Panel from 'primevue/panel';
import Ripple from 'primevue/ripple';
import TabMenu from 'primevue/tabmenu';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';


const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);
app.use(store);

app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.component('Avatar', Avatar);
app.component('Badge', Badge);
app.component('Button', Button);
app.component('Card', Card);
app.component('Checkbox', Checkbox);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('Image', Image);
app.component('InputText', InputText);
app.component('Menu', Menu);
app.component('Menubar', Menubar);
app.component('Panel', Panel);
app.component('TabMenu', TabMenu);
app.component('Toast', Toast);

app.mount("#app");
