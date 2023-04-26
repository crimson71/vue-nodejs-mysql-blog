//前台页面
const express = require('express')
const bodyparser = require('body-parser')
const home = express.Router()
home.get('/',(req,res) => {
  res.send('welcome to my home')
})
//博客概况
home.get('/blog-data',require('./home/blog-data.js'))

home.post('/blogiews-update',require('./home/article-data.js'))
home.get('/comments/getcomments',require('./home/commnets-get.js'))

//提交留言
home.post('/comments/comments-submit',bodyparser.json(),require('./home/comment-submit.js'))
//路由对象做为模块成员进行导出
module.exports = home