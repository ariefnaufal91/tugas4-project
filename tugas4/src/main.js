import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Hobi from './components/Hobi.vue'
import Buku from './components/Buku.vue'
import Film from './components/Film.vue'

const app = createApp(App)

// Register components globally
app.component('Hobi', Hobi)
app.component('Buku', Buku)
app.component('Film', Film)

app.use(createPinia())
app.use(router)

app.mount('#app')
