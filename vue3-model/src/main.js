import { createApp } from "vue"
import App from "./App.vue"

let instance = null

const app = createApp(App)

export async function bootstrap() {
  console.log("[vueApp] vue app bootstraped")
}

export async function mount(props) {
  console.log("[vueApp] vue app mount", props)
  instance = app.mount(
    props.container ? props.container.querySelector("#app") : "#app"
  )
}

export async function unmount(props) {
  console.log("[vueApp] vue app unmount", props)
  instance.unmount()
  instance.$el.innerHTML = ""
  instance = null
}

// 单独启动子应用时，直接调用 mount 方法进行渲染
if (!window.__POWERED_BY_QIANKUN__) {
  mount({})
}
