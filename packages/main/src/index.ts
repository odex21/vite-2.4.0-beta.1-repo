import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { i18n } from './plugins/i18n'
;(async () => {
  const app = createApp(App)
  app.use(router)
  app.use(i18n)

  router.isReady().then(() => {
    app.mount('#app')
  })
})()
