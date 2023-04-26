const formidable = require('formidable')
const path = require('path')
module.exports = (req,res) => {
   //创建表单解析对象
  const form = new formidable.IncomingForm()
  //配置上传文件存放位置
  form.uploadDir = path.join(__dirname,'../','../','public','uploads')
  //保留上传文件后缀  
  form.options.keepExtensions = true
   form.parse(req,  (err,fields,files) => {
    const file = files['wangeditor-uploaded-image']
  console.log(file.filepath.split('public')[1]);
    res.send({
      code:200,    
      "errno": 0, // 注意：值是数字，不能是字符串
      "data": {
          "url": 'http://127.0.0.1/' + file.filepath.split('public')[1], // 图片 src ，必须
         
      }})

   })
  

}