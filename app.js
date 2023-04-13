const express = require('express')
const path = require('path')
const app = express()
const session = require('express-session')

//引入body解析模块
const bodyParser = require('body-parser')
//处理post请求参数,extended用系统模块处理post请求
app.use(bodyParser.urlencoded({extended:false}))
//配置session
app.use(session({secret:'secret key'}))
//数据库连接
require('./model/connect.js')
// 渲染模板所在位置
app.set('views',path.join(__dirname,'views'))
//渲染模板默认后缀
app.set('view engine','art')
//渲染art模板时使用的模板引擎
app.engine('art',require('express-art-template'))

app.use('/admin',require('./middleware/loginGuard.js'))
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