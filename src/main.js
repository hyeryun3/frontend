import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import routers from './router'  // router import

createApp(App).use(routers).use(store).mount('#app')

// 위와 같은 코드
// const app = createApp(App)
// app.use(routers)
// app.mount('#app')

