const {updateArticleViews} = require('../../model/article.js')
const bodyparse = require('body-parser')
const formidable = require('formidable')
module.exports =  (req,res) => {
  const form = new formidable.IncomingForm()
  // console.log(req.body);
  // await updateArticleViews(req.body)
  form.parse(req,  async (err,fields,files) => {
    console.log(fields);
    await updateArticleViews(fields.views,fields.id)
  })
  res.send({
    code:200,
    message:'更新阅读量成功'
  })

}