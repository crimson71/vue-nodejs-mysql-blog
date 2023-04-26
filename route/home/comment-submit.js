const {submitComments} = require('../../model/comments.js')

module.exports = async (req,res) => {
  console.log(req.body);
  const data = req.body
 await submitComments(data)
  
  res.send({
    code:200,
    message:'提交留言成功'
  })
}