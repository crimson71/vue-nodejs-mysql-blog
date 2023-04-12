//前台页面
const express = require('express')

const home = express.Router()
home.get('/',(req,res) => {
  res.send('welcome to my home')
})

//路由对象做为模块成员进行导出
module.exports = home