import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { create, NMessageProvider, NDialogProvider, NSpin, NButton, NCard, NProgress, NList, NThing, NPopover, NFloatButton } from 'naive-ui'

const naive = create({
  components: [ NMessageProvider, NDialogProvider, NSpin, NButton, NCard, NProgress, NList, NThing, NPopover, NFloatButton ]
})

createApp(App).use(router).use(naive).mount('#app')
