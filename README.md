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
npm start
```

---
浏览器访问```http://localhost:3000```，可以看到页面上显示如下信息，则说明已经成功启动服务了。
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
