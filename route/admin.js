//后台管理页
const express = require('express')
const admin = express.Router()

//登陆路由
admin.post('/login',require('./admin/login.js'))
admin.get('/logout',require('./admin/logout.js'))

//上传图片路由
admin.post('/article/img-load',require('./admin/img-upload.js'))
admin.post('/article/img-load4wangedit',require('./admin/img-upload4wangedit.js'))
//文章列表路由
admin.get('/article',require('./admin/article.js'))


// 新增文章路由
admin.post('/aritcile/article-add',require('./admin/article-add.js'))
//查看文章路由
admin.get('/article/article-view/:id',require('./admin/article-view.js'))
//文章编辑路由
admin.post('/article/article-update',require('./admin/article-update.js'))
//筛选文章
admin.get('/article/article-select/:id',require('./admin/article-select.js'))

//获取分类路由
admin.get('/classify',require('./admin/classify.js'))
//新增分类
admin.post('/clssify/classify-add',require('./admin/classify-add.js'))
//修改分类
admin.post('/clssify/classify-update/:id',require('./admin/clssify-update.js'))

//路由对象做为模块成员进行导出
module.exports = admin