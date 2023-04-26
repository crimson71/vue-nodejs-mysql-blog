//导入用户集合函数
const {queryUser} = require('../../model/user.js')
const bcrypt = require('bcrypt')

module.exports  = async (req,res) => {  

  const {username,password} = req.body  
  console.log(username,password);
  if(!username || !password) return res.status(400).send({
    code:400,
    message:'登陆名或密码错误'
  })
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
      const resData =  {code:200,
        message:'登陆成功'}
      res.send(resData)
    }else {
      res.status(400).send(JSON.stringify({message:'登陆名或密码错误'}))
    }
           
  }else {
    res.status(400).send(JSON.stringify({message:'登陆名或密码错误'}))
  }
  
}
