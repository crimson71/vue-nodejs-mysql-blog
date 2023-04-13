//导入用户集合函数
const {queryUser} = require('../../model/user.js')
const bcrypt = require('bcrypt')

module.exports  = async (req,res) => {  
  const {username,password} = req.body   
  // 对登陆信息进行分析
  if(username.trim().length === 0 ) {return res.status(400).send({message:'登陆名或密码错误'})}
  let result = await queryUser(username)  
  console.log(result);
  if(result.length > 0) {
    const pwd = result[0].password   
    const isValid = bcrypt.compare(password,pwd)
    if(isValid) {  
      req.session.username = result[0].username  
      // 添加userInfo属性  
      req.app.locals.userInfo = result[0]
      // res.send({
      //   message:'登陆成功',
      // })
      //登陆成功后重定向
      res.redirect('/admin/article')
    }else {
      res.status(400).send({message:'登陆名或密码错误'})
    }
           
  }else {
    res.status(400).send({message:'登陆名或密码错误'})
  }
  
}
