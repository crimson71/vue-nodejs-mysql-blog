const formidable = require('formidable')
const {addClassify} = require('../../model/classify.js')
module.exports =  (req,res) => {
  const form = new formidable.IncomingForm()
  form.parse(req,async (err,fileds,files) => {
    console.log(fileds);
    await addClassify(fileds.name)
  })
  res.send({
    code:200,
    message:'增加分类成功'
  })
}