const express = require('express')
const path = require('path')
//导入morgan模块
const morgan = require('morgan')
//导入config模块,获取环境配置信息
const config = require('config')
const app = express()
const cors = require('cors')
const session = require('express-session')

app.use(cors())



//引入body解析模块
const bodyParser = require('body-parser')//处理post请求参数,extended用系统模块处理post请求
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//配置session,保存时间是一天
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge:24*60*60*1000
  }
}))
//数据库连接
require('./model/connect.js')
// 渲染模板所在位置
app.set('views', path.join(__dirname, 'views'))
//渲染模板默认后缀
app.set('view engine', 'art')
//渲染art模板时使用的模板引擎
app.engine('art', require('express-art-template'))
//开放静态资源
app.use(express.static(path.join(__dirname, 'public')))

//获取系统环境变量
if(process.env.NODE_ENV === 'development') {
  console.log(config.get('title'));
  //在开发环境中,打印请求信息
  app.use(morgan('dev'))

} else {

}
console.log();
//home路由对象
const home = require('./route/home.js')
//admin路由对象
const admin = require('./route/admin.js')

app.use('/home', home)
app.use('/admin', admin)
app.use((error,req,res,next) => {
  const result = JSON.parse(error)
  res.send({
    message:result.message
  })


})
app.listen(80)
console.log('listening at 80');