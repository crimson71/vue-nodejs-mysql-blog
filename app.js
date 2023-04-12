const express = require('express')
const path = require('path')
const app = express()

//引入body解析模块
const bodyParser = require('body-parser')
//处理post请求参数,extended用系统模块处理post请求
app.use(bodyParser.urlencoded({extended:false}))
//数据库连接
require('./model/connect.js')
// 渲染模板所在位置
app.set('views',path.join(__dirname,'views'))
//渲染模板默认后缀
app.set('view engine','art')
//渲染art模板时使用的模板引擎
app.engine('art',require('express-art-template'))

//开放静态资源
app.use(express.static(path.join(__dirname,'public')))
//home路由对象
const home = require('./route/home.js')
//admin路由对象
const admin = require('./route/admin.js')

app.use('/home',home)
app.use('/admin',admin)
app.listen(80)
console.log('listening at 80');