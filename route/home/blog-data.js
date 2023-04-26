const { getTotalArt,
  getTotalComm,
  getTotalClass} = require('../../model/home.js')
module.exports = async(req,res) => {
  const totalBlogs = await getTotalArt()
  const totalComments = await getTotalComm()
  const totalClass = await getTotalClass()
  res.send({
    code:200,
    data:[...totalBlogs,...totalComments,...totalClass]
  })
}