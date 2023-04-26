const {selectArticle} = require('../../model/article.js')
module.exports = async (req,res) => {
  const result = await selectArticle(req.params.id)
  res.send({
    code:200,
    data:result
  })
}