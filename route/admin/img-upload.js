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
      console.log(files);
    console.log(files.file.filepath.split('public')[1]);
    res.send({code:200,
      message:'上传图片成功',
      data:files.file.filepath.split('public')[1]})

   })
  

}