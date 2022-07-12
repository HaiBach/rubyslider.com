import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
// import $ from 'jquery'
// import './assets/js/jquery-last.min'
// import './assets/js/ruby01'
// import './assets/js/rubyanimate'
// import './assets/js/rubyslider'

// window.jQuery = $

const app = createApp(App)

app.use(router)
app.mount('#app')