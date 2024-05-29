vue-app/
├── src/
│ ├── App.vue
│ └── main.js
├── public/
│ └── index.html
├── webpack.config.js
├── package.json
└── node_modules/

# 依赖

npm install vue@3 qiankun webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env
npm install --save-dev webpack webpack-cli vue-loader@next @vue/compiler-sfc vue-style-loader css-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin
npx webpack serve --config webpack.config.js
