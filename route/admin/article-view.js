const {viewArticleDetail} = require('../../model/article.js')

module.exports = async (req,res) => {
 const result = await viewArticleDetail(req.params.id)
 res.send({
  code:200,
  message:'获取文章详情成功',
  data:result
 })
}