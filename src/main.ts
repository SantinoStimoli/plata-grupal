// APP
import { createApp } from 'vue'
import App from './App.vue'

// STYLE
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import './style.css'
import 'primeicons/primeicons.css'

// COMPONENTS
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dialog from 'primevue/dialog'

// CREATE
const app = createApp(App)
app.use(PrimeVue)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Dialog', Dialog)
app.mount('#app')
