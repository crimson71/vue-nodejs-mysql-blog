const db = require('./connect.js')

function getTotalArt () {
  const artSql = 'select count(*) as totalBlogs from t_article'
  const promise =  new Promise((resolve,reject) => {
    db.modules.query(artSql,(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise
}

function getTotalComm () {
  const commSql = 'select count(*) as commentsCount from t_comments'
  const promise =  new Promise((resolve,reject) => {
    db.modules.query(commSql,(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise
}

function getTotalClass () {
  const classSql= 'select count(*) as totalClass from t_classify'
  const promise =  new Promise((resolve,reject) => {
    db.modules.query(classSql,(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  getTotalArt,
  getTotalComm,
  getTotalClass
}