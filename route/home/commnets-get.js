const {getCommentsList} = require('../../model/comments.js')
module.exports = async (req,res) => {
  const result = await getCommentsList()
  res.send({
    code:200,
    message:'获得留言列表成功',
    data:result
  })
}