const db = require('./connect.js')
function getCommentsList() {
  const sqlStr = 'select * from t_comments order by comm_time desc'
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })

  })
  return promise
}

//提交留言
function submitComments(data) {
  const sqlStr = 'insert into t_comments (name,ip_address,comm_content,avatar,comm_time) values (?,?,?,?,?)'
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,[data.name,data.ip_address,data.comm_content,data.avatar,data.comm_time],(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  getCommentsList,
  submitComments
}