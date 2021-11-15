# 1.项目搭建步骤
## 1.1 安装node和npm包管理器

## 1.2 安装express应用程序生成器
```
npm install -g express-generator
```

## 1.3 创建express应用程序(名称：mock-data)
```
express --view=pug mock-data
```

## 1.4 进入项目根目录，使用命令安装项目所需依赖
```
npm i
```
## 1.5 运行项目
```
npm run start
```

---
浏览器访问```http://localhost:3000```，可以看到页面上显示如下信息，则说明已经成功启动服务了。(默认端口号：3000)
```
Express
Welcome to Express
```

浏览器访问```http://localhost:3000/users```，可以看到页面上显示如下信息：
```
respond with a resource
```
打开```routes/users.js```文件，可以看到该页面的返回信息是在此文件中定义的。

---

根据需要的请求在```routes/```目录下自定义对应的js，返回想要的模拟数据即可。

**至此，一个模拟后端接口返回数据的项目可以简单使用了。**

---
使用上述命令自动生成的app.js文件，存在一些问题：
### 问题1：改变对应的请求的文件内容时，请求返回的数据未更新

**问题原因：** 项目启动后，已访问的请求会先读取缓存中的数据，改变的文件内容未更新到缓存。

**解决方案：** 每次更改请求对应的文件内容后，重启项目，或者修改请求时的js，使每次请求时不获取缓存内容，每次重新获取文件内容

### 问题2：请求的包含模拟数据的文件需要在```app.js```文件中配置路径，当请求过多时，配置起来过于繁琐

**解决方案：** 统一模拟数据文件的请求方式，将文件全部放到一个目录中，根据请求路径逐层放置

**实现：** 见【优化】

---

### 优化
为了解决缓存问题及统一请求路径，现做如下处理：
1. 在项目根目录下配置```config/api.js```，配置信息详见文件内容。
在其中获取请求路径对应本地文件路径下的文件内容；如果有对应的文件，则先清除相应的缓存信息并获取文件内容后返回，否则返回错误信息。
    
2. 在```app.js```文件中引用```api.js```。
```
    // 引入api.js
    var api = require('./config/api');
```
    
```
    // 配置请求
    app.get('/', function (req, res) {
      res.send('hello world');
    });
    app.get('/api/*', api.get);
    app.post('/api/*', api.post);
    app.options('/api/*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
      res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
      res.sendStatus(200); // 让options请求快速返回
    });
```

在```app.js```中，如果需要的话还可以在配置请求之前对请求的url做一些处理，比如请求的url不是“/”且不以“/api”开头，则自动在请求url前补上“/api”。
当然还可以做一些其他需要的处理。
```
    app.use(function (request, response, next) {
      if (request.url && request.url !== '/' && !request.url.startsWith('api')) { // 如果请求url不是“/”且不是以“/api”开头，则自动补上
        request.url = '/api' + request.url;
      }
      next();
    });
```

## 参考文档
学习更多Express知识，请查看[**Node.js Express 框架(菜鸟教程)**](https://www.runoob.com/nodejs/nodejs-express-framework.html)
