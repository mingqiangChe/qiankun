import { createApp } from "vue"
import App from "./App.vue"

let app

export async function bootstrap() {
  console.log("vue app bootstraped")
}

export async function mount(props) {
  app = createApp(App)
  app.mount(props.container ? props.container.querySelector("#app") : "#app")
}

export async function unmount() {
  app.unmount()
  app = null
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

function render() {
  app = createApp(App)
  app.mount("#app")
}
