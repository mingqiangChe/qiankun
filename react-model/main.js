import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// 导出 mount 函数，qiankun 会调用此函数来渲染你的应用
export async function mount(props) {
  ReactDOM.render(
    <App />,
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  )
}

// 如果不是在微前端架构内运行，则直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  mount({})
}

// 导出生命周期函数
export async function bootstrap() {
  console.log("react app bootstraped")
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"))
}
