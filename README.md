# qiankun

微前端架构
main-app/
├── src/
│ └── main.js
├── public/
│ └── index.html
├── webpack.config.js //配置 webpack
├── package.json
└── node_modules/

# 依赖

chemingqiang@chemingqiangdeMacBook-Pro vue3-model % node -v
v21.6.2
chemingqiang@chemingqiangdeMacBook-Pro vue3-model % npm -v
10.2.4
npm install qiankun webpack webpack-cli webpack-dev-server html-webpack-plugin

确保主应用和所有子应用都已经启动。访问 http://localhost:3000 即可查看主应用，并且通过 http://localhost:3000/react 和 http://localhost:3000/vue 来分别查看 React 和 Vue3 子应用。

这样，你就可以方便地练习和开发 React 和 Vue3 项目，同时使用乾坤框架进行管理和集成。

# issures

1、如果主应用嵌套了两个子应用 请务必将两个都开启 因为会影响网络请求失败
如果只有一个子应用启动而另一个没有启动，会导致 Qiankun 在加载时无法正确初始化所有子应用，从而出现报错或无法加载的情况。
2、
