const {updateArticle} = require( '../../model/article.js')
const formidable = require('formidable')
module.exports =  (req,res) => {
  const form = new formidable.IncomingForm() 
 form.parse(req,async (err,fileds,files) => {
  console.log(fileds);
  await updateArticle([fileds.title,fileds.create_time,fileds.cover,fileds.content,fileds.classifition],fileds.id)
  res.send({code:200,
message:'修改文章成功'})

 })
   
}