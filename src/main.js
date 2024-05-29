import { registerMicroApps, start } from "qiankun"

// 配置微前端应用
const apps = [
  {
    name: "reactApp", // 子应用名称
    entry: "//localhost:7100", // 子应用入口地址
    container: "#root", // 容器节点的选择器
    // container: null, // 确保这里选择的容器元素在子应用中已经存在
    activeRule: "/react", // 激活子应用的路由规则
  },
  {
    name: "vueApp",
    entry: "//localhost:7200",
    container: "#app",
    // container: null,
    activeRule: "/vue",
  },
]

// 注册子应用
registerMicroApps(apps)

// 启动主应用
start()
