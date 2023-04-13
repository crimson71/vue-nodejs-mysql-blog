const Joi = require('joi')

module.exports =  async (req,res) => {
  //定义文章验证规则
const schema = Joi.object({
  title:Joi.string()
  .required()
  .min(2)
  .max(100)
  .error(new Error('文章标题不为空，长度是2-100')),
  content:Joi.string()
  .required()
  .max(10000)
  .error(new Error('文章内容不为空，最大长度为10000'))  

})

try {
  
  await schema.validateAsync(req.body)
}catch(ex) {
  res.redirect(`/admin/article-edit?message=${ex.message}`)
  
}


}