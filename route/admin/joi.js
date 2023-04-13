const Joi = require('joi')
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

 async function run() {
  try{
    await schema.validateAsync({title:'12',content:'12313'})

  }catch(ex) {
    console.log(ex.message);
    return
  }
  console.log('验证通过');
  
}
run()