const formidable = require('formidable')
const {editClassify} = require('../../model/classify.js')
module.exports =  (req,res) => {
  const form = new formidable.IncomingForm()
  form.parse(req,async (err,fileds,files) => {
    console.log(fileds);
    await editClassify(fileds)
  })
  res.send({
    code:200,
    message:'修改分类成功'
  })
}