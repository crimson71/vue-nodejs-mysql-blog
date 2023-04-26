//用formidable解析 multipart/form-data数据
const formidable = require('formidable')
const path = require('path')
const {addArticle} = require('../../model/article.js')
module.exports =  (req,res) => {
  //创建表单解析对象
  const form = new formidable.IncomingForm()
  //配置上传文件存放位置
  form.uploadDir = path.join(__dirname,'../','../','public','uploads')
  //保留上传文件后缀
  form.options.keepExtensions = true
 
  form.parse(req,  async (err,fields,files) => {
    
    await addArticle({
      title:fields.title,
      content:fields.content,
      create_time:fields.create_time,
      classifition:fields.classifition,
      cover:fields.cover,
      status:1
    })
  

  })
 


  
}