
const db = require('./connect.js')
const sqlStr = 'select * from t_users where username = ? and password = ?' 
const queryUser = (username,password) => {
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,[username,password],(error,result) => {
      if(error) return reject(error)
      resolve(result)
    })
  })
  return promise
}


module.exports = {queryUser}