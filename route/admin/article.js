const {getArticleList} = require('../../model/article.js')
module.exports = async (req,res) => {
  const result = await getArticleList()   
  res.send({code:200,
  data:result,
message:'获取文章列表成功'})
}