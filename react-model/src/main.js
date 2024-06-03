import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

let app

export async function bootstrap(props) {
  console.log("[reactApp] react app bootstraped", props)
}

export async function mount(props) {
  console.log("[reactApp] react app mount", props)
  // 直接使用 props.container，如果是 DOM 元素
  const container =
    typeof props.container === "string"
      ? document.querySelector(props.container)
      : props.container
  if (!container) {
    throw new Error(`Container ${props.container || "#root"} not found!`)
  }
  app = createRoot(container)
  app.render(<App />)
}

export async function unmount(props) {
  console.log("[reactApp] react app unmount", props)
  if (app) {
    app.unmount()
    app = null
  }
}

// 单独启动子应用时，直接调用 mount 方法进行渲染
if (!window.__POWERED_BY_QIANKUN__) {
  mount({ container: "#root" })
}
