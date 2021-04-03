import { createApp } from 'vue';
import App from './App.vue';

import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';

const app = createApp(App);
app.component('Cabecalho',Cabecalho);
app.component('Formulario',Formulario);
app.mount('#app');
