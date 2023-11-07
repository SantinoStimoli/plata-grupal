// APP
import { createApp } from 'vue'
import App from './App.vue'

// STYLE
import 'primevue/resources/themes/lara-light-indigo/theme.css'

// COMPONENTS
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

// CREATE
const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.mount('#app')
