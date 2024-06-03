import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"

let instance = null

function render(props = {}) {
  const { container } = props
  instance = createApp(App)
  instance.use(router)
  instance.use(createPinia())
  instance.mount(container ? container.querySelector("#app") : "#app")
}

export async function bootstrap() {
  console.log("[vueApp] vue app bootstraped")
}

export async function mount(props) {
  console.log("[vueApp] vue app mount", props)
  render(props)
}

export async function unmount(props) {
  console.log("[vueApp] vue app unmount", props)
  if (instance) {
    instance.unmount()
    if (props.container) {
      const container = props.container.querySelector("#app")
      if (container) {
        container.innerHTML = ""
      }
    }
    instance = null
  }
}

// 如果不在 qiankun 环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
