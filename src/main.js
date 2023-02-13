import { createApp } from 'vue'
import App from './App.vue'

import routers from './router'  // router import

// createApp(App).mount('#app')
// createApp(App).use(router)

// 위 createApp 코드 아래처럼 변경
const app = createApp(App)
app.use(routers)  // router 추가
app.mount('#app')

