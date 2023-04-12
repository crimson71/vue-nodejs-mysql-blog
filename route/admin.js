//后台管理页
const express = require('express')
const bcrypt = require('bcrypt')

//导入用户集合函数
const {queryUser} = require('../model/user.js')

const admin = express.Router()
admin.get('/login',(req,res) => {
  //渲染模板
  res.render('admin/login')
})
admin.get('/article',async (req,res) => {
  //渲染模板
  res.render('admin/article')
})

//登陆路由
admin.post('/login',async (req,res) => {  
  const {username,password} = req.body   
  // 对登陆信息进行分析
  if(username.trim().length === 0 ) {return res.status(400).send({message:'登陆名或密码错误'})}
  let result = await queryUser(username)  
  console.log(result);
  if(result.length > 0) {
    const pwd = result[0].password   
    const isValid = bcrypt.compare(password,pwd)
    if(isValid) {
      res.send({message:'登陆成功'})
    }else {
      res.status(400).send({message:'登陆名或密码错误'})
    }
    
    
    
  }else {
    res.status(400).send({message:'登陆名或密码错误'})
  }
 

 
})


//路由对象做为模块成员进行导出
module.exports = admin