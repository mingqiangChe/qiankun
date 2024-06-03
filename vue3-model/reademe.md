my-vue3-app/
├── public/ # 公共文件
│ └── index.html # 主 HTML 文件
├── src/ # 源代码
│ ├── assets/ # 资源文件（图片、样式等）
│ ├── components/ # 组件
│ ├── views/ # 页面视图
│ ├── App.vue # 根组件
│ ├── main.js # 应用入口文件
│ └── router.js # 路由配置
├── .gitignore # Git 忽略文件配置
├── package.json # 项目配置文件
└── README.md # 项目说明文件

# 支持

# 依赖

npm install vue@3 qiankun webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env vue-router@4 pinia  
npm install --save-dev webpack webpack-cli vue-loader@next @vue/compiler-sfc vue-style-loader css-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin ts-loader @types/node @types/vue @types/jest @types/webpack-env style-loader @babel/preset-react  
npx webpack serve --config webpack.config.js
