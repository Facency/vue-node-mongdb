学习vue全家桶、mongodb和node。js的项目，基本是学别人的
**主要目录**

        ├── app.js   // 后台入口
        ├── index.html
        ├── server  // 服务端文件
        │   ├── api  // api接口
        │   ├── middlewares
        │   │   └── jwtMid.js  // token验证中间件
        │   ├── models  // mongodb的文档模型
        │   └── public
        ├── src  // 前端主文件
        │   ├── api  // 前端api，与后台api的交互
        │   ├── App.vue
        │   ├── assets  // 静态资源
        │   │   ├── font
        │   │   ├── img
        │   │   └── scss
        │   ├── components // 单个组件
        │   ├── main.js
        │   ├── router
        │   ├── store
        │   ├── utils // axios拦截器
        │   │   └── axiosService.js
        │   └── views // 页面级组件

**下面是这个项目的较详细的经历**
1  npm init -y 构建主要的目录
2  npm install --save-dev webpack 在本地安装webpack
3 创建不同环境下的config文件
