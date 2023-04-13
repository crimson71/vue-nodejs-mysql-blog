//后台管理页
const express = require('express')

const admin = express.Router()

admin.get('/article',async (req,res) => {
  //渲染模板
  res.render('admin/article')
})

//登陆路由
admin.post('/login',require('./admin/login.js'))
admin.get('/logout',require('./admin/logout.js'))

//文章编辑路由
admin.get('/article-edit',require('./admin/article-edit.js'))
// 新增文章路由
admin.post('/article-edit',require('./admin/article-edit-fn.js'))


//路由对象做为模块成员进行导出
module.exports = admin