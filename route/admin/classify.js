const {getClassifyList} = require('../../model/classify.js')

module.exports = async(req,res) => {
  const result = await getClassifyList()
  res.send({
    code:200,
    data:result,
    message:'获取分类成功'
  })
}