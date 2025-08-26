import { createApp } from 'vue'
import App from './App.vue'
import multContador from './multContador.vue'

const app = createApp(App)

app.component('multi-contador', multContador)
app.mount('#app')
