import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
// import './assets/js/jquery-last.min'
// import './assets/js/ruby01'
// import './assets/js/rubyanimate'
// import './assets/js/rubyslider'

const app = createApp(App)

app.use(router)
app.mount('#app')