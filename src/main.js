import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BackButtonVue from './components/pages/BackButton.vue'
import PlayerVue from './components/Player.vue'

const app = createApp(App)
app.component('back-button', BackButtonVue)
app.component('player', PlayerVue)
app.use(store)
app.use(router)
app.mount('#app')
