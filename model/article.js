const db = require('./connect.js')
//获取文章列表
function getArticleList() {
  const sqlStr = 'select * from t_article'
  const promise = new Promise((resolve, reject) => {
    db.modules.query(sqlStr, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })


  })
  return promise
}

//增加文章
function addArticle(data) {
  const sqlStr = 'insert into t_article (title,content,create_time,classifition,cover,status) values (?,?,?,?,?,?)'
  const sqlParamas = Object.values(data)
  console.log(sqlParamas, 'sqlParamas');
  const promise = new Promise((resolve, reject) => {
    db.modules.query(sqlStr, sqlParamas, (err, result) => {
      if (err) return reject(err)
      // console.log(result, 'result');
      resolve(result)
    })

  })
  return promise

}
//查看文章
function viewArticleDetail(id) {
  const sqlStr = `select * from t_article where arti_id = ${id}`
  const promise = new Promise((resolve, reject) => {
    db.modules.query(sqlStr, (err, result) => {
      if (err) return reject(err)
      resolve(result[0])

    })
  })
  return promise

}

//更新文章
function updateArticle(data,id) {
  const sqlStr = `update t_article set title=?,create_time=?,cover=?,content=?,classifition=? where arti_id=${id}`
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,data,(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise
}


//根据分类筛选文章
function selectArticle(class_id) {
const sqlStr = `select * from t_article where classifition=${class_id} `
const promise = new Promise((resolve,reject) => {
  db.modules.query(sqlStr,(err,result) => {
    if(err) return reject(err)
    resolve(result)
  })
})
return promise
}
//更新文章阅读量
function updateArticleViews(views,id) {
  const sqlStr = `update t_article set readed_count = ${views} where arti_id = ${id}`
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,(err,result) => {
      if(err) return reject(err)
      console.log(result);
      resolve(result)
    })
  })
  return promise
}

module.exports = {
  getArticleList,
  addArticle,
  viewArticleDetail,
  updateArticle,
  selectArticle,
  updateArticleViews
}
