const db = require('./connect.js')

//获取分类列表
function getClassifyList() {
  const sqlStr = 'select * from t_classify'
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise

}

//新增分类
function addClassify(data) {
  const sqlStr = 'insert into t_classify (name,status)values (?,1)'
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,[data],(err,result) => {
      if(err) return reject(err)
      resolve(result)
    })
  })
  return promise
}

//修改分类
function editClassify(data) {
  const sqlStr = 'update t_classify set name = ?,status= ? where class_id = ?'
  
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,[data.name,data.status,data.class_id],(err,result) => {
      if(err) return reject(err)
      resolve(result)

    })

  })
 return promise
}
module.exports = {
  getClassifyList,
  addClassify,
  editClassify
}