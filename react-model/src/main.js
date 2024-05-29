import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import App from "./App"

let app

export async function bootstrap(props) {
  console.log("[reactApp] react app bootstraped", props)
}

export async function mount(props) {
  console.log("[reactApp] react app mount", props)
  const container = document.querySelector(props.container || "#root")
  if (!container) {
    throw new Error(`Container ${props.container || "#root"} not found!`)
  }
  app = createRoot(container)
  app.render(<App />)
}

export async function unmount(props) {
  console.log("[reactApp] react app unmount", props)
  app.unmount()
  app = null
}

// 单独启动子应用时，直接调用 mount 方法进行渲染
if (!window.__POWERED_BY_QIANKUN__) {
  mount({})
}
